"use client"
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { FcGoogle } from "react-icons/fc";

export default function Page() {

    interface type {
        call: string
    }

    const form = useForm<type>({})

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = form;

    const onSubmit = (data: type) => {
        console.log(data);
    };

    const onErrorHandler = (errors: FieldErrors<type>) => [
        console.log(errors, "errors"),
    ];

    return (
        <div className=' flex h-screen flex-col items-center justify-center bg-[#F9F9F9] '>
            <img src="/imageLanding/logo-makeen login.svg" alt="img" />
            <h1 className='pt-11 font-kalamehSemiBold text-[25px] text-black sm:text-[32px]'> به آکادمی <span className='text-[#36A8D9]'> مکین </span> خوش آمدید </h1>
            <span className='pt-[26px] font-kalamehMedium text-[17px] text-black sm:text-[20px]'> شماره تماس شما خود را وارد کنید </span>
            <div className='mt-6'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <input
                        className=" w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[12px]"
                        placeholder="شماره تماس خود را وارد نمایید"
                        type="text"
                        id="call"
                        {...register("call", {
                            required: "شماره تماس الزامی است ",
                        })}
                    />
                    <p className="error">{errors.call?.message}</p>
                    <button className='mt-6 rounded-lg bg-[#F28C28] px-[113px] py-[7.5px] font-kalamehMedium text-[17px] text-white sm:px-[136px] sm:text-[20px]'> ورود </button>
                </form>
            </div>
            <div className='mt-10 flex items-center justify-center rounded-[10px] bg-white px-[40px] py-3 shadow-md sm:px-[55px]'>
                <FcGoogle className='size-6' />
                <span className='pr-4 font-kalamehMedium text-[17px] text-[#051116] sm:text-[20px]'> ورود با حساب گوگل </span>
            </div>
            <span className='pt-[88px] font-kalamehRegular text-[17px] sm:text-[20px] '> با ورود یا ثبت‌نام، <span className='text-[#36A8D9]'> شرایط استفاده </span> را می پذیرم. </span>
        </div>
    )
}
