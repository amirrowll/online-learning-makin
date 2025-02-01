/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
'use client'
import React, { useState } from 'react';
import { Users, DollarSign, BookOpen, Eye, Layout, Users2, BookOpen as Course, MessageSquare, Settings, LogOut } from 'lucide-react';
import { FaRegCircleUser } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";

export default function Page() {
    const [activeItem, setActiveItem] = useState(0); 

    const menuItems = [
        { icon: <Layout className="size-5" />, title: "داشبورد", href: "#" },
        { icon: <PiUsersThree size={24} />, title: "کاربران", href: "#" },
        { icon: <Users2 className="size-5" />, title: "اساتید", href: "#" },
        { icon: <BiCategoryAlt size={24} />, title: "دسته بندی ها", href: "#" },
        { icon: <Course className="size-5" />, title: "دوره ها", href: "#" },
        { icon: <BookOpen className="size-5" />, title: "سفارشات اخیر", href: "#" },
        { icon: <MessageSquare className="size-5" />, title: "نظرات", href: "#" },
        { icon: <BookOpen className="size-5" />, title: "تیکت ها", href: "#" },
        { icon: <Settings className="size-5" />, title: "تنظیمات", href: "#" },
    ];

    const handleItemClick = (index: number) => {
        setActiveItem(index);
    };

    return (
        <div className='flex flex-row-reverse justify-between'>
            <div className='bg-[#ffffff] h-[96px] w-full flex items-center justify-end gap-2 pl-10 py-4'>
                <div className='flex items-center gap-2'>
                    <img src="/panel/admin-logo.svg" alt="" />
                    <div>
                        <p className='text-[#000000] font-kalamehBold text-sm'>سینا فرد</p>
                        <p className='text-[#000000] font-kalamehBold text-sm'>دانشجو</p>
                    </div>
                </div>
                <div className='w-[2px] rounded-xl h-[32px] bg-[#949494]'></div>
                <div className='flex items-center gap-2'>
                    <FaRegCircleUser color='#949494' size={24} />
                </div>
            </div>

            <div className=" flex h-screen bg-gray-50 shadow z-50" dir="rtl">
                <div className="w-64 bg-white shadow-lg">
                    <div className="p-4 flex">
                        <div className="flex items-center gap-3">
                            <img src="/landing/img/logo-makeen (1) 3.svg" alt="" />
                        </div>
                    </div>
                    <nav className="p-4">
                        <ul className="flex flex-col justify-between gap-6">
                            {menuItems.map((item, index) => (
                                <li key={index} className={`border-r-4 ${activeItem === index ? 'border-[#F28C28]' : 'border-transparent'}`}>
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#FEF3E9]"
                                        onClick={() => handleItemClick(index)} 
                                    >
                                        {item.icon}
                                        <span className='text-lg font-kalamehRegular'>{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="absolute bottom-0 w-64 p-4">
                        <a href="/" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-[#FED3D3]">
                            <LogOut className="size-5" />
                            <span className='text-lg font-kalamehRegular'>خروج</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}