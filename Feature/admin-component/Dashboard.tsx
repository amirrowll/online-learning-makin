import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Scrollbar } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';


function Dashboard() {

  const data = [
    { name: '', value: 65, hide: true },
    { name: ' دوره جامع UI/UX ', value: 65 },
    { name: ' دوره React Js ', value: 15 },
    { name: ' دوره Soft skill ', value: 30 },
    { name: ' دوره PhotoShop ', value: 18 },
    { name: ' دوره Illustrator ', value: 35 },
    { name: ' دوره net. ', value: 10 },
    { name: ' دوره #C ', value: 55 },
    { name: ' دوره PHP ', value: 15 },
    { name: ' دوره Premiere ', value: 55 },
    { name: ' دوره Final Cut ', value: 50 },
    { name: ' دوره Figma ', value: 90 },
    { name: ' Sketch ', value: 40 },
    { name: '', value: 40, hide: true }, 
  ];


  const stats = [
    {
      id: 1,
      title: " مجموع کاربران سایت ",
      image: " /panel/person.svg",
      info: " ۵۸۶ کاربر ",
      discription: " افزایش نسبت به هفته قبل ",
      rate: " ۲.۵٪ "
    },
    {
      id: 2,
      title: " مجموع ثبت نام دوره ها ",
      image: " /panel/cap.svg",
      info: " ۴۹۳ ثبت نام ",
      discription: " افزایش نسبت به هفته قبل ",
      rate: " ۲.۵٪ "
    },
    {
      id: 3,
      title: " مبلغ فروش کل دوره ها ",
      image: " /panel/dollor.svg",
      info: " ۶۷۵,۸۵۰,۰۰۰ تومان ",
      discription: " افزایش نسبت به هفته قبل ",
      rate: " ۲.۵٪ "
    },
    {
      id: 4,
      title: " مجموع بازدید از سایت ",
      image: " /panel/chart.svg",
      info: " ۳,۷۳۵,۰۰۰ ",
      discription: " افزایش نسبت به هفته قبل ",
      rate: " ۲.۵٪ "
    },
  ]

  return (
    <div className='pr-[10px] pl-10 xl:pr-20 max-w-[1880px]'>
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          }

        }}
      >
        <div className=''>
          {stats.map(item => (
            <SwiperSlide key={item.id}>
              <div className='bg-[#FFFFFF] mt-6 p-4 rounded-[14px]'>
                <div className='flex items-start justify-between'>
                  <h1 className='text-[#9E9E9E] font-kalamehMedium text-[16px]'> {item.title} </h1>
                  <img src={item.image} alt="img" />
                </div>
                <h1 className='text-[22px] font-kalamehMedium mt-[-5px]'> {item.info} </h1>
                <div className='flex items-center mt-2'>
                  <span className='text-[#00B69B] text-[16px] font-kalamehMedium'> {item.rate} </span>
                  <span className='text-[#666666] text-[16px] font-kalamehRegular pr-[9px]'>{item.discription} </span>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </div>

      </Swiper>
      <div className="w-full bg-white p-6 rounded-[24px] shadow-sm mt-8">
        <h2 className="text-lg font-medium mb-5 text-right">میزان فروش هفتگی</h2>
        <div className="h-[340px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left:30, bottom: 45 }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="60%" stopColor="#F28C2899" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#F28C281A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={true}
                horizontal={true}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="name"
                angle={0}
                interval={0}
                tickMargin={20}
                tickSize={0}
                xAxisId={0}
                className='text-[12px] font-kalamehRegular text-[#4D4D4D]'
              />
              <XAxis
                orientation="bottom"
                tick={false}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                dx={-20}
                width={45}
                className='text-[12px] font-kalamehRegular text-[#4D4D4D]'
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px',
                  textAlign: 'right'
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#36A8D9"
                strokeWidth={1}
                fill="url(#colorSales)"
                dot={{
                  fill: '#36A8D9',
                  stroke: 'white',
                  r: 4
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}

export default Dashboard