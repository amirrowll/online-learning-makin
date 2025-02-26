import { useForm } from 'react-hook-form';
import { X, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface CourseFormData {
  name: string;
  category: string;
  instructor: string;
  price: number;
  discount: number;
  finalPrice: number;
  description: string;
  cover: FileList;
  trailer: FileList;
}

interface CourseModalProps {
  onClose: () => void;
}

interface Category {
  id: string;
  name: string;
}

export default function CoursesModal({ onClose }: CourseModalProps) {
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [trailerPreview, setTrailerPreview] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>(''); // برای نمایش پیام خطا

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CourseFormData>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // دریافت توکن از localStorage
        const token = localStorage.getItem('authToken');
        console.log('Token retrieved:', token); // دیباگ توکن

        if (!token) {
          throw new Error('No authentication token found. Please log in.');
        }

        // درخواست با axios
        const response = await axios.get('https://109.230.200.230:8585/api/Category/GetAllCategoties', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = response.data;
        console.log('Full API Response:', data);

        // بررسی و تنظیم دسته‌بندی‌ها
        if (data.$values && Array.isArray(data.$values)) {
          setCategories(data.$values);
          console.log('Categories set from $values:', data.$values);
        } else if (Array.isArray(data)) {
          setCategories(data);
          console.log('Categories set from direct array:', data);
        } else {
          console.warn('Unexpected API response format:', data);
          setCategories([]);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // مدیریت خطاهای axios
          if (error.response?.status === 401) {
            setErrorMessage('احراز هویت ناموفق. لطفاً دوباره وارد شوید.');
          } else {
            setErrorMessage('خطایی در دریافت دسته‌بندی‌ها رخ داد.');
          }
          console.error('Axios error:', error.response?.status, error.response?.data);
        } else {
          // مدیریت خطاهای غیر axios
          setErrorMessage(error instanceof Error ? error.message : 'خطای ناشناخته');
          console.error('Error fetching categories:', error);
        }
        setCategories([]); // در صورت خطا، آرایه خالی
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = (data: CourseFormData) => {
    console.log('Form submitted with data:', data);
    // Handle form submission here
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'trailer') => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (type === 'cover') {
        setCoverPreview(url);
      } else {
        setTrailerPreview(url);
      }
    }
  };

  const removeCover = () => {
    setValue('cover', undefined as any);
    setCoverPreview('');
  };

  const removeTrailer = () => {
    setValue('trailer', undefined as any);
    setTrailerPreview('');
  };

  console.log('Current categories state:', categories);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-3xl rounded-lg bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="mb-6 flex items-center space-x-4 rtl:space-x-reverse">
          <div className={`size-3 rounded-full bg-orange-500`} />
          <h2 className="text-xl font-semibold">وضعیت دوره: غیرفعال</h2>
        </div>

        {/* نمایش پیام خطا در صورت وجود */}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Course Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                نام دوره *
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="دوره جامع UI/UX"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                دسته‌بندی دوره *
              </label>
              <select
                {...register('category', { required: true })}
                className="w-full rounded-md border border-gray-300 p-2"
              >
                <option value="">لطفاً یک دسته‌بندی انتخاب کنید</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Cover Upload */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                کاور دوره *
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  {...register('cover', { required: !coverPreview })}
                  onChange={(e) => handleFileChange(e, 'cover')}
                  className="hidden"
                  id="cover-upload"
                />
                {coverPreview ? (
                  <div className="relative">
                    <img
                      src={coverPreview}
                      alt="Cover preview"
                      className="h-32 w-full rounded-md object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeCover}
                      className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
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

            {/* Trailer Upload */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                تیزر دوره *
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="video/*"
                  {...register('trailer', { required: !trailerPreview })}
                  onChange={(e) => handleFileChange(e, 'trailer')}
                  className="hidden"
                  id="trailer-upload"
                />
                {trailerPreview ? (
                  <div className="relative">
                    <video
                      src={trailerPreview}
                      controls
                      className="h-32 w-full rounded-md object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeTrailer}
                      className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
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

            {/* Instructor */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                استاد دوره *
              </label>
              <select
                {...register('instructor', { required: true })}
                className="w-full rounded-md border border-gray-300 p-2"
              >
                <option value="محمد صادقی کیا">محمد صادقی کیا</option>
                <option value="علی محمدی">علی محمدی</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                قیمت *
              </label>
              <input
                type="number"
                {...register('price', { required: true })}
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="2,450,000 تومان"
              />
            </div>

            {/* Discount Percentage */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                درصد تخفیف
              </label>
              <input
                type="number"
                {...register('discount')}
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="درصد تخفیف را وارد کنید"
              />
            </div>

            {/* Final Price */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                قیمت بعد تخفیف
              </label>
              <input
                type="number"
                {...register('finalPrice')}
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="قیمت بعد از تخفیف را وارد کنید"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              توضیحات دوره *
            </label>
            <textarea
              {...register('description', { required: true })}
              rows={4}
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="توضیحات دوره را وارد کنید..."
            />
          </div>

          <div className="flex justify-end space-x-4 rtl:space-x-reverse">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            >
              ذخیره دوره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}