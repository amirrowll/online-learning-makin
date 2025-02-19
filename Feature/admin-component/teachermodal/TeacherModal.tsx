/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/classnames-order */
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
  };
}

export default function TeacherModal({ isOpen, onClose, initialData }: TeacherModalProps) {
  const { register, handleSubmit, setValue, formState: { errors }, trigger } = useForm({
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
      image: initialData?.image || '',
      isActive: initialData?.isActive ?? true
    }
  });

  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);

  if (!isOpen) return null;

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data); // Log the form data

    try {
      const response = await axios.post('https://109.230.200.230:8585/api/Teacher/addTeacher', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Teacher added:', response.data);
      onClose(); // Close the modal after successful submission
    } catch (error: any) {
      console.error('Error adding teacher:', error);
      // Handle error (e.g., display an error message to the user)
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result);
          setValue('image', reader.result); // Set the image data in the form
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full" dir="rtl">
        <div className="flex justify-between items-center mb-6">
          <div className='flex items-center gap-2 '>
            <div className='w-6 h-6 bg-[#F28C28] rounded-sm '>

            </div>
            <h2 className='font-kalamehRegular text-2xl'>
              افزودن استاد
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Teacher Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              نام استاد
            </label>
            <input
              type="text"
              {...register("name", { required: "نام استاد الزامی است" })}
              placeholder="نام استاد را وارد کنید"
              className="w-full p-2 border rounded-md"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Teacher Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              درباره استاد
            </label>
            <textarea
              {...register("description", { required: "توضیحات استاد الزامی است" })}
              placeholder="درباره استاد را وارد کنید"
              className="w-full p-2 border rounded-md h-32 resize-none"
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
          </div>

          {/* Teacher Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              عکس استاد
            </label>
            <div className="border-2 border-dashed rounded-lg p-4">
              <div className="flex items-center justify-center h-32 bg-gray-50">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Teacher"
                    className="h-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400" />
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
              <label htmlFor="image-upload" className="cursor-pointer mt-2 block text-sm text-gray-500 text-center">
                بارگذاری عکس
              </label>
            </div>
          </div>

          {/* Teacher Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              وضعیت استاد:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="true"
                  {...register("isActive")}
                  defaultChecked={initialData?.isActive === true}
                  className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="mr-2">فعال</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="false"
                  {...register("isActive")}
                  defaultChecked={initialData?.isActive === false}
                  className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="mr-2">غیرفعال</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              افزودن استاد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}