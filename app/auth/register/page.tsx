"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'

export default function Register() {
    const [loginError, setLoginError] = useState('');

    interface type {
        password: string
        firstname: string
        lastName: string
        phoneNumber: string
        email: string
        gender: boolean
    }

    const form = useForm<type>({})
    const router = useRouter()

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError
    } = form;

    const onSubmit = async (data: type) => {
        try {
            const response = await fetch("https://109.230.200.230:8585/api/v1/Authentication/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    firstname: data.firstname,
                    lastName: data.lastName,
                    gender: data.gender === true,
                    password: data.password,
                    phoneNumber: data.phoneNumber,
                    email: data.email
                })
            })
            console.log('Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);

                try {
                    const errorData = JSON.parse(errorText);
                    setLoginError(errorData.message || 'خطا در ورود');

                    if (errorData.errors) {
                        errorData.errors.forEach((err: { field: any; message: string; }) => {
                            setError(err.field as keyof type, {
                                type: 'manual',
                                message: err.message
                            });
                        });
                    }
                } catch (e) {
                    setLoginError('خطای سرور: پاسخ نامعتبر');
                }
                return;
            }
            router.push('/auth/login')
        } catch (error) {
            console.error('Network error:', error);
            setLoginError('خطا در برقراری ارتباط با سرور');
        }
    };

    const onErrorHandler = (errors: FieldErrors<type>) => [
        console.log(errors, "errors"),
    ];

    return (
        <div className=' flex h-screen flex-col items-center justify-center bg-[#F9F9F9] '>
            <img src="/imageLanding/logo-makeen login.svg" alt="img" />
            <h1 className='pt-11 font-kalamehSemiBold text-[25px] text-black sm:text-[32px]'> ثبت نام </h1>
            <div className='mt-7'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <div className="flex flex-col ">
                        <input
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[14px] placeholder:text-[#9E9E9E] placeholder:sm:text-[16px]"
                            placeholder=" نام خود را وارد کنید "
                            type="text"
                            id="firstname"
                            {...register("firstname", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.firstname?.message}</p>
                    </div>
                    <div className="mt-[24px] flex flex-col">
                        <input
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[14px] placeholder:text-[#9E9E9E] placeholder:sm:text-[16px]"
                            placeholder=" نام خانوادگی خود را وارد کنید "
                            type="text"
                            id="lastName"
                            {...register("lastName", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.lastName?.message}</p>
                    </div>
                    <div className="mt-[24px] flex flex-col">
                        <input
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[14px] placeholder:text-[#9E9E9E] placeholder:sm:text-[16px]"
                            placeholder=" کلمه عبور خود را وارد کنید "
                            type="text"
                            id="password"
                            {...register("password", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.password?.message}</p>
                    </div>
                    <div className="mt-[24px] flex flex-col">
                        <input
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[14px] placeholder:text-[#9E9E9E] placeholder:sm:text-[16px]"
                            placeholder=" شماره همراه خود را وارد کنید "
                            type="text"
                            id="phoneNumber"
                            {...register("phoneNumber", {
                                required: "شماره همراه الزامی است ",
                            })}
                        />
                        <p className="error">{errors.phoneNumber?.message}</p>
                    </div>
                    <div className="mt-[24px] flex flex-col">
                        <input
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[14px] placeholder:text-[#9E9E9E] placeholder:sm:text-[16px]"
                            placeholder="ایمیل خود را وارد کنید"
                            type="email"
                            id="email"
                            {...register("email", {
                                required: " در وارد کردن ایمیل خود دقت فرمایید ",
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "فرمت ایمیل نامعتبر است",
                                },
                            })}
                        />
                        <p className="error text-red-500 text-sm mt-1">{errors.email?.message}</p>
                    </div>
                    <div className="mt-[24px]">
                        <select
                            id="gender"
                            {...register("gender")}
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular text-[14px] text-[#9E9E9E] sm:text-[16px]"
                        >
                            <option value="" > جنسیت خود را انتخاب کنید</option>
                            <option value="true" className='text-black'> مرد </option>
                            <option value="false" className='text-black'> زن </option>
                        </select>
                    </div>
                    <button className='mt-8 rounded-lg bg-[#F28C28] px-[80px] py-[7.5px] font-kalamehMedium text-[17px] text-white sm:px-[96px] sm:py-[6px] sm:text-[20px]'> تغییر کلمه عبور </button>
                </form>
            </div>
        </div>
    )
}
