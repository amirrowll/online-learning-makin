"use client";
import { CiCircleQuestion } from "react-icons/ci";
import { useState } from 'react';

type EventKey = string | null;

export default function Questions() {
    const [activeKey, setActiveKey] = useState<EventKey>('1');

    const handleToggle = (eventKey: EventKey) => {
        setActiveKey(activeKey === eventKey ? null : eventKey);
    };

    return (
        <div className="w-full mx-auto p-4 mt-[100px]">
            <div className="flex items-center gap-2 mb-8 justify-center">
                <CiCircleQuestion size={32} className="w-9 h-9" />
                <h1 className="text-2xl font-kalamehMedium text-gray-800">سوالات پرتکرار</h1>
            </div>

            <div className='flex flex-col md:flex-row gap-8 w-full justify-between items-center'>
                <div className="w-full md:w-[60%]">
                    <div className="flex flex-col gap-4">
                        <div id="accordion-collapse" data-accordion="collapse">
                            {/* آیتم اول */}
                            <div className="mb-4 bg-white rounded-lg shadow-sm">
                                <h2 id="accordion-collapse-heading-1">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        onClick={() => handleToggle('1')}
                                        aria-expanded={activeKey === '1'}
                                    >
                                        <span>
                                            نحوه آموزش در مکین چگونه است؟
                                        </span>
                                        <svg
                                            className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '1' ? 'rotate-180' : ''
                                                }`}
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
                                    className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${activeKey === '1' ? 'block' : 'hidden'
                                        }`}
                                    aria-labelledby="accordion-collapse-heading-1"
                                >
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        دوره‌های آکادمی مکین تنها به صورت ویدئوهای از قبل ضبط شده و به شکل آنلاین در دسترس هستند. شما می‌توانید با خریدن دوره‌ها، در هر زمان و مکانی (با دسترسی به اینترنت) دوره‌ها رو بگذرانید. امکان خرید دوره‌ها به صورت فیزیکی (Flash، Disk و DVD) میسر نیست.
                                    </p>
                                </div>
                            </div>

                            {/* آیتم دوم */}
                            <div className="mb-4 bg-white rounded-lg shadow-sm">
                                <h2 id="accordion-collapse-heading-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        onClick={() => handleToggle('2')}
                                        aria-expanded={activeKey === '2'}
                                    >
                                        <span>چطور می‌توانم به دوره‌ها دسترسی پیدا کنم؟</span>
                                        <svg
                                            className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '2' ? 'rotate-180' : ''
                                                }`}
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
                                    className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${activeKey === '2' ? 'block' : 'hidden'
                                        }`}
                                    aria-labelledby="accordion-collapse-heading-2"
                                >
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        پس از خرید دوره، می‌توانید از طریق پنل کاربری خود به دوره‌ها دسترسی داشته باشید. دوره‌ها به صورت آنلاین و در هر زمان قابل مشاهده هستند.
                                    </p>
                                </div>
                            </div>

                            {/* آیتم سوم */}
                            <div className="mb-4 bg-white rounded-lg shadow-sm">
                                <h2 id="accordion-collapse-heading-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        onClick={() => handleToggle('3')}
                                        aria-expanded={activeKey === '3'}
                                    >
                                        <span>آیا دوره‌ها قابل دانلود شدن هستند؟</span>
                                        <svg
                                            className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '3' ? 'rotate-180' : ''
                                                }`}
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
                                    className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${activeKey === '3' ? 'block' : 'hidden'
                                        }`}
                                    aria-labelledby="accordion-collapse-heading-3"
                                >
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        خیر، دوره‌ها به صورت آنلاین و فقط از طریق پنل کاربری قابل دسترسی هستند و امکان دانلود آنها وجود ندارد.
                                    </p>
                                </div>
                            </div>

                            {/* آیتم چهارم */}
                            <div className="mb-4 bg-white rounded-lg shadow-sm">
                                <h2 id="accordion-collapse-heading-4">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        onClick={() => handleToggle('4')}
                                        aria-expanded={activeKey === '4'}
                                    >
                                        <span>آیا دوره‌ها قابل دانلود شدن هستند؟</span>
                                        <svg
                                            className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '4' ? 'rotate-180' : ''
                                                }`}
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
                                    className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${activeKey === '4' ? 'block' : 'hidden'
                                        }`}
                                    aria-labelledby="accordion-collapse-heading-4"
                                >
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        خیر، دوره‌ها به صورت آنلاین و فقط از طریق پنل کاربری قابل دسترسی هستند و امکان دانلود آنها وجود ندارد.
                                    </p>
                                </div>
                            </div>

                            {/* آیتم پنجم */}
                            <div className="mb-4 bg-white rounded-lg shadow-sm">
                                <h2 id="accordion-collapse-heading-5">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        onClick={() => handleToggle('5')}
                                        aria-expanded={activeKey === '5'}
                                    >
                                        <span>آیا دوره‌ها قابل دانلود شدن هستند؟</span>
                                        <svg
                                            className={`w-3 h-3 shrink-0 transition-transform ${activeKey === '5' ? 'rotate-180' : ''
                                                }`}
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
                                    id="accordion-collapse-body-5"
                                    className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${activeKey === '5' ? 'block' : 'hidden'
                                        }`}
                                    aria-labelledby="accordion-collapse-heading-5"
                                >
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        خیر، دوره‌ها به صورت آنلاین و فقط از طریق پنل کاربری قابل دسترسی هستند و امکان دانلود آنها وجود ندارد.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <img
                        src="/landing/img/faq.svg"
                        alt="سوالات متداول"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}