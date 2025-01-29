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
        <div className="mx-auto mt-[100px] w-full p-4">
            <div className="mb-8 flex items-center justify-center gap-2">
                <CiCircleQuestion size={32} className="size-9" />
                <h1 className="font-kalamehMedium text-2xl text-gray-800">سوالات پرتکرار</h1>
            </div>

            <div className='flex w-full flex-col items-center justify-between gap-8 md:flex-row'>
                <div className="w-full md:w-3/5">
                    <div className="flex flex-col gap-4">
                        <div id="accordion-collapse" data-accordion="collapse">
                            {/* آیتم اول */}
                            <div className="mb-4 rounded-lg bg-white shadow-sm">
                                <h2 id="accordion-collapse-heading-1">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-200 p-5 font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 rtl:text-right"
                                        onClick={() => handleToggle('1')}
                                        aria-expanded={activeKey === '1'}
                                    >
                                        <span className="font-kalamehRegular text-xl text-black">
                                            نحوه آموزش در مکین چگونه است؟
                                        </span>
                                        <svg
                                            className={`size-3 shrink-0 transition-transform ${activeKey === '1' ? 'rotate-180' : ''
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
                                    className={`border border-b-0 border-gray-200 p-5 ${activeKey === '1' ? 'block' : 'hidden'}`}
                                    aria-labelledby="accordion-collapse-heading-1"
                                >
                                    <p className="mb-2 font-kalamehRegular text-base text-black">
                                        دوره‌های آکادمی مکین تنها به صورت ویدئوهای از قبل ضبط شده و به شکل آنلاین در دسترس هستند. شما می‌توانید با خریدن دوره‌ها، در هر زمان و مکانی (با دسترسی به اینترنت) دوره‌ها رو بگذرانید. امکان خرید دوره‌ها به صورت فیزیکی (Flash، Disk و DVD) میسر نیست.
                                    </p>
                                </div>
                            </div>

                            {/* آیتم دوم */}
                            <div className="mb-4 rounded-lg bg-white shadow-sm">
                                <h2 id="accordion-collapse-heading-2">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 rtl:text-right"
                                        onClick={() => handleToggle('2')}
                                        aria-expanded={activeKey === '2'}
                                    >
                                        <span className="font-kalamehRegular text-xl text-black">چطور می‌توانم به دوره‌ها دسترسی پیدا کنم؟</span>
                                        <svg
                                            className={`size-3 shrink-0 transition-transform ${activeKey === '2' ? 'rotate-180' : ''
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
                                    className={`border border-b-0 border-gray-200 p-5 ${activeKey === '2' ? 'block' : 'hidden'}`}
                                    aria-labelledby="accordion-collapse-heading-2"
                                >
                                    <p className="mb-2 font-kalamehRegular text-base text-black">
                                        پس از خرید دوره، می‌توانید از طریق پنل کاربری خود به دوره‌ها دسترسی داشته باشید. دوره‌ها به صورت آنلاین و در هر زمان قابل مشاهده هستند.
                                    </p>
                                </div>
                            </div>

                            {/* آیتم سوم */}
                            <div className="mb-4 rounded-lg bg-white shadow-sm">
                                <h2 id="accordion-collapse-heading-3">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 rtl:text-right"
                                        onClick={() => handleToggle('3')}
                                        aria-expanded={activeKey === '3'}
                                    >
                                        <span className="font-kalamehRegular text-xl text-black">آیا دوره‌ها قابل دانلود شدن هستند؟</span>
                                        <svg
                                            className={`size-3 shrink-0 transition-transform ${activeKey === '3' ? 'rotate-180' : ''
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
                                    className={`border border-t-0 border-gray-200 p-5 ${activeKey === '3' ? 'block' : 'hidden'}`}
                                    aria-labelledby="accordion-collapse-heading-3"
                                >
                                    <p className="mb-2 font-kalamehRegular text-base text-black">
                                        خیر، دوره‌ها به صورت آنلاین و فقط از طریق پنل کاربری قابل دسترسی هستند و امکان دانلود آنها وجود ندارد.
                                    </p>
                                </div>
                            </div>

                            {/* آیتم چهارم */}
                            <div className="mb-4 rounded-lg bg-white shadow-sm">
                                <h2 id="accordion-collapse-heading-4">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 rtl:text-right"
                                        onClick={() => handleToggle('4')}
                                        aria-expanded={activeKey === '4'}
                                    >
                                        <span className="font-kalamehRegular text-xl text-black">آیا دوره‌ها قابل دانلود شدن هستند؟</span>
                                        <svg
                                            className={`size-3 shrink-0 transition-transform ${activeKey === '4' ? 'rotate-180' : ''
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
                                    className={`border border-t-0 border-gray-200 p-5 ${activeKey === '4' ? 'block' : 'hidden'}`}
                                    aria-labelledby="accordion-collapse-heading-4"
                                >
                                    <p className="mb-2 font-kalamehRegular text-base text-black">
                                        خیر، دوره‌ها به صورت آنلاین و فقط از طریق پنل کاربری قابل دسترسی هستند و امکان دانلود آنها وجود ندارد.
                                    </p>
                                </div>
                            </div>

                            {/* آیتم پنجم */}
                            <div className="mb-4 rounded-lg bg-white shadow-sm">
                                <h2 id="accordion-collapse-heading-5">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 rtl:text-right"
                                        onClick={() => handleToggle('5')}
                                        aria-expanded={activeKey === '5'}
                                    >
                                        <span className="font-kalamehRegular text-xl text-black">آیا دوره‌ها قابل دانلود شدن هستند؟</span>
                                        <svg
                                            className={`size-3 shrink-0 transition-transform ${activeKey === '5' ? 'rotate-180' : ''
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
                                    className={`border border-t-0 border-gray-200 p-5 ${activeKey === '5' ? 'block' : 'hidden'}`}
                                    aria-labelledby="accordion-collapse-heading-5"
                                >
                                    <p className="mb-2 font-kalamehRegular text-base text-black">
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