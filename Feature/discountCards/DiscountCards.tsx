"use client"
import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { CiPercent } from "react-icons/ci";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./DiscountCards.css"

export default function DiscountCards() {

    const cards = [
        {
            id: 1,
            image: "/imageLanding/card1.svg",
            title: " دوره جامع آموزش UI/UX  ",
            rate: "۴.۵",
            text: " هر محصولی چه حقیقی و چه دیجیتال برای کاربر یک تجربه خلق می‌کند. با طراحی...  ",
            mentor: " حسین رفیعی ",
            person: "۲۲۴",
            time: "۸ ساعت",
            beforeDiscount: "۴۴۵,۰۰۰",
            afterDiscount: "۳۵۶,۰۰۰",
            discount: "۲۰٪"
        },
        {
            id: 2,
            image: "/imageLanding/card1.svg",
            title: " دوره جامع آموزش UI/UX  ",
            rate: "۴.۵",
            text: " هر محصولی چه حقیقی و چه دیجیتال برای کاربر یک تجربه خلق می‌کند. با طراحی...  ",
            mentor: " حسین رفیعی ",
            person: "۲۲۴",
            time: "۸ ساعت",
            beforeDiscount: "۴۴۵,۰۰۰",
            afterDiscount: "۳۵۶,۰۰۰",
            discount: "۲۰٪"
        },
        {
            id: 3,
            image: "/imageLanding/card1.svg",
            title: " دوره جامع آموزش UI/UX  ",
            rate: "۴.۵",
            text: " هر محصولی چه حقیقی و چه دیجیتال برای کاربر یک تجربه خلق می‌کند. با طراحی...  ",
            mentor: " حسین رفیعی ",
            person: "۲۲۴",
            time: "۸ ساعت",
            beforeDiscount: "۴۴۵,۰۰۰",
            afterDiscount: "۳۵۶,۰۰۰",
            discount: "۲۰٪"
        },
        {
            id: 4,
            image: "/imageLanding/card1.svg",
            title: " دوره جامع آموزش UI/UX  ",
            rate: "۴.۵",
            text: " هر محصولی چه حقیقی و چه دیجیتال برای کاربر یک تجربه خلق می‌کند. با طراحی...  ",
            mentor: " حسین رفیعی ",
            person: "۲۲۴",
            time: "۸ ساعت",
            beforeDiscount: "۴۴۵,۰۰۰",
            afterDiscount: "۳۵۶,۰۰۰",
            discount: "۲۰٪"
        },
        {
            id: 5,
            image: "/imageLanding/card1.svg",
            title: " دوره جامع آموزش UI/UX  ",
            rate: "۴.۵",
            text: " هر محصولی چه حقیقی و چه دیجیتال برای کاربر یک تجربه خلق می‌کند. با طراحی...  ",
            mentor: " حسین رفیعی ",
            person: "۲۲۴",
            time: "۸ ساعت",
            beforeDiscount: "۴۴۵,۰۰۰",
            afterDiscount: "۳۵۶,۰۰۰",
            discount: "۲۰٪"
        },
    ]

    return (

        <div className='pt-10 lg:pt-20 px-5 lg:px-[71px]'>
            <h1 className='flex items-center text-[#051116] text-[16px] font-kalamehMedium gap-1 justify-center md:text-[20px] lg:text-[24px]'><CiPercent className='w-5 h-5 md:w-6 md:h-6' /> پیشنهاد های تخفیف دار </h1>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                className="swipper2"
                modules={[Pagination, Mousewheel, Keyboard, Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 17,
                    },
                    360: {
                        slidesPerView: 1.4,
                        spaceBetween: 17,
                    },
                    435: {
                        slidesPerView: 1.4,
                        spaceBetween: 17,
                    },
                    500: {
                        slidesPerView: 1.6,
                        spaceBetween: 17,
                    },
                    600: {
                        slidesPerView: 1.8,
                        spaceBetween: 17,
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 17,
                    },
                    820: {
                        slidesPerView: 2.3,
                        spaceBetween: 17,
                    },
                    910: {
                        slidesPerView: 2.5,
                        spaceBetween: 17,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 17,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 31,
                    },
                  
                }}
            >
                <div>
                    {cards.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div key={item.id} className='shadow-lg rounded-[14px] mt-5'>
                                <img className='w-full' src={item.image} alt="img" />
                                <div className='px-4 pb-1'>
                                    <div className='flex items-center justify-between pt-[16px]'>
                                        <span className='font-kalamehBold text-[13px] text-[#051116] mobile:text-[15px] '> {item.title} </span>
                                        <span className='pr-[42px] text-[14px] font-kalamehSemiBold mobile:text-[15px] flex items-center'>{item.rate}<img className='' src="/landing/img/star.svg" alt="img" /></span>

                                    </div>
                                    <p className='text-[#636363] text-[13px] font-kalamehRegular pt-2 mobile:text-[14px]'>{item.text}</p>
                                    <div className=' flex items-center pt-2 justify-between'>

                                        <span className='text-[#051116] font-kalamehSemiBold text-[14px] pr-1 flex items-center'><IoPersonOutline /> {item.mentor} </span>
                                        <span className='flex items-center text-[#051116] text-[14px] font-kalamehBold pr-[90px] gap-1'>{item.person}<IoPersonOutline /></span>
                                    </div>
                                    <hr className='mt-6 w-10/12 mx-auto border-[1px]' />
                                    <div className='flex items-start pt-[16px] justify-between'>
                                        <span className='flex items-center text-[#051116] text-[13px] font-kalamehBold'><LuAlarmClock className='w-5 h-5' />{item.time} </span>
                                        <div className='flex flex-col items-end '>
                                            <div className='flex items-center'>
                                                <span className='text-[12px] font-kalamehSemiBold bg-[#F28C28] px-[9px] py-[1] text-white rounded-[4px] mr-[35px] '>{item.discount}</span>
                                                <span className='text-[#898989] text-[14px] font-kalamehRegular pr-[10px] line-through decoration-[#898989]'>{item.beforeDiscount} تومان</span>
                                            </div>
                                            <span className='text-[#051116] font-kalamehBold text-[14px]'>{item.afterDiscount} تومان</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    )
}
