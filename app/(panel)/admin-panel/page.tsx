/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
'use client'
import React, { useState } from 'react';
import { BookOpen, Layout, Users2, BookOpen as Course, MessageSquare, Settings, LogOut, Menu } from 'lucide-react';
import { FaRegCircleUser } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import Dashboard from '@/Feature/admin-component/Dashboard';
import Users from '@/Feature/admin-component/Users';
import Teachers from '@/Feature/admin-component/Teachers';
import Categories from '@/Feature/admin-component/Categories';
import Courses from '@/Feature/admin-component/Courses';
import RecentOrders from '@/Feature/admin-component/RecentOrders';
import Comments from '@/Feature/admin-component/Comments';
import Tickets from '@/Feature/admin-component/Tickets';
import SettingsPage from '@/Feature/admin-component/SettingsPage';



export default function Page() {
    const [activeItem, setActiveItem] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { icon: <Layout className="size-5" />, title: "داشبورد", component: <Dashboard /> },
        { icon: <PiUsersThree size={24} />, title: "کاربران", component: <Users /> },
        { icon: <Users2 className="size-5" />, title: "اساتید", component: <Teachers /> },
        { icon: <BiCategoryAlt size={24} />, title: "دسته بندی ها", component: <Categories /> },
        { icon: <Course className="size-5" />, title: "دوره ها", component: <Courses /> },
        { icon: <BookOpen className="size-5" />, title: "سفارشات اخیر", component: <RecentOrders /> },
        { icon: <MessageSquare className="size-5" />, title: "نظرات", component: <Comments /> },
        { icon: <BookOpen className="size-5" />, title: "تیکت ها", component: <Tickets /> },
        { icon: <Settings className="size-5" />, title: "تنظیمات", component: <SettingsPage /> },
    ];

    const handleItemClick = (index: number) => {
        setActiveItem(index);
        setIsMenuOpen(false);
    };

    return (
        <div className='flex flex-row-reverse justify-between'>
            <div className='bg-[#ffffff] h-[96px] w-full flex items-center justify-between  gap-2 pl-10 pr-10    py-4'>
                <button
                    className="lg:hidden ml-4 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="size-6" />
                </button>
                
                <div className='hidden lg:flex items-center gap-2'>
                    <p className='font-kalamehMedium text-2xl'>{menuItems[activeItem].title}</p>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <img src="/panel/admin-logo.svg" alt="" />
                        <div>
                            <p className='text-[#000000] font-kalamehBold text-sm'>سینا فرد</p>
                            <p className='text-[#000000] font-kalamehBold text-sm'>ادمین</p>
                        </div>
                    </div>
                    <div className='w-[2px] rounded-xl h-[32px] bg-[#949494]'></div>
                    <div className='flex items-center gap-2'>
                        <FaRegCircleUser color='#949494' size={24} />
                    </div>
                </div>

                

            </div>
               
            <div className="absolute top-24 w-[85%]">
                {menuItems[activeItem].component}
            </div>

            <div className={`
                fixed inset-y-0 right-0 lg:relative
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
                transition-transform duration-300 ease-in-out
                lg:translate-x-0 z-50
            `}>
                <div className="flex h-[100dvh] lg:h-screen bg-gray-50 shadow">
                    <div className="w-64 bg-white shadow-lg flex flex-col">
                        <div className="p-4">
                            <div className="flex items-center gap-3">
                                <img src="/landing/img/logo-makeen (1) 3.svg" alt="" />
                            </div>
                        </div>
                        <nav className="pt-4 flex-1 overflow-y-auto">
                            <ul className="flex flex-col justify-between gap-4 lg:gap-6">
                                {menuItems.map((item, index) => (
                                    <li key={index} className={`border-r-[5px] ${activeItem === index ? 'border-[#F28C28]' : 'border-transparent'}`}>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#FEF3E9]"
                                            onClick={() => handleItemClick(index)}
                                        >
                                            {item.icon}
                                            <span className='text-lg font-kalamehMedium'>{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="p-4 mt-auto">
                            <a href="/" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-[#FED3D3]">
                                <LogOut className="size-5" />
                                <span className='text-lg font-kalamehRegular'>خروج</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

         
        </div>
    );
}