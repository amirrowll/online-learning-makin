"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { GoStarFill } from "react-icons/go";
import { TbMessage } from "react-icons/tb";



const reviews = [
  {
    id: 1,
    name: "فرزام قدیری",
    avatar: " ",
    rating: 4.6,
    department: "ui/ux",
    comments: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، سطرآنچنان که لازم است،",
  },

  {
    id: 1,
    name: "فرزام قدیری",
    avatar: " ",
    rating: 4.6,
    department: "ui/ux",
    comments: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، سطرآنچنان که لازم است،",
  },


  {
    id: 1,
    name: "فرزام قدیری",
    avatar: " ",
    rating: 4.6,
    department: "ui/ux",
    comments: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، سطرآنچنان که لازم است،",
  },


  {
    id: 1,
    name: "فرزام قدیری",
    avatar: " ",
    rating: 4.6,
    department: "ui/ux",
    comments: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، سطرآنچنان که لازم است،",
  },

  {
    id: 1,
    name: "فرزام قدیری",
    avatar: " ",
    rating: 4.6,
    department: "ui/ux",
    comments: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، سطرآنچنان که لازم است،",
  },

  {
    id: 1,
    name: "فرزام قدیری",
    avatar: " ",
    rating: 4.6,
    department: "ui/ux",
    comments: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، سطرآنچنان که لازم است،",
  },




];

export default function ReviewsSwiper() {
  return (
    <div className="p-8 bg-gray-50">
      <div className='flex items-center justify-center gap-2 '>
        <TbMessage size={32} />
        <p className='text-2xl font-kalamehMedium'>نظرات هنرجویان</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={-60}
        slidesPerView={5}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,       
          stretch: -50,     
          depth: 200,       
          modifier: 1,     
          slideShadows: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 }
        }}
        className="h-[228px] mt-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="h-full p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className='flex items-center gap-4'>
                  <img src="/landing/img/reviews.svg" alt="reviews" />
                  <h3 className="text-lg font-kalamehSemiBold">{review.name}</h3>
                </div>
                <div className="flex flex-row-reverse items-center gap-4">
                  <GoStarFill size={32} fill='#FCEA2B' />
                  <span className="font-kalamehMedium text-lg">{review.rating}</span>
                </div>
              </div>

              <div className="mb-2">
                <span className="text-lg font-kalamehMedium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {review.department}
                </span>
              </div>

              <p className='text-base font-kalamehRegular'>
                {review.comments}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}