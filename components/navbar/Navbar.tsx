"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

interface input {
    search: string
}

export default function Navbar() {

    const pathName = usePathname()

    const titleNavbar =[
        {
            id :1 ,
            title : "صفحه اصلی",
            url : "/"
        },
        {
            id :2 ,
            title : "  دوره ها ",
            url: "/Courses"
        },
        {
            id :3 ,
            title : " قوانین و مقررات ",
            url: "/rules"
        },
        {
            id :4 ,
            title : " درباره ما ",
            url : "aboutUs"
        },
    ]

    const form = useForm<input>({})

    const {
        handleSubmit,
        register
    } = form

    const onSubmit = (data: input) => {
        console.log(data);
    };

    return (
        <div className='fixed top-0 right-0 left-0 bg-white border-b-[2px] lg:bg-[#F9F9F9] z-50'>
            <div className='flex items-center justify-between py-[14px] lg:py-[8px] px-4 xl:px-[70px] max-w-[1440px] mx-auto'>

                <form className='relative' noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <input className='hidden md:block border-gray-200 rounded-[66px] pr-[35px] w-10/12 '
                            type='search'
                            id="search"
                            {...register("search")} />
                    </div>
                    <button className="absolute inset-y-0 start-0 flex items-center ps-3">
                        <CiSearch className='w-6 h-6 text-[#949494] md:text-[#051116]' />
                    </button>
                </form>

                <img className='md:mr-[-230px] lg:mr-[-100px] block lg:hidden' src="/landing/img/logo-makeen (1) 2.svg" alt="img" />
                <img className='md:mr-[-230px] lg:mr-[-100px] hidden lg:block' src="/landing/img/logo-makeen (1) 3.svg" alt="img" />

                <div className='flex items-center gap-[25px]'>
                    <Link href="cart" className={  pathName === "/cart" ? "text-[#F28C28]" : "text-black"}><PiShoppingCartSimpleLight className='w-6 h-6 text-[#949494] md:text-[#051116]' /></Link>
                    <Link href="login"><button className='hidden text-[#F28C28] text-[20px] font-kalamehMedium border-[1px] border-[#F28C28] rounded-[12px] px-5 py-[2px] lg:block'>
                        ورود | ثبت نام
                    </button></Link>
                </div>

            </div>

            <div className='hidden lg:flex lg:item-center lg:justify-center lg:gap-12 lg:pb-[14px]'>
                {titleNavbar.map(item=>(
                    <ul key={item.id} >
                       <Link href={item.url} className={item.url === pathName ? "underline decoration-[#F28C28] underline-offset-[20px] rounded-[4px] decoration-[2.5px]" : "text-black"}><li className='text-[20px] font-kalamehSemiBold '>{item.title}</li></Link> 
                    </ul>
                ))}
            </div>

        </div>
    )
}
