import { useForm } from 'react-hook-form';
import { X, Trash2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface CourseFormData {
  name: string;
  categoryId: string;
  teacherId: string;
  price: number;
  discount: number;
  description: string;
  // cover و trailer را از نوع FileList حذف می‌کنیم چون مستقیم از ref استفاده می‌کنیم
  status: number;
}

interface CourseModalProps {
  onClose: () => void;
}

interface Category {
  id: string;
  name: string;
}

interface Teacher {
  id: string;
  name: string;
}

export default function CoursesModal({ onClose }: CourseModalProps) {
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [trailerPreview, setTrailerPreview] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [teacherErrorMessage, setTeacherErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  const coverFileRef = useRef<File | null>(null);
  const trailerFileRef = useRef<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CourseFormData>({
    defaultValues: {
      status: 0,
      discount: 0,
    },
  });

  const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No authentication token found. Please log in.');
    return token;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = getToken();
        const response = await axios.get('https://109.230.200.230:8585/api/Category/GetAllCategoties', {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        });
        const data = response.data;
        setCategories(data.$values && Array.isArray(data.$values) ? data.$values : Array.isArray(data) ? data : []);
      } catch (error) {
        setErrorMessage(
          axios.isAxiosError(error) && error.response?.status === 401
            ? 'احراز هویت ناموفق. لطفاً دوباره وارد شوید.'
            : 'خطایی در دریافت دسته‌بندی‌ها رخ داد.'
        );
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const token = getToken();
        const response = await axios.get('https://109.230.200.230:8585/api/Teacher/getAllTeacher', {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        });
        const data = response.data;
        setTeachers(data.$values && Array.isArray(data.$values) ? data.$values : Array.isArray(data) ? data : []);
      } catch (error) {
        setTeacherErrorMessage(
          axios.isAxiosError(error) && error.response?.status === 401
            ? 'احراز هویت ناموفق. لطفاً دوباره وارد شوید.'
            : 'خطایی در دریافت اساتید رخ داد.'
        );
        setTeachers([]);
      }
    };
    fetchTeachers();
  }, []);

  const onSubmit = async (data: CourseFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError('');
      setSubmitSuccess(false);

      const token = getToken();

      if (!coverFileRef.current) {
        setSubmitError('انتخاب تصویر کاور الزامی است.');
        setIsSubmitting(false);
        return;
      }

      if (!trailerFileRef.current) {
        setSubmitError('انتخاب ویدیو تیزر الزامی است.');
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append('Name', data.name || '');
      formData.append('CategoryId', data.categoryId || '');
      formData.append('TeacherId', data.teacherId || '');
      formData.append('Price', (data.price || 0).toString());
      formData.append('Description', data.description || '');
      formData.append('Discount', (data.discount || 0).toString());
      formData.append('Status', (data.status || 0).toString());
      formData.append('CoverFile', coverFileRef.current);
      formData.append('PreviewFile', trailerFileRef.current);

      const response = await axios.post(
        'https://109.230.200.230:8585/api/Course/addCourseWithFiles',
        formData,
        { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' } }
      );

      console.log('API response:', response.data);
      setSubmitSuccess(true);
      setTimeout(() => onClose(), 1500);
    } catch (error) {
      setSubmitError(
        axios.isAxiosError(error)
          ? error.response?.data?.message || 'خطا در ثبت دوره'
          : 'خطای ناشناخته در ثبت دوره'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'trailer') => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (type === 'cover' && !file.type.startsWith('image/')) {
      setSubmitError('فقط فایل‌های تصویر برای کاور مجاز هستند.');
      return;
    }
    if (type === 'trailer' && !file.type.startsWith('video/')) {
      setSubmitError('فقط فایل‌های ویدیو برای تیزر مجاز هستند.');
      return;
    }

    const maxSizeImage = 5 * 1024 * 1024; // 5MB
    const maxSizeVideo = 50 * 1024 * 1024; // 50MB
    if (type === 'cover' && file.size > maxSizeImage) {
      setSubmitError('اندازه تصویر کاور نباید بیشتر از 5MB باشد.');
      return;
    }
    if (type === 'trailer' && file.size > maxSizeVideo) {
      setSubmitError('اندازه ویدیو تیزر نباید بیشتر از 50MB باشد.');
      return;
    }

    const url = URL.createObjectURL(file);
    if (type === 'cover') {
      setCoverPreview(url);
      coverFileRef.current = file;
    } else {
      setTrailerPreview(url);
      trailerFileRef.current = file;
    }
  };

  const removeCover = () => {
    setCoverPreview('');
    coverFileRef.current = null;
  };

  const removeTrailer = () => {
    setTrailerPreview('');
    trailerFileRef.current = null;
  };

  const price = watch('price');
  const discount = watch('discount');
  const [finalPrice, setFinalPrice] = useState<number>(0);

  useEffect(() => {
    setFinalPrice(price && discount ? price - (price * discount) / 100 : price || 0);
  }, [price, discount]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-3xl rounded-lg bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          disabled={isSubmitting}
        >
          <X size={24} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-10">
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">وضعیت دوره</label>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register('status')}
                  value={1}
                  className="ml-2 size-4 text-orange-500"
                />
                <span className="text-sm text-gray-700">فعال</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register('status')}
                  value={0}
                  className="ml-2 size-4 text-orange-500"
                />
                <span className="text-sm text-gray-700">غیرفعال</span>
              </label>
            </div>
          </div>

          {errorMessage && <div className="mb-4 text-sm text-red-500">{errorMessage}</div>}
          {teacherErrorMessage && <div className="mb-4 text-sm text-red-500">{teacherErrorMessage}</div>}
          {submitSuccess && (
            <div className="mb-4 rounded-md bg-green-100 p-3 text-sm text-green-700">
              دوره با موفقیت ثبت شد.
            </div>
          )}
          {submitError && (
            <div className="mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700">{submitError}</div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">نام دوره *</label>
              <input
                type="text"
                {...register('name', { required: 'نام دوره الزامی است' })}
                className={`w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2`}
                placeholder="دوره جامع UI/UX"
                disabled={isSubmitting}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">دسته‌بندی دوره *</label>
              <select
                {...register('categoryId', { required: 'انتخاب دسته‌بندی الزامی است' })}
                className={`w-full rounded-md border ${errors.categoryId ? 'border-red-500' : 'border-gray-300'} p-2`}
                disabled={isSubmitting}
              >
                <option value="">لطفاً یک دسته‌بندی انتخاب کنید</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.categoryId && <p className="mt-1 text-xs text-red-500">{errors.categoryId.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">کاور دوره *</label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'cover')}
                  className="hidden"
                  id="cover-upload"
                  disabled={isSubmitting}
                />
                {coverPreview ? (
                  <div className="relative">
                    <img src={coverPreview} alt="Cover preview" className="h-32 w-full rounded-md object-cover" />
                    <button
                      type="button"
                      onClick={removeCover}
                      className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                      disabled={isSubmitting}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="cover-upload"
                    className="flex h-32 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 hover:border-gray-400"
                  >
                    <span className="text-gray-600">انتخاب تصویر کاور</span>
                  </label>
                )}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">تیزر دوره *</label>
              <div className="relative">
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, 'trailer')}
                  className="hidden"
                  id="trailer-upload"
                  disabled={isSubmitting}
                />
                {trailerPreview ? (
                  <div className="relative">
                    <video src={trailerPreview} controls className="h-32 w-full rounded-md object-cover" />
                    <button
                      type="button"
                      onClick={removeTrailer}
                      className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                      disabled={isSubmitting}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="trailer-upload"
                    className="flex h-32 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 hover:border-gray-400"
                  >
                    <span className="text-gray-600">انتخاب ویدیو تیزر</span>
                  </label>
                )}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">استاد دوره *</label>
              <select
                {...register('teacherId', { required: 'انتخاب استاد دوره الزامی است' })}
                className={`w-full rounded-md border ${errors.teacherId ? 'border-red-500' : 'border-gray-300'} p-2`}
                disabled={isSubmitting}
              >
                <option value="">لطفاً یک استاد انتخاب کنید</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
              {errors.teacherId && <p className="mt-1 text-xs text-red-500">{errors.teacherId.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">قیمت *</label>
              <input
                type="number"
                {...register('price', { required: 'قیمت دوره الزامی است', min: { value: 0, message: 'قیمت نمی‌تواند منفی باشد' } })}
                className={`w-full rounded-md border ${errors.price ? 'border-red-500' : 'border-gray-300'} p-2`}
                placeholder="2450000"
                disabled={isSubmitting}
              />
              {errors.price && <p className="mt-1 text-xs text-red-500">{errors.price.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">درصد تخفیف</label>
              <input
                type="number"
                {...register('discount', { min: { value: 0, message: 'درصد تخفیف نمی‌تواند منفی باشد' }, max: { value: 100, message: 'درصد تخفیف نمی‌تواند بیشتر از 100 باشد' } })}
                className={`w-full rounded-md border ${errors.discount ? 'border-red-500' : 'border-gray-300'} p-2`}
                placeholder="درصد تخفیف را وارد کنید"
                defaultValue="0"
                disabled={isSubmitting}
              />
              {errors.discount && <p className="mt-1 text-xs text-red-500">{errors.discount.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">قیمت بعد تخفیف</label>
              <input
                type="number"
                value={finalPrice}
                className="w-full rounded-md border border-gray-300 bg-gray-50 p-2"
                placeholder="قیمت بعد از تخفیف"
                readOnly
                disabled={isSubmitting}
              />
              <p className="mt-1 text-xs text-gray-500">این مقدار به صورت خودکار محاسبه می‌شود</p>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">توضیحات دوره *</label>
            <textarea
              {...register('description', { required: 'توضیحات دوره الزامی است' })}
              rows={4}
              className={`w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-300'} p-2`}
              placeholder="توضیحات دوره را وارد کنید..."
              disabled={isSubmitting}
            />
            {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
          </div>

          <div className="flex justify-end space-x-4 rtl:space-x-reverse">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
              disabled={isSubmitting}
            >
              انصراف
            </button>
            <button
              type="submit"
              className={`rounded-md px-4 py-2 text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'در حال ارسال...' : 'ذخیره دوره'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}