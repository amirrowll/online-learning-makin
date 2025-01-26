"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const reviews = [
  {
    id: 1,
    name: "بالنقص",
    rating: 4.6,
    department: "Frontend",
    comments: [
      "ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "است چاپ و با استفاده از طراحان کاپفیک است.",
      "پایینان که قام است."
    ]
  },
  {
    id: 2,
    name: "فرزام قدری",
    rating: 5.7,
    department: "U/UX",
    comments: [
      "لزوم ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "از صنعت چاپ و با استفاده از طراحان کاپفیک است.",
      "سلطوعتان که قام است."
    ]
  },
  {
    id: 3,
    name: "فرزام قدری",
    rating: 5.7,
    department: "U/UX",
    comments: [
      "لزوم ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "از صنعت چاپ و با استفاده از طراحان کاپفیک است.",
      "سلطوعتان که قام است."
    ]
  }, 
  {
    id: 4,
    name: "فرزام قدری",
    rating: 5.7,
    department: "U/UX",
    comments: [
      "لزوم ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "از صنعت چاپ و با استفاده از طراحان کاپفیک است.",
      "سلطوعتان که قام است."
    ]
  }, 
  {
    id: 5,
    name: "فرزام قدری",
    rating: 5.7,
    department: "U/UX",
    comments: [
      "لزوم ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "از صنعت چاپ و با استفاده از طراحان کاپفیک است.",
      "سلطوعتان که قام است."
    ]
  },
  
  {
    id: 1,
    name: "بالنقص",
    rating: 4.6,
    department: "Frontend",
    comments: [
      "ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "است چاپ و با استفاده از طراحان کاپفیک است.",
      "پایینان که قام است."
    ]
  },
  {
    id: 2,
    name: "فرزام قدری",
    rating: 5.7,
    department: "U/UX",
    comments: [
      "لزوم ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "از صنعت چاپ و با استفاده از طراحان کاپفیک است.",
      "سلطوعتان که قام است."
    ]
  },
  {
    id: 3,
    name: "فرزام قدری",
    rating: 5.7,
    department: "U/UX",
    comments: [
      "لزوم ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "از صنعت چاپ و با استفاده از طراحان کاپفیک است.",
      "سلطوعتان که قام است."
    ]
  }, 
  {
    id: 4,
    name: "فرزام قدری",
    rating: 5.7,
    department: "U/UX",
    comments: [
      "لزوم ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "از صنعت چاپ و با استفاده از طراحان کاپفیک است.",
      "سلطوعتان که قام است."
    ]
  }, 
  {
    id: 5,
    name: "فرزام قدری",
    rating: 5.7,
    department: "U/UX",
    comments: [
      "لزوم ابرسیم متن ساختگی با تولید منافع، بالنقصوم است.",
      "از صنعت چاپ و با استفاده از طراحان کاپفیک است.",
      "سلطوعتان که قام است."
    ]
  }, 
];

export default function ReviewsSwiper() {
  return (
    <div className="p-8 bg-gray-50">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={-100}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,       // چرخش اسلایدها
          stretch: -50,     // کشش اسلایدها (منفی برای فشرده‌تر شدن)
          depth: 200,       // عمق پرسپکتیو
          modifier: 1,      // تنظیم کننده کلی
          slideShadows: true, // نمایش سایه‌ها
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="h-[400px]"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="h-full p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                <div className="flex items-center">
                  <span className="text-amber-500 text-lg mr-1">★</span>
                  <span className="font-semibold">{review.rating}</span>
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {review.department}
                </span>
              </div>

              <ul className="space-y-3">
                {review.comments.map((comment, index) => (
                  <li 
                    key={index}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    • {comment}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}