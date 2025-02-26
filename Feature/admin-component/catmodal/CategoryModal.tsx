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
            <div className="w-full max-w-md rounded-lg bg-white p-6" dir="rtl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-orange-500">ایجاد دسته بندی</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Category Name */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            نام دسته بندی
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "نام دسته بندی الزامی است" })}
                            placeholder="نام دسته بندی را وارد کنید"
                            className="w-full rounded-md border p-2"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Server Error */}
                    {serverError && (
                        <p className="mt-4 text-sm text-red-500">{serverError}</p>
                    )}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-md bg-orange-500 px-6 py-2 text-white transition-colors hover:bg-orange-600"
                        >
                            افزودن دسته بندی
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}