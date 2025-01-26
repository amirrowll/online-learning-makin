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
                            <h2 id="accordion-collapse-heading-1">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                    onClick={() => handleToggle('1')}
                                    aria-expanded={activeKey === '1'}
                                >
                                    <span>What is Flowbite?</span>
                                    <svg
                                        className={`w-3 h-3 shrink-0 transition-transform ${
                                            activeKey === '1' ? 'rotate-180' : ''
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
                                className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
                                    activeKey === '1' ? 'block' : 'hidden'
                                }`}
                                aria-labelledby="accordion-collapse-heading-1"
                            >
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out this guide to learn how to{' '}
                                    <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
                                        get started
                                    </a>{' '}
                                    and start developing websites even faster with components on top of Tailwind CSS.
                                </p>
                            </div>

                            {/* آیتم دوم */}
                            <h2 id="accordion-collapse-heading-2">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                    onClick={() => handleToggle('2')}
                                    aria-expanded={activeKey === '2'}
                                >
                                    <span>Is there a Figma file available?</span>
                                    <svg
                                        className={`w-3 h-3 shrink-0 transition-transform ${
                                            activeKey === '2' ? 'rotate-180' : ''
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
                                className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${
                                    activeKey === '2' ? 'block' : 'hidden'
                                }`}
                                aria-labelledby="accordion-collapse-heading-2"
                            >
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out the{' '}
                                    <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
                                        Figma design system
                                    </a>{' '}
                                    based on the utility classes from Tailwind CSS and components from Flowbite.
                                </p>
                            </div>

                            {/* آیتم سوم */}
                            <h2 id="accordion-collapse-heading-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                    onClick={() => handleToggle('3')}
                                    aria-expanded={activeKey === '3'}
                                >
                                    <span>What are the differences between Flowbite and Tailwind UI?</span>
                                    <svg
                                        className={`w-3 h-3 shrink-0 transition-transform ${
                                            activeKey === '3' ? 'rotate-180' : ''
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
                                className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${
                                    activeKey === '3' ? 'block' : 'hidden'
                                }`}
                                aria-labelledby="accordion-collapse-heading-3"
                            >
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li>
                                        <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
                                            Flowbite Pro
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">
                                            Tailwind UI
                                        </a>
                                    </li>
                                </ul>
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