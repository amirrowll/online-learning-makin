import React from 'react'

export default function BottomNavigation() {

    const title = [
        {
            id :1,
            title : "خانه",
            image: "/landing/img/Home 2.svg"
        },
        {
            id :2,
            title : "دوره ها",
            image : "/landing/img/Vector1.svg",
            res : "w-4 h-4"

        },
        {
            id :3,
            title : "حساب کاربری ",
            image:"/landing/img/Vector2.svg",
            res : "w-5 h-5"
        },
    ]

  return (
    <div className='fixed bottom-0 right-0 left-0 border-t-[1px] pr-[33px] pl-[10px] pt-[10px] py-[2px] lg:hidden bg-white z-50'>
        <div className='flex items-center justify-between'>
            {title.map(item =>(
            <div key={item.id} className='flex flex-col items-center '>
                <img className={`${item.res}`} src={item.image} alt="img" />
                <span className='text-3 font-kalamehMedium'> {item.title} </span>
            </div>
            ))}
        </div>
    </div>
  )
}
