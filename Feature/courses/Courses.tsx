import React from 'react'

export default function Courses() {

    const courses = [
        {
            id: 1,
            text: " دوره‌های Soft Skill ",
            image: "/landing/img/Creative thinking.svg"
        },
        {
            id: 2,
            text: " دوره‌های Design ",
            image: "/landing/img/Web design.svg"
        },
        {
            id: 3,
            text: " دوره‌های Frontend ",
            image: "/landing/img/front-end 1.svg"
        },
        {
            id: 4,
            text: " دوره‌های Backend ",
            image: "/landing/img/Web settings.svg"
        },
    ]

    return (
        <div className='mt-20 xl:mt-40 px-2 lg:px-[70px]'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-10 xl:gap-[169px]'>
                {courses.map(item => (
                <div key={item.id} className='border-[2px] flex flex-col items-center rounded-[15px] pb-10 xl:pb-[51px]'>
                    <img className='px-6 pb-4 mt-[-30px] bg-white' src={item.image} alt="img" />
                    <span className='text-[#051116] text-[16px] lg:text-[18px] font-kalamehMedium pt-[16px]'> {item.text} </span>
                </div>
       ))}
            </div>
        </div>
    )
}
