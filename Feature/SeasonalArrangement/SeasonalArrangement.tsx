/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
"use client"
import React, { useState } from 'react';

type AccordionKey = string | null;

const CoursePage: React.FC = () => {
    const [activeKey, setActiveKey] = useState<AccordionKey>(null);

    const handleToggle = (key: AccordionKey) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <div className='flex flex-col lg:flex-row w-full mt-[85px] gap-5 lg:gap-10 px-4 lg:px-0'>
            <div className='w-full lg:w-[903px]'>
                <div className="mb-4 bg-white rounded-lg shadow-sm">
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            onClick={() => handleToggle('1')}
                            aria-expanded={activeKey === '1'}
                        >
                            <span className="text-xl font-kalamehRegular text-black">
                                فصل اول
                            </span>
                            <svg
                                className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '1' ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-1"
                        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${activeKey === '1' ? 'block' : 'hidden'}`}
                        aria-labelledby="accordion-collapse-heading-1"
                    >
                        <p className="mb-2 text-black text-base font-kalamehRegular dark:text-gray-400">
                            1. مقدمه<br />
                            Design thinking<br />
                            2. تعریف واگار<br />
                            3. تفکر صمکرو واگار
                        </p>
                    </div>
                </div>

                <div className="mb-4 bg-white rounded-lg shadow-sm">
                    <h2 id="accordion-collapse-heading-2">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            onClick={() => handleToggle('2')}
                            aria-expanded={activeKey === '2'}
                        >
                            <span className="text-xl font-kalamehRegular text-black">
                                فصل دوم
                            </span>
                            <svg
                                className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '2' ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-2"
                        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${activeKey === '2' ? 'block' : 'hidden'}`}
                        aria-labelledby="accordion-collapse-heading-2"
                    >
                        <p className="mb-2 text-black text-base font-kalamehRegular dark:text-gray-400">
                            محتوای فصل دوم اینجا قرار می‌گیرد.
                        </p>
                    </div>
                </div>

                <div className="mb-4 bg-white rounded-lg shadow-sm">
                    <h2 id="accordion-collapse-heading-3">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            onClick={() => handleToggle('3')}
                            aria-expanded={activeKey === '3'}
                        >
                            <span className="text-xl font-kalamehRegular text-black">
                                فصل سوم
                            </span>
                            <svg
                                className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '3' ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-3"
                        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${activeKey === '3' ? 'block' : 'hidden'}`}
                        aria-labelledby="accordion-collapse-heading-3"
                    >
                        <p className="mb-2 text-black text-base font-kalamehRegular dark:text-gray-400">
                            محتوای فصل سوم اینجا قرار می‌گیرد.
                        </p>
                    </div>
                </div>

                <div className="mb-4 bg-white rounded-lg shadow-sm">
                    <h2 id="accordion-collapse-heading-4">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            onClick={() => handleToggle('4')}
                            aria-expanded={activeKey === '4'}
                        >
                            <span className="text-xl font-kalamehRegular text-black">
                                فصل چهارم
                            </span>
                            <svg
                                className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '4' ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-4"
                        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${activeKey === '4' ? 'block' : 'hidden'}`}
                        aria-labelledby="accordion-collapse-heading-4"
                    >
                        <p className="mb-2 text-black text-base font-kalamehRegular dark:text-gray-400">
                            محتوای فصل چهارم اینجا قرار می‌گیرد.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-[357px] min-h-[200px] bg-white px-4 rounded-xl py-4 sticky top-[8.5rem] h-fit'>
                <div className='flex items-center gap-4'>
                    <div className='w-[60px] h-[60px] lg:w-[72px] lg:h-[72px]'>
                        <img className='w-full h-full' src="/Courses/tlogo.svg" alt="مدرس" />
                    </div>

                    <div>
                        <p className='text-base lg:text-lg font-kalamehMedium'>حسین رفیعی</p>
                        <p className='text-[#9E9E9E] text-xs lg:text-sm font-kalamehRegular'>مدرس دوره</p>
                    </div>
                </div>

                <p className='text-xs lg:text-sm font-kalamehRegular mt-4 lg:mt-5'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                </p>
            </div>
        </div>
    );
};

export default CoursePage;