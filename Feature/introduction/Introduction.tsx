import React from 'react'
import { BsCheck2 } from "react-icons/bs";

export default function Introduction() {

    const Introduction = [
        {
            id: 1,
            text: " تضمین کاملترین محتوا  ",
            paragraph: "  بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری. "
        },
        {
            id: 2,
            text: " سراغ حرفه ای ها رفتیم  ",
            paragraph: "  ما اینجا سخت گیرترین شرایط جذب مدرس رو داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید. "
        },
        {
            id: 3,
            text: " پشتیبانی دائمی ",
            paragraph: " هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی. "
        },
    ]

    return (
        <div className='flex justify-between items-center py-20 lg:px-[70px] xl:pt-[150px]'>
            <div className='px-5 bg-[url(/landing/img/VectorBlue.svg)] h-full w-fit lg:w-[60%] xl:w-[45%]'>
                <h1 className='text-[19px] font-kalamehMedium text-[#051116] mobileXxl:text-[25px] md:text-[20px] xl:text-[30px]'> آموزش آنلاین با کیفیت کلاس حضوری </h1>
                {Introduction.map(item => (
                    <div key={item.id}>
                        <h2 className='flex items-center text-[15px] font-kalamehMedium text-[#051116] mt-5 mobileXxl:text-[18px] xl:text-[24px]'><BsCheck2 className='w-[18px] h-[18px] lg:w-8 lg:h-8' /> {item.text}</h2>
                        <p className='text-[#051116] font-kalamehRegular text-[12px] mobileXxl:text-[15px] pt-3 xl:text-[19px]'>
                            {item.paragraph}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <img className='hidden md:block md:pl-5 lg:w-[100%]' src="/imageLanding/frame axa.svg" alt="img" />
            </div>
        </div>
    )
}
