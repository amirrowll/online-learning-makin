/* eslint-disable @next/next/no-img-element */
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Image from 'next/image'




const FooterLink1 = [
    { id: 1, text: "سوالات متداول", link: "/#" },
    { id: 2, text: "تماس با ما", link: "/#" },
    { id: 3, text: "شرایط استفاده", link: "/#" },
    { id: 4, text: "حریم خصوی", link: "/#" },
]

const FooterLink2 = [
    { id: 1, text: "دوره ها", link: "/#" },
    { id: 2, text: "خانه", link: "/#" },
    { id: 3, text: "درباره ما", link: "/#" },
    { id: 4, text: "قوانین و مقررات", link: "/#" },
]

const FooterLink3 = [
    {
        id: 1,
        icon: <FaInstagram size={24} />,
        url: 'https://www.instagram.com',
    },
    {
        id: 2,
        icon: <FaTelegram size={24} />,
        url: 'https://telegram.org',
    },
    {
        id: 3,
        icon: <FaWhatsapp size={24} />,
        url: 'https://www.whatsapp.com',
    },
    {
        id: 4,
        icon: <FaYoutube size={24} />,
        url: 'https://www.youtube.com',
    },
];


function Footer() {
    return (
        <footer className="mt-20 border-t-2 bg-[#f9f9f9]" >
            <div className="mx-auto w-full max-w-[1440px]  p-4 py-6 lg:px-[70px] lg:py-8">
                <div className="md:flex md:justify-between md:gap-[110px]">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex flex-col items-center gap-4 md:flex-row">
                            <img
                                src="/landing/img/logo-makeen (1) 1.svg"
                                className="h-[80px] w-[180px]"
                                alt="FlowBite Logo"
                            />
                            <div className='flex flex-col justify-center'>
                                <div className="flex items-center gap-3">
                                    <IoCallOutline size={20} />
                                    <p className='font-kalamehRegular text-lg'>۰۲۱-۷۷۱۸۸۱۸۵-۶</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IoLocationOutline size={20} />
                                    <p className='font-kalamehRegular text-base'>مترو علم صنعت، خیابان سلیمانی مدائن پلاک ۵۲۰</p>
                                </div>

                            </div>
                        </a>
                        <div className="mt-4 lg:w-[530px]">
                            <p className="font-kalamehRegular text-base">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 ">
                        <div>

                            <ul className="font-kalamehRegular text-xl text-gray-500">

                                {FooterLink2.map((item) => (
                                    <li key={item.id} className="mb-4">
                                        <a
                                            href={item.link}
                                            className="hover:underline "
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div>

                            <ul className="font-kalamehRegular text-xl text-gray-500">

                                {FooterLink1.map((item) => (
                                    <li key={item.id} className="mb-4">
                                        <a
                                            href={item.link}
                                            className="hover:underline "
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="flex flex-col  items-center gap-5">
                            <p className="font-kalamehMedium text-xl">
                                مکین در صفحات مجازی:
                            </p>
                            <ul className="flex gap-5 font-medium text-gray-500 sm:flex-row
                             md:flex-col lg:flex-row">

                                {FooterLink3.map((item) => (
                                    <li key={item.id} className="mb-4">
                                        <a
                                            href={item.url}
                                            className="hover:underline "
                                        >
                                            {item.icon}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                            <div>
                                <Image src={"/landing/img/Group 710.svg"}
                                    alt="img"
                                    width={256}
                                    height={125}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-6 border-gray-200 sm:mx-auto lg:mt-8" />
                <div className="flex items-center justify-center">
                    <span className="mt-4 font-kalamehBold text-base text-[#ABABAB] sm:text-center">
                        آکادمی مکین
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer