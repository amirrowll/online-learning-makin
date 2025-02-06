"use client"
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form';
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineSyncLock } from "react-icons/md";

export default function AccountDetails() {

  interface dataType {
    name: string;
    family: string;
    email: string;
    option: string;
  }

  const form = useForm<dataType>({});

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = form;

  const onSubmit = (data: dataType) => {
    console.log(data);
  };

  const onErrorHandler = (errors: FieldErrors<dataType>) => [
    console.log(errors, "errors"),
  ];


  return (
    <div className='xl:px-20'>
      <div className='bg-white px-[120px] mt-[89px] pb-[120px] rounded-lg shadow-sm'>
        <div className='flex justify-center pt-[16px]' >
          <img src="/panel/avatar2.svg" alt="img" />
        </div>
        <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
          <div className='flex justify-between items-center pt-[56px]'>
            <div className='flex flex-col'>
              <div className="flex flex-col">
                <label
                  className="text-[18px] font-kalamehMedium text-black "
                  htmlFor="name"
                >
                  نام
                </label>
                <input
                  className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border border-[#9E9E9E] py-[12px] pr-2 pl-[121px] mt-[10px] rounded-lg"
                  placeholder=" امیرحسین "
                  type="text"
                  id="name"
                  {...register("name", {
                    required: " آدرس الزامی است ",
                  })}
                />
                <p className="error">{errors.name?.message}</p>
              </div>

              <div className="flex flex-col mt-9">
                <label
                  className="text-[18px] font-kalamehMedium text-black"
                  htmlFor="family"
                >
                  نام خانوادگی
                </label>
                <input
                  className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border border-[#9E9E9E] py-[12px] pr-2 pl-[121px] mt-[10px] rounded-lg"
                  placeholder=" محمدی "
                  type="text"
                  id="family"
                  {...register("family", {
                    required: " در وارد کردن ایمیل خود دقت فرمایید ",
                  })}
                />
                <p className="error">{errors.family?.message}</p>
              </div>
            </div>
            <div className='flex flex-col gap-[35px]' >
              <div className="flex flex-col">
                <label
                  className="text-[18px] font-kalamehMedium text-black "
                  htmlFor="email"
                >
                  ایمیل
                </label>
                <input
                  className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border-[#9E9E9E]  py-[12px] pr-2 pl-[121px] mt-[10px] rounded-lg"
                  placeholder=" example@example.com "
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "ایمیل خود را وارد نمایید ",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "invalid form",
                    },
                  })}
                />
                <p className="error">{errors.email?.message}</p>
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[18px] font-kalamehMedium text-black "
                  htmlFor="email"
                >
                  جنسیت
                </label>
                <select
                  id="option"
                  {...register("option")}
                  className="text-[#9E9E9E] font-kalamehRegular border-[#9E9E9E] py-[12px] mt-[10px] pr-2 pl-[121px] rounded-lg text-[16px]"
                >
                  <option value="" > جنسیت خود را انتخاب کنید</option>
                  <option value="option1" className='text-black'> مرد </option>
                  <option value="option2" className='text-black'> زن </option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex items-center mt-[63px] justify-center gap-2'>
            <button className="bg-white border-[#F28C28] border px-[12px] py-[11px] text-[#F28C28] rounded-lg font-kalamehSemiBold text-[16px] flex items-center gap-1">
            تغییر کلمه عبور <MdOutlineSyncLock className='w-5 h-5' />
            </button>
            <button className="bg-[#F28C28] px-[10px] py-[11px] text-white rounded-lg font-kalamehSemiBold text-[16px] flex items-center gap-1">
              ویرایش اطلاعات <PiNotePencilBold className='w-5 h-5' />
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}
