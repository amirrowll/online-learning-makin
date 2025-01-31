"use client"
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'

export default function Otp() {

    interface type {
        passWord: string
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
            <h1 className='text-[#000000] text-[25px] font-kalamehSemiBold pt-11 sm:text-[32px]'> لطفا کد تایید را وارد کنید </h1>
            <span className='text-[#000000] text-[17px] sm:text-[20px] font-kalamehMedium pt-[26px]'> کد تایید برای شماره ۰۹۱۹۲۰۸۰۷۶۹ پیامک شد </span>
            <div className='mt-6'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <input
                        className="  placeholder:text-[#9E9E9E] font-kalamehRegular py-[15.5px] pr-4 rounded-lg w-full placeholder:sm:text-[16px]"
                        placeholder="کد تایید را وارد نمایید"
                        type="text"
                        id="passWord"
                        {...register("passWord", {
                            required: "کلمه عبور الزامی است ",
                        })}
                    />
                    <p className="error">{errors.passWord?.message}</p>
                    <div className="flex items-start justify-center mt-4">
                        <span className="underline decoration-black font-kalamehMedium text-[15px] sm:text-[18px]"> دریافت مجدد کد </span>
                    </div>
                    <button className='bg-[#F28C28] px-[113px] sm:px-[136px] text-white text-[17px] sm:text-[20px] font-kalamehMedium rounded-lg py-[7.5px] sm:py-[6px] mt-4'> تایید </button>
                </form>
            </div>
        </div>
    )
}
