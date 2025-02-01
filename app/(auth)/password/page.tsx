"use client"
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'

export default function PassWord() {

    interface type {
        passWord: string
        for: string
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
            <span className='text-[#000000] text-[17px] sm:text-[20px] font-kalamehMedium pt-[26px]'> شماره تماس شما ۰۹۱۲۳۳۴۴۵۶۷ </span>
            <div className='mt-6'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <input
                        className=" placeholder:text-[12px] placeholder:text-[#9E9E9E] font-kalamehRegular py-[15.5px] pr-4 rounded-lg w-full placeholder:sm:text-[16px]"
                        placeholder="کلمه عبور خود را وارد نمایید"
                        type="text"
                        id="passWord"
                        {...register("passWord", {
                            required: "کلمه عبور الزامی است ",
                        })}
                    />
                    <p className="error">{errors.passWord?.message}</p>
                    <div className="flex items-start mt-4">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-[4px] bg-gray-50 focus:ring-gray-100 text-[#F28C28] focus:text-[#F28C28]" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-kalamehRegular text-[#9E9E9E]"> مرا به خاطر بسپار </label>
                    </div>
                    <button className='bg-[#F28C28] px-[113px] sm:px-[136px] text-white text-[17px] sm:text-[20px] font-kalamehMedium rounded-lg py-[7.5px] sm:py-[6px] mt-4'> ورود </button>
                </form>
            </div>
            <div className='flex items-center justify-center mt-[30px]'>
                <img src="/landing/img/password 1.svg" alt="img" />
                <span className='text-[#36A8D9] font-kalamehMedium text-[15px] mr-2 sm:text-[18px]'> فراموشی کلمه عبور </span>
            </div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-[#949494] border-0" />
                <span className="absolute px-3 font-kalamehRegular text-[16px] text-[#949494] -translate-x-1/2 bg-[#F9F9F9] left-1/2 ">یا</span>
            </div>
            <button className='border-[#F28C28] border rounded-lg text-[#F28C28] px-[30px] py-2 text-[17px] font-kalamehMedium sm:text-[20px] sm:px-[40px] sm:py-1'> ورود با کلمه عبور یکبار مصرف </button>
        </div>
    )
}
