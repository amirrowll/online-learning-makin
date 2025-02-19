"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import Captcha from '@/components/Captcha';
import https from 'https';

interface LoginFormData {
    identifier: string;
    password: string;
    captchaInput: string;
}

export default function LoginPage() {
    const [cookies, setCookie] = useCookies(['token']);
    const [captchaId, setCaptchaId] = useState('');
    const [captchaImage, setCaptchaImage] = useState('');
    const [loginError, setLoginError] = useState('');

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<LoginFormData>();

    const onSubmit = async (data: LoginFormData) => {
        setLoginError('');
        console.log('Submitting:', { ...data, captchaId });

        try {
            const response = await fetch('https://109.230.200.230:8585/api/v1/Authentication/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    Identifire: data.identifier, // تغییر به Identifire (همان‌طور که سرور انتظار دارد)
                    password: data.password,
                    captchaInput: data.captchaInput,
                    captchaId: captchaId
                }),
                agent: new https.Agent({ rejectUnauthorized: false }) // فقط برای محیط توسعه
            });

            console.log('Response status:', response.status);
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                
                try {
                    const errorData = JSON.parse(errorText);
                    setLoginError(errorData.message || 'خطا در ورود');
                    
                    if (errorData.errors) {
                        errorData.errors.forEach((err: { field: any; message: string; }) => {
                            setError(err.field as keyof LoginFormData, {
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

            const responseData = await response.json();
            setCookie('token', responseData.token, {
                path: '/',
                maxAge: 7 * 24 * 60 * 60,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Lax'
            });
            localStorage.setItem('token', responseData.token); // ذخیره توکن در localStorage
            router.push('/'); // هدایت کاربر به صفحه اصلی
        } catch (error) {
            console.error('Network error:', error);
            setLoginError('خطا در برقراری ارتباط با سرور');
        }
    };

    return (
        <div className='flex h-screen flex-col items-center justify-center bg-[#F9F9F9]'>
            <img src="/imageLanding/logo-makeen login.svg" alt="لوگو مکین" />
            <h1 className='pt-11 font-kalamehSemiBold text-[25px] text-black sm:text-[32px]'>
                به آکادمی <span className='text-[#36A8D9]'>مکین</span> خوش آمدید
            </h1>
            <span className='pt-[26px] font-kalamehMedium text-[17px] text-black sm:text-[20px]'>
                شماره تماس خود را وارد کنید
            </span>

            <div className='mt-6 w-full max-w-md px-4'>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[12px]"
                        placeholder="شماره تماس خود را وارد نمایید"
                        type="tel"
                        {...register("identifier", {
                            required: "شماره تماس الزامی است",
                            pattern: {
                                value: /^09[0-9]{9}$/,
                                message: "شماره تماس معتبر نیست (مثال: 09123456789)"
                            }
                        })}
                    />
                    {errors.identifier && (
                        <p className="mt-1 text-sm text-red-500">{errors.identifier.message}</p>
                    )}

                    <input
                        className="mt-4 w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[12px]"
                        placeholder="کلمه عبور خود را وارد نمایید"
                        type="password"
                        {...register("password", {
                            required: "کلمه عبور الزامی است",
                            minLength: {
                                value: 8,
                                message: "کلمه عبور باید حداقل ۸ کاراکتر باشد"
                            }
                        })}
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                    )}

                    <Captcha
                        setCaptchaId={setCaptchaId}
                        setCaptchaImage={setCaptchaImage}
                        setLoginError={setLoginError}
                    />

                    <input
                        className="mt-4 w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[12px]"
                        placeholder="کد امنیتی را وارد نمایید"
                        {...register("captchaInput", {
                            required: "کد امنیتی الزامی است",
                        })}
                    />
                    {errors.captchaInput && (
                        <p className="mt-1 text-sm text-red-500">{errors.captchaInput.message}</p>
                    )}

                    {loginError && (
                        <p className="mt-2 text-center text-sm text-red-500">{loginError}</p>
                    )}

                    <button
                        type="submit"
                        className='mt-6 w-full rounded-lg bg-[#F28C28] py-[15.5px] font-kalamehMedium text-[17px] text-white sm:text-[20px]'
                    >
                        ورود
                    </button>
                </form>
            </div>

            <button className='mt-10 flex items-center justify-center rounded-[10px] bg-white px-6 py-3 shadow-md'>
                <FcGoogle className='size-6' />
                <span className='mr-4 font-kalamehMedium text-[17px] text-[#051116] sm:text-[20px]'>
                    ورود با حساب گوگل
                </span>
            </button>

            <p className='pt-[88px] font-kalamehRegular text-[17px] sm:text-[20px]'>
                با ورود یا ثبت‌نام، <span className='text-[#36A8D9]'>شرایط استفاده</span> را می پذیرم.
            </p>
        </div>
    );
}