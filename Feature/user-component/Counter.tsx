import React from 'react'
import { Scrollbar } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import { IoIosArrowBack } from "react-icons/io";
import { Heart, Star } from 'lucide-react';


function Counter() {

  const stats = [
    {
      id: 1,
      title: "  دوره های درحال یادگیری ",
      image: " /panel/laptop.svg",
      info: " ۰ دوره ",
    },
    {
      id: 2,
      title: " مجموع تیکت های ثبت شده ",
      image: " /panel/ticket.svg",
      info: " ۰ تیکت ",
    },
    {
      id: 3,
      title: " دوره های محبوب ",
      image: " /panel/heart.svg",
      info: " ۰ دوره ",

    },
  ]

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
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 17,
          },
          360: {
            slidesPerView: 1.1,
            spaceBetween: 17,
          },
          435: {
            slidesPerView: 1.4,
            spaceBetween: 17,
          },
          500: {
            slidesPerView: 1.6,
            spaceBetween: 17,
          },
          600: {
            slidesPerView: 1.8,
            spaceBetween: 17,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 17,
          },
          820: {
            slidesPerView: 2.3,
            spaceBetween: 17,
          },
          910: {
            slidesPerView: 2.5,
            spaceBetween: 17,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 17,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 120,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 120,
          }

        }}
      >
        <div className='flex'>
          {stats.map(item => (
            <SwiperSlide key={item.id}>
              <div className='bg-[#FFFFFF] mt-6 p-4 rounded-[14px]'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-[#9E9E9E] font-kalamehMedium text-[16px]'> {item.title} </h1>
                  <img src={item.image} alt="img" />
                </div>
                <h1 className='text-[22px] font-kalamehMedium mt-[-5px]'> {item.info} </h1>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className='flex items-center justify-between bg-white px-[17px] py-[12px] mt-10 rounded-[14px]'>
        <span className='text-[18px] font-kalamehSemiBold'> اخیرا خریداری شده </span>
        <span className='flex items-center text-[#36A8D9] text-[18px] font-kalamehRegular gap-1 '>  مشاهده همه <IoIosArrowBack /></span>
      </div>
      <div className='mt-6'>
        <span className='text-[#949494] text-[18px] font-kalamehRegular pr-[16px]'> تا به الان در دوره ای شرکت نکرده اید </span>
      </div>
      <div className='flex items-center justify-between bg-white px-[17px] py-[12px] rounded-[14px] mt-[48px]'>
        <span className='text-[18px] font-kalamehSemiBold'> دوره های محبوب من </span>
        <span className='flex items-center text-[#36A8D9] text-[18px] font-kalamehRegular gap-1 '>  مشاهده همه <IoIosArrowBack /></span>
      </div>

      <div>

      </div>
      {courses.map(item => (
        <div key={item.id} className="flex items-center w-full flex-row-reverse pr-3 pl-4 mt-6 rounded-xl bg-white shadow-sm">
          <div className="flex items-center justify-between flex-row-reverse gap-4 flex-1">
            <div className=''>
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

          <div className="flex items-start">
            <Heart className="text-[#FA2523] cursor-pointer" />
          </div>
        </div>
      ))}

    </div>
  )
}

export default Counter