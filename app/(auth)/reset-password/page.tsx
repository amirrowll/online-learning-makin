"use client"
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'

export default function reset() {

    interface type {
        passWord: string
        repeatPassWord: string
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
            <h1 className='text-[#000000] text-[25px] font-kalamehSemiBold pt-11 sm:text-[32px]'> تعیین کلمه عبور جدید </h1>
            <div className='mt-7'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <div className="flex flex-col ">
                        <label
                            className="text-[15px] sm:text-[18px] font-kalamehMedium text-black text-center "
                            htmlFor="passWord"
                        >
                            کلمه عبور جدید را وارد کنید
                        </label>
                        <input
                            className="placeholder-[#868686] py-[12px] px-4 mt-[16px] rounded-lg"
                            placeholder="کلمه عبور جدید را وارد کنید"
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <div className="flex flex-col mt-[17px]">
                        <label
                            className="text-[15px] sm:text-[18px] font-kalamehMedium text-black text-center "
                            htmlFor="passWord"
                        >
                            تکرار کلمه عبور جدید را وارد کنید
                        </label>
                        <input
                            className="placeholder-[#868686] py-[12px] px-4 mt-[16px] rounded-lg"
                            placeholder="تکرار کلمه عبور  را وارد کنید"
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <button className='bg-[#F28C28] px-[80px] sm:px-[96px] text-white text-[17px] sm:text-[20px] font-kalamehMedium rounded-lg py-[7.5px] sm:py-[6px] mt-8'> تغییر کلمه عبور </button>
                </form>
            </div>
        </div>
    )
}
