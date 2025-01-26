"use client"
import { Accordion } from 'flowbite-react'
import { CiCircleQuestion } from "react-icons/ci"
import { useState } from 'react'

type EventKey = string | null

export default function Questions() {
    const [activeKey, setActiveKey] = useState<EventKey>('1') // پنل اول به صورت پیش‌فرض باز است

    const handleToggle = (eventKey: EventKey) => {
        setActiveKey(eventKey)
    }

    return (
        <div className="w-full mx-auto p-4 mt-[100px]">
            <div className="flex items-center gap-2 mb-8 justify-center">
                <CiCircleQuestion size={32} className="w-9 h-9 " />
                <h1 className="text-2xl font-kalamehMedium text-gray-800">سوالات پرتکرار</h1>
            </div>

            <div className='flex flex-col md:flex-row gap-8 w-full justify-between items-center'>
                <div className="w-full md:w-[60%]">
                    <div className="flex flex-col gap-">
                        <Accordion
                            className="[&>button]:text-right border-none flex  flex-col "
                            onToggle={handleToggle}
                            activeKey={activeKey}
                        >
                            <Accordion.Panel eventKey="1">
                                <Accordion.Title className="text-right text-lg md:text-xl font-kalamehRegular bg-white hover:bg-gray-100 focus:ring-0">
                                    نحوه آموزش در مکین چگونه است؟
                                </Accordion.Title>
                                <Accordion.Content className="bg-white border-t-2">
                                    <p className="text-right text-base md:text-[15px] font-kalamehRegular leading-7 text-gray-600">
                                        دوره‌های آکادمی مکین تنها به صورت ویدئوهای از قبل ضبط شده و به شکل آنلاین در دسترس هستند. شما می‌توانید با خریدن دوره‌ها، در هر زمان و مکانی (با دسترسی به اینترنت) دوره‌ها رو بگذرانید. امکان خرید دوره‌ها به صورت فیزیکی (Flash، Disk و DVD) میسر نیست.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel eventKey="2">
                                <Accordion.Title className="text-right text-lg md:text-xl font-kalamehRegular bg-white hover:bg-gray-100 focus:ring-0 mt-4">
                                    چطور میتوانم به محتوا دوره دسترسی پیدا کنم ؟
                                </Accordion.Title>
                                <Accordion.Content className="bg-white border-t-2 border-blue-100">
                                    <p className="text-right text-base md:text-[15px] font-kalamehRegular leading-7 text-gray-600">
                                        پس از خرید دوره، به حساب کاربری خود در پنل آموزشی مراجعه کرده و در بخش «دوره‌های من» می‌توانید به تمام محتوای دوره دسترسی داشته باشید. محتوا بلافاصله پس از پرداخت موفق فعال می‌شود.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel eventKey="3">
                                <Accordion.Title className="text-right text-lg md:text-xl font-kalamehRegular bg-white hover:bg-gray-100 focus:ring-0 mt-4">
                                    آیا دوره ها قابل دانلود شدن هستند ؟
                                </Accordion.Title>
                                <Accordion.Content className="bg-white border-t-2 border-blue-100">
                                    <p className="text-right text-base md:text-[15px] font-kalamehRegular leading-7 text-gray-600">
                                        برای حفظ حقوق مولفین، ویدیوها قابلیت دانلود مستقیم ندارند، اما می‌توانید با استفاده از اپلیکیشن موبایل ما محتوا را به صورت آفلاین مشاهده کنید. این ویژگی در نسخه پریمیوم فعال می‌شود.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel eventKey="4">
                                <Accordion.Title className="text-right text-lg md:text-xl font-kalamehRegular bg-white hover:bg-gray-100 focus:ring-0 mt-4">
                                    آیا دیدن ویدیو ها محدودیت دارد ؟
                                </Accordion.Title>
                                <Accordion.Content className="bg-white border-t-2 border-blue-100">
                                    <p className="text-right text-base md:text-[15px] font-kalamehRegular leading-7 text-gray-600">
                                        هیچ محدودیتی در تعداد دفعات مشاهده ویدیوها وجود ندارد. پس از خرید دوره، به صورت مادام‌العمر به محتوای دوره دسترسی خواهید داشت و می‌توانید无限次 آن را مرور کنید.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel eventKey="5">
                                <Accordion.Title className="text-right text-lg md:text-xl font-kalamehRegular bg-white hover:bg-gray-100 focus:ring-0 mt-4">
                                    آیا در این دوره ها با مدرس در ارتباط هستم ؟
                                </Accordion.Title>
                                <Accordion.Content className="bg-white border-t-2 border-blue-100">
                                    <p className="text-right text-base md:text-[15px] font-kalamehRegular leading-7 text-gray-600">
                                        بله! در هر دوره امکان ارتباط با مدرس از طریق سیستم پرسش و پاسخ و همچنین جلسات لایو ماهانه وجود دارد. همچنین می‌توانید در گروه‌های اختصاصی دوره با دیگر دانشجویان تعامل داشته باشید.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
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
    )
}