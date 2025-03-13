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
      <div className="w-full max-w-[832px] rounded-lg bg-[#F9F9F9] p-6" dir="rtl">
        <div className="mb-8 flex items-center justify-between">
          <div className='flex items-center gap-2'>
            <div className='size-6 rounded bg-[#F28C28]'></div>
            <h2 className='font-kalamehMedium text-2xl'>
              {initialData ? 'ویرایش استاد' : 'افزودن استاد'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#051116] hover:text-gray-700"
          >
            <X className="size-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='flex items-start gap-[136px]'>
            <div className='w-full'>
              <div>
                <label className="text-[18px] font-kalamehMedium text-black">
                  نام استاد
                </label>
                <input
                  type="text"
                  {...register("name", { required: "نام استاد الزامی است" })}
                  placeholder="نام استاد را وارد کنید"
                  className="text-[#9E9E9E] font-kalamehRegular text-[16px] w-full rounded-lg border border-[#9E9E9E] pr-4 py-[11px] mt-4"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div className='mt-8'>
                <label className="text-[18px] font-kalamehMedium text-black">
                  عکس استاد
                </label>
                <div className="rounded-lg border border-[#9E9E9E] py-[11px] px-4 mt-4 bg-white">
                  <div className="flex items-center justify-center">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Teacher"
                        className="h-full object-contain"
                      />
                    ) : (
                      <div className="flex justify-between items-center w-full">
                        <p className="text-[16px] font-kalamehRegular text-[#9E9E9E]"> عکس استاد را بارگذاری کنید </p>
                        <Upload className="w-6 h-6 text-[#9E9E9E]" />
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
                </div>
              </div>
            </div>
            <div className='w-full '>
              <label className="text-[18px] font-kalamehMedium text-black">
                درباره استاد
              </label>
              <textarea
                {...register("description", { required: "توضیحات استاد الزامی است" })}
                placeholder="درباره استاد را وارد کنید"
                className="text-[#9E9E9E] font-kalamehRegular text-[16px] w-full rounded-lg border border-[#9E9E9E] pr-4 h-[120px] mt-4"
              />
              {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
            </div>
          </div>
          <div className='flex items-center justify-between mt-8 '>
            <div className='flex items-center'>
              <label className="text-[18px] font-kalamehMedium text-black">
                وضعیت استاد:
              </label>
              <div className="flex items-center gap-6 mr-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="true"
                    {...register("isActive")}
                    defaultChecked={initialData?.isActive === true}
                    className="size-6 border-[#000000] text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-[16px] font-kalamehRegular">فعال</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="false"
                    {...register("isActive")}
                    defaultChecked={initialData?.isActive === false}
                    className="size-6 border-[#000000] text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-[16px] font-kalamehRegular">غیرفعال</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-[#F28C28] px-[28px] py-2 text-[#F9F9F9] transition-colors hover:bg-orange-600 text-[16px] font-kalamehSemiBold"
              >
                {initialData ? 'ویرایش استاد' : 'افزودن استاد'}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}