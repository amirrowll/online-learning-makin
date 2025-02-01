import React from 'react';

const data = [
    { id: 1, text: "استاد دوره", text2: "حسین رفیعی", icon: "/Courses/icon1.svg" },
    { id: 2, text: "هنرجویان دوره", text2: "۲۲۴ نفر", icon: "/Courses/icon2.svg" },
    { id: 3, text: "امتیاز دوره", text2: "۴.۵", icon: "/Courses/icon3.svg" },
    { id: 4, text: "مدت زمان دوره", text2: "۶۰ ساعت", icon: "/Courses/icon4.svg" },
];

function Datacart() {
    return (
        <div className='flex flex-wrap gap-4 items-center justify-center w-full mt-10  '>
            {data.map((item) => (
                <div key={item.id} className='flex bg-white px-4 py-3 items-center justify-between rounded-xl w-full md:w-[45%] 
                flex-wrap xl:w-[24%] '>
                    <div>
                        <p className='text-base text-[#9E9E9E] font-kalamehMedium'>{item.text}</p>
                        <p className='text-[22px] font-kalamehMedium'>{item.text2}</p>
                    </div>
                    <div>
                        <img src={item.icon} alt="" className="w-12 h-12" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Datacart;