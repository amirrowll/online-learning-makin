"use client"
import Link from 'next/link';
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { FcGoogle } from "react-icons/fc";

export default function page() {

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
        <div className=' flex flex-col items-center justify-center h-screen bg-[#F9F9F9] '>
            <img src="/imageLanding/logo-makeen login.svg" alt="img" />
            <h1 className='text-[#000000] text-[25px] font-kalamehSemiBold pt-11 sm:text-[32px]'> به آکادمی <span className='text-[#36A8D9]'> مکین </span> خوش آمدید </h1>
            <span className='text-[#000000] text-[17px] sm:text-[20px] font-kalamehMedium pt-[26px]'> شماره تماس شما خود را وارد کنید </span>
            <div className='mt-6'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <input
                        className=" placeholder:text-[12px] font-kalamehRegular py-[15.5px] pr-4 rounded-lg w-full"
                        placeholder="شماره تماس خود را وارد نمایید"
                        type="text"
                        id="call"
                        {...register("call", {
                            required: "شماره تماس الزامی است ",
                        })}
                    />
                    <p className="error">{errors.call?.message}</p>
                    <Link href="password"><button className='bg-[#F28C28] px-[113px] sm:px-[136px] text-white text-[17px] sm:text-[20px] font-kalamehMedium rounded-lg py-[7.5px] mt-6'> ورود </button></Link>
                </form>
            </div>
            <div className='flex items-center justify-center bg-white rounded-[10px] shadow-md px-[40px] sm:px-[55px] py-3 mt-10'>
                <FcGoogle className='w-6 h-6' />
                <span className='text-[17px] sm:text-[20px] font-kalamehMedium text-[#051116] pr-4'> ورود با حساب گوگل </span>
            </div>
            <span className='text-[17px] font-kalamehRegular pt-[88px] sm:text-[20px] '> با ورود یا ثبت‌نام، <span className='text-[#36A8D9]'> شرایط استفاده </span> را می پذیرم. </span>
        </div>
    )
}
