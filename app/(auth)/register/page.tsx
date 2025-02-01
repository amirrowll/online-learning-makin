"use client"
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'

export default function reset() {

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
        <div className=' flex flex-col items-center justify-center h-screen bg-[#F9F9F9] '>
            <img src="/imageLanding/logo-makeen login.svg" alt="img" />
            <h1 className='text-[#000000] text-[25px] font-kalamehSemiBold pt-11 sm:text-[32px]'> ثبت نام </h1>
            <div className='mt-7'>
                <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
                    <div className="flex flex-col ">
                        <input
                            className="placeholder:text-[14px] placeholder:text-[#9E9E9E] font-kalamehRegular py-[15.5px] pr-4 rounded-lg w-full placeholder:sm:text-[16px]"
                            placeholder=" نام خود را وارد کنید "
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <div className="flex flex-col mt-[24px]">
                        <input
                            className="placeholder:text-[14px] placeholder:text-[#9E9E9E] font-kalamehRegular py-[15.5px] pr-4 rounded-lg w-full placeholder:sm:text-[16px]"
                            placeholder=" نام خانوادگی خود را وارد کنید "
                            type="text"
                            id="passWord"
                            {...register("passWord", {
                                required: "کلمه عبور الزامی است ",
                            })}
                        />
                        <p className="error">{errors.passWord?.message}</p>
                    </div>
                    <div className="flex flex-col mt-[24px]">
                        <input
                            className="placeholder:text-[14px] placeholder:text-[#9E9E9E] font-kalamehRegular py-[15.5px] pr-4 rounded-lg w-full placeholder:sm:text-[16px]"
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
                            className="text-[14px] text-[#9E9E9E] font-kalamehRegular py-[15.5px] pr-4 rounded-lg w-full sm:text-[16px]"
                        >
                            <option value="" > جنسیت خود را انتخاب کنید</option>
                            <option value="option1" className='text-black'> مرد </option>
                            <option value="option2" className='text-black'> زن </option>
                        </select>
                    </div>
                    <button className='bg-[#F28C28] px-[80px] sm:px-[96px] text-white text-[17px] sm:text-[20px] font-kalamehMedium rounded-lg py-[7.5px] sm:py-[6px] mt-8'> تغییر کلمه عبور </button>
                </form>
            </div>
        </div>
    )
}
