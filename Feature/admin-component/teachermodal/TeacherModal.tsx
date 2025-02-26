import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    name: string;
    description: string;
    image?: string;
    isActive: boolean;
  } | null;
}

export default function TeacherModal({ isOpen, onClose, initialData }: TeacherModalProps) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
      isActive: initialData?.isActive ?? true
    }
  });

  const token = localStorage.getItem('token');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);

  if (!isOpen) return null;

  const onSubmit = async (data: any) => {
    try {
      // Create FormData instance
      const formData = new FormData();
      formData.append('Name', data.name);
      formData.append('Description', data.description);
      formData.append('Status', data.isActive === 'true' ? '1' : '0');

      // Append the actual file if it exists
      if (imageFile) {
        formData.append('ImageName', imageFile);
      }

      const response = await axios.post(
        'https://109.230.200.230:8585/api/Teacher/addTeacher',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Important for file upload
          },
        }
      );

      console.log('Teacher added:', response.data);
      onClose();
    } catch (error: any) {
      console.error('Error adding teacher:', error);
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Store the actual file
      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6" dir="rtl">
        <div className="mb-6 flex items-center justify-between">
          <div className='flex items-center gap-2'>
            <div className='size-6 rounded-sm bg-[#F28C28]'></div>
            <h2 className='font-kalamehRegular text-2xl'>
              {initialData ? 'ویرایش استاد' : 'افزودن استاد'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Teacher Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              نام استاد
            </label>
            <input
              type="text"
              {...register("name", { required: "نام استاد الزامی است" })}
              placeholder="نام استاد را وارد کنید"
              className="w-full rounded-md border p-2"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Teacher Description */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              درباره استاد
            </label>
            <textarea
              {...register("description", { required: "توضیحات استاد الزامی است" })}
              placeholder="درباره استاد را وارد کنید"
              className="h-32 w-full resize-none rounded-md border p-2"
            />
            {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
          </div>

          {/* Teacher Photo */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              عکس استاد
            </label>
            <div className="rounded-lg border-2 border-dashed p-4">
              <div className="flex h-32 items-center justify-center bg-gray-50">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Teacher"
                    className="h-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto size-8 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">عکس استاد را بارگذاری کنید</p>
                    <p className="text-xs text-gray-400">حداکثر سایز عکس 2MB می باشد</p>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="mt-2 block cursor-pointer text-center text-sm text-gray-500">
                بارگذاری عکس
              </label>
            </div>
          </div>

          {/* Teacher Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              وضعیت استاد:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="true"
                  {...register("isActive")}
                  defaultChecked={initialData?.isActive === true}
                  className="size-4 border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <span className="mr-2">فعال</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="false"
                  {...register("isActive")}
                  defaultChecked={initialData?.isActive === false}
                  className="size-4 border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <span className="mr-2">غیرفعال</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-orange-500 px-6 py-2 text-white transition-colors hover:bg-orange-600"
            >
              {initialData ? 'ویرایش استاد' : 'افزودن استاد'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}