import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Heart, Star } from 'lucide-react';


export default function MyCourses() {

  const courses = [
    {
      id: 1,
      title: " دوره جامع آموزش UI/UX  ",
      rating: "۴.۵",
      description: " هر محصولی چه حقیقی و چه دیجیتال برای کاربر یک تجربه خلق می‌کند. با طراحی...  ",
      thumbnail: "/panel/image.svg"
    },
    {
      id: 2,
      title: " دوره جامع آموزش UI/UX  ",
      rating: "۴.۵",
      description: " هر محصولی چه حقیقی و چه دیجیتال برای کاربر یک تجربه خلق می‌کند. با طراحی...  ",
      thumbnail: "/panel/image.svg"
    },

  ];

  return (
    <div className='pr-[10px] pl-10 xl:pr-20 max-w-[1500px]'>
      {courses.map(item => (
        <div key={item.id} className="flex items-center w-full flex-row-reverse pr-[35px] pl-4 mt-6 rounded-[14px] bg-white shadow-sm">
          <div className="flex items-center justify-between flex-row-reverse gap-4 flex-1">
            <div className='flex items-center  gap-[11px]'>
              <div className='flex flex-col items-center gap-[10px]'>
                <img src="/panel/rate.svg" alt="img" />
                <span className='text-[14px] font-kalamehSemiBold'> درصد پیشرفت دوره </span>
              </div>
              <span className='flex items-center text-[#36A8D9] text-[18px] font-kalamehRegular gap-1 '>  مشاهده همه <IoIosArrowBack /></span>
            </div>
            <div className='flex flex-row-reverse items-center'>
              <div className="flex flex-col gap-2  text-right pr-4">
                <div className="flex items-center justify-start gap-4">
                  <span className="text-[18px] font-kalamehSemiBold">{item.title}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[15px] font-kalamehSemiBold">{item.rating}</span>
                    <Star className="w-5 h-5 fill-[#FCEA2B] text-[#FCEA2B]" />
                  </div>
                </div>

                <p className="w-[55%] text-[#636363] text-[16px] font-kalamehRegular leading-[27.2px]">{item.description}</p>

              </div>

              <div className="pr-2 py-8">
                <img
                  src={item.thumbnail}
                  alt='img'
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 