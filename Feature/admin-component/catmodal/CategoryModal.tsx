import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import https from 'https';
import { useRouter } from 'next/navigation';

interface CategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: {
        name: string;
        isActive: boolean;
    };
}

interface CategoryFormData {
    name: string;
    isActive: boolean;
}

export default function CategoryModal({ isOpen, onClose, initialData }: CategoryModalProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<CategoryFormData>({
        defaultValues: {
            name: initialData?.name || '',
            isActive: true
        }
    });

    const [serverError, setServerError] = useState<string | null>(null);
    const router = useRouter();

    if (!isOpen) return null;

    const onSubmit = async (data: CategoryFormData) => {
        setServerError(null);
        const token = localStorage.getItem('token');

        if (!token) {
            router.push('/login');
            return;
        }

        try {
            const endpoint = initialData
                ? 'https://109.230.200.230:8585/api/Category/updateCategory'
                : 'https://109.230.200.230:8585/api/Category/addCategory';

            const response = await axios.post(
                endpoint,
                {
                    name: data.name,
                    isActive: true
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    httpsAgent: new https.Agent({
                        rejectUnauthorized: false
                    })
                }
            );

            if (response.status === 200) {
                router.refresh(); // Refresh the page data
                onClose(); // Close the modal
            }
        } catch (error: any) {
            console.error('Error details:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                headers: error.response?.headers
            });

            if (error.response?.status === 401) {
                console.log('Authentication error - redirecting to login');
                localStorage.removeItem('token');
                router.push('/login');
                return;
            }
            if (error.response) {
                setServerError(error.response.data.message || 'خطا در افزودن دسته بندی');
            } else {
                setServerError('خطا در برقراری ارتباط با سرور');
            }
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-[649px] rounded-lg bg-white p-6" dir="rtl">
                <div className="mb-8 flex items-center justify-between">
                    <div className='flex items-center gap-2'>
                        <div className='size-6 rounded bg-[#F28C28]'></div>
                        <h2 className='font-kalamehMedium text-2xl'>
                            {initialData ? 'ویرایش دسته بندی' : 'ایجاد دسته بندی'}
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
                        <div>
                            <label className="text-[18px] font-kalamehMedium text-black">
                                نام دسته بندی
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "نام استاد الزامی است" })}
                                placeholder="نام دسته بندی را وارد کنید"
                                className="text-[#9E9E9E] font-kalamehRegular text-[16px] w-full rounded-lg border border-[#9E9E9E] pr-4 py-[11px] mt-4"
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-8 '>
                        <div className='flex items-center'>
                            <label className="text-[18px] font-kalamehMedium text-black">
                                وضعیت دوره:
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
                                {initialData ? 'ویرایش دسته بندی' : 'افزودن دسته بندی'}
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}