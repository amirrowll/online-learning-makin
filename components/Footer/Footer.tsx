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
        <footer className="bg-[#f9f9f9] dark:bg-gray-900 mt-20 border-t-2" >
            <div className="mx-auto w-full max-w-[1920px]  p-4 py-6 lg:py-8 lg:px-[70px]">
                <div className="md:flex md:justify-between md:gap-[110px]">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex flex-col md:flex-row items-center gap-4">
                            <img
                                src="/landing/img/logo-makeen (1) 1.svg"
                                className="w-[180px] h-[80px]"
                                alt="FlowBite Logo"
                            />
                            <div className='flex justify-center flex-col'>
                                <div className="flex items-center gap-3">
                                    <IoCallOutline size={20} />
                                    <p className='text-lg font-kalamehRegular'>۰۲۱-۷۷۱۸۸۱۸۵-۶</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IoLocationOutline size={20} />
                                    <p className='text-base font-kalamehRegular'>مترو علم صنعت، خیابان سلیمانی مدائن پلاک ۵۲۰</p>
                                </div>

                            </div>
                        </a>
                        <div className="mt-4 lg:w-[530px]">
                            <p className="text-base font-kalamehRegular">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
                        <div>

                            <ul className="text-gray-500 dark:text-gray-400 text-xl font-kalamehRegular">

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

                            <ul className="text-gray-500 dark:text-gray-400 text-xl font-kalamehRegular">

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
                        <div className="flex items-center  flex-col gap-5">
                            <p className=" text-xl font-kalamehMedium">
                                مکین در صفحات مجازی:
                            </p>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium flex gap-5">

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
                <hr className="mt-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-8" />
                <div className="flex items-center justify-center">
                    <span className="text-base font-kalamehBold text-[#ABABAB] sm:text-center dark:text-[#ABABAB] mt-4">
                        آکادمی مکین
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer