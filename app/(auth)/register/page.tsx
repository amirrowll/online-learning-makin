"use client"
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'

export default function Register() {

    interface type {
        passWord: string
        name: string
        famiy: string
        option: string
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
            <h1 className='pt-11 font-kalamehSemiBold text-[25px] text-black sm:text-[32px]'> ثبت نام </h1>
            <div className='mt-7'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <div className="flex flex-col ">
                        <input
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[14px] placeholder:text-[#9E9E9E] placeholder:sm:text-[16px]"
                            placeholder=" نام خود را وارد کنید "
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <div className="mt-[24px] flex flex-col">
                        <input
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[14px] placeholder:text-[#9E9E9E] placeholder:sm:text-[16px]"
                            placeholder=" نام خانوادگی خود را وارد کنید "
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <div className="mt-[24px] flex flex-col">
                        <input
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular placeholder:text-[14px] placeholder:text-[#9E9E9E] placeholder:sm:text-[16px]"
                            placeholder=" کلمه عبور خود را وارد کنید "
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <div className="mt-[24px]">
                        <select
                            id="option"
                            {...register("option")}
                            className="w-full rounded-lg py-[15.5px] pr-4 font-kalamehRegular text-[14px] text-[#9E9E9E] sm:text-[16px]"
                        >
                            <option value="" > جنسیت خود را انتخاب کنید</option>
                            <option value="option1" className='text-black'> مرد </option>
                            <option value="option2" className='text-black'> زن </option>
                        </select>
                    </div>
                    <button className='mt-8 rounded-lg bg-[#F28C28] px-[80px] py-[7.5px] font-kalamehMedium text-[17px] text-white sm:px-[96px] sm:py-[6px] sm:text-[20px]'> تغییر کلمه عبور </button>
                </form>
            </div>
        </div>
    )
}
