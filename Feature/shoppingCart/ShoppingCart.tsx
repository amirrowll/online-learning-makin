import React from 'react'
import { HiOutlineTrash } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { PiCreditCardLight } from "react-icons/pi";

export default function ShoppingCart() {

  const cart = [
    {
      id: 1,
      image: "/imageLanding/carts.svg",
      title: " دوره جامع آموزش UI/UX  ",
      mentor: " حسین رفیعی ",
      beforeDiscount: "۴۴۵,۰۰۰",
      afterDiscount: "۳۵۶,۰۰۰",
    },
    {
      id: 2,
      image: "/imageLanding/carts.svg",
      title: " دوره جامع آموزش UI/UX  ",
      mentor: " حسین رفیعی ",
      beforeDiscount: "۴۴۵,۰۰۰",
      afterDiscount: "۳۵۶,۰۰۰",
    },
  ]

  const price = [
    {
      id:1,
      piceProduct: " ۳۵۶,۰۰۰ ",
      disCount: " ۱۰۰,۰۰۰ ",
      total: " ۲۵۶,۰۰۰ ",
    }
  ]

  return (
    <div className='mt-20 px-5 max-w-[480px] mx-auto sm:w-full sm:max-w-[620px] md:flex md:items-start md:max-w-[850px] md:mt-32 md:px-0 md:gap-3 lg:mt-40 lg:max-w-[1440px] lg:px-[70px] lg:gap-16'>
      <div className='flex flex-col gap-5 lg:gap-8 md:w-8/12'>
        {cart.map(item => (
        <div key={item.id} className='flex flex-col bg-white  rounded-[14px] py-5 px-3 mobileXxl:px-6 sm:flex sm:flex-row sm:items-center sm:justify-between md:mr-2 shadow-md'>
          <div className='flex flex-col items-start w-full max-w-[300px] mx-auto relative sm:flex sm:flex-row sm:mx-0 sm:items-center'>
            <img className='w-full sm:max-w-[112px] md:hidden lg:block' src={item.image} alt="img" />
            <button className=''>
              <IoCloseOutline className='absolute top-3 right-3 bg-white w-5 h-5 rounded-full sm:hidden' />
            </button>
            <div className='pr-4 flex flex-col gap-3'>
              <h1 className='text-sm font-kalamehMedium sm:text-[16px] sm:font-kalamehBold pt-4 sm:pt-0'> {item.title} </h1>
              <span className='text-[14px] font-kalamehMedium text-[#9E9E9E] hidden sm:block'> مدرس دوره:{item.mentor} </span>
            </div>
          </div>

          <div className='flex items-center justify-between pt-2 sm:pt-0 gap-10'>
            <span className='text-[12px] font-kalamehRegular text-[#9E9E9E] sm:hidden '> مدرس دوره:{item.mentor} </span>
            <div className='flex flex-col items-center'>
              <span className='text-[#898989] font-kalamehRegular text-[14px] sm:text-[16px] sm:font-kalamehMedium'>{item.beforeDiscount} تومان</span>
              <span className='text-[#051116] text-[14px] font-kalamehBold sm:text-[16px]'>{item.afterDiscount} تومان</span>
            </div>
            <HiOutlineTrash className="hidden sm:block sm:w-5 sm:h-5 text-[#FA2523]" />
          </div>
        </div>
      ))}
      </div>
      

      {price.map(item => (
        <div key={item.id} className='mt-7 py-4 bg-white rounded-[14px] px-4 sm:max-w-[620px] smallTablet:w-[30%] mx-auto md:mt-0 shadow-md lg:w-4/12 xl:w-3/12 '>
          <h1 className='flex items-center text-[20px] font-kalamehMedium'> <PiCreditCardLight />اطلاعات پرداخت </h1>
          <div className='flex items-center justify-between text-[18px] font-kalamehRegular text-[#9E9E9E] pt-6'>
            <span> مقدار کل </span>
            <span className='text-[#051116]'> {item.piceProduct} تومان </span>
          </div>
          <div className='flex items-center justify-between text-[18px] font-kalamehRegular text-[#9E9E9E] py-5'>
            <span> مقدار تخفیف </span>
            <span className='text-[#051116]'> {item.disCount} تومان </span>
          </div>
          <hr className='border-gray-400 pt-5'/>
          <div className='flex items-center justify-between text-[18px] font-kalamehRegular text-[#9E9E9E]'>
            <span>  مجموع: </span>
            <span className='text-[#051116]'> {item.total} تومان </span>
          </div>
          <div className='flex justify-center'>
             <button className='bg-[#F28C28] w-11/12 text-white text-[18px] font-kalamehMedium rounded-lg py-2 mt-7'> پرداخت و شروع دوره </button>
          </div>
        </div>
      ))}

    </div>
  )
}
