"use client"
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'

export default function ResetPassword() {

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
        <div className=' flex h-screen flex-col items-center justify-center bg-[#F9F9F9] '>
            <img src="/imageLanding/logo-makeen login.svg" alt="img" />
            <h1 className='pt-11 font-kalamehSemiBold text-[25px] text-black sm:text-[32px]'> تعیین کلمه عبور جدید </h1>
            <div className='mt-7'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <div className="flex flex-col ">
                        <label
                            className="text-center font-kalamehMedium text-[15px] text-black sm:text-[18px] "
                            htmlFor="passWord"
                        >
                            کلمه عبور جدید را وارد کنید
                        </label>
                        <input
                            className="mt-[16px] rounded-lg px-4 py-[12px] placeholder-[#868686]"
                            placeholder="کلمه عبور جدید را وارد کنید"
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <div className="mt-[17px] flex flex-col">
                        <label
                            className="text-center font-kalamehMedium text-[15px] text-black sm:text-[18px] "
                            htmlFor="passWord"
                        >
                            تکرار کلمه عبور جدید را وارد کنید
                        </label>
                        <input
                            className="mt-[16px] rounded-lg px-4 py-[12px] placeholder-[#868686]"
                            placeholder="تکرار کلمه عبور  را وارد کنید"
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <button className='mt-8 rounded-lg bg-[#F28C28] px-[80px] py-[7.5px] font-kalamehMedium text-[17px] text-white sm:px-[96px] sm:py-[6px] sm:text-[20px]'> تغییر کلمه عبور </button>
                </form>
            </div>
        </div>
    )
}
