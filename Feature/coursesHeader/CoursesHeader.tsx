"use client"
import React, { useState } from 'react'
import { FaSquare } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LuFolderPlus } from "react-icons/lu";
import { IoSwapVerticalSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';

export default function CoursesHeader() {
  const pathName = usePathname()
  const [currentPathName, setCurrentPathName] = useState(pathName);
  

  const handleSortClick = (text:string)=>{
    setCurrentPathName(text)
  }

  const filter = [
    {
      id: 1,
      text: " دوره‌های Soft Skill "
    },
    {
      id: 2,
      text: " دوره‌های Design "
    },
    {
      id: 3,
      text: " دوره‌های Frontend "
    },
    {
      id: 4,
      text: " دوره‌های Backend "
    },
  ]

  const sorting = [
    {
      id: 1,
      text: " همه دوره ها ",
    },
    {
      id: 2,
      text: " ارزانترین ",
    },
    {
      id: 3,
      text: " گرانترین ",
    },
    {
      id: 4,
      text: " پر‌ مخاطب ترین ",
    },

  ]

  return (
    <div className='mt-28 px-5 lg:px-[70px] lg:mt-44'>
      <div className='flex items-center justify-between'>
        <h1 className='flex items-center text-[20px] font-kalamehMedium text-[#051116] lg:text-[24px]'><FaSquare className='text-[#F28C28] w-6 h-6' /> همه دوره ها </h1>
        <span className='text-[#8D8D8D] text-[18px] font-kalamehMedium lg:text-[24px] '> ۶۶ عنوان آموزشی </span>
      </div>

      <div className='flex items-center justify-start gap-2 text-[14px] font-kalamehMedium mt-5 sm:hidden'>
        <div className="text-center border-[1px] shadow-sm border-gray-300 px-2 py-1 rounded-full">
          <button className="text-[#051116] " type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
            دسته بندی
          </button>
        </div>
        <div className="text-center border-[1px] shadow-sm border-gray-300 px-2 py-1 rounded-full">
          <button className="text-[#051116]" type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
            مرتب سازی
          </button>
        </div>
      </div>


      {/* <div id="drawer-bottom-example" className="sm:hidden fixed bottom-14 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none" aria-labelledby="drawer-bottom-label">
        <h5 id="drawer-bottom-label" className="inline-flex items-center mb-4 text-[18px] font-kalamehRegular text-[#051116]"> دسته بندی دوره ها </h5>
        <button type="button" data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {filter.map(item => (
          <ul key={item.id}>
            <li className='text-[#051116] border-b py-3'>{item.text}</li>
          </ul>
        ))}
      </div> */}

      <div className='flex items-start mt-8 w-full '>
        <div className='border-[2px] shadow-lg rounded-lg w-fit px-3 py-7 sm:flex sm:flex-col sm:items-start hidden '>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <span className="text-[14px] font-kalamehMedium text-[#051116] tablet:text-[18px]"> دوره های تخفیف دار </span>
            <div className="relative mr-2 tablet:mr-6 xl:mr-11 w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F28C28] dark:peer-checked:bg-[#F28C28]"></div>
          </label>

          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-[#051116] flex items-center text-[14px] font-kalamehRegular mt-5 tablet:text-[18px]" type="button"><LuFolderPlus /> دسته بندی دوره ها <IoIosArrowDown className='mr-1' /></button>

          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul className="py-2 " aria-labelledby="dropdownDefaultButton">
              {filter.map(item => (
                <li key={item.id}>
                  <a href="#" className="block px-4 py-2 text-[#777777] ">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col '>
          <div className='hidden sm:flex sm:items-end gap-2 md:gap-3 tablet:gap-5 xl:gap-10 font-kalamehMedium sm:text-[13px] tablet:text-[18px] xl:text-[20px] md:text-[15px] '>
            <h1 className='text-[#051116] flex items-center mr-2 md:mr-3 tablet:mr-5 '> <IoSwapVerticalSharp className='sm:w-5 sm:h-5 md:w-6 md:h-6 tablet:w-7 tablet:h-7 mx-2' />مرتب سازی بر اساس: </h1>
            {sorting.map(item => (
              <ul key={item.id} className={item.text === currentPathName ? "underline text-[#051116] decoration-[#F28C28] underline-offset-[14.5px] rounded-[4px] decoration-[2.5px]" : "text-[#777777]"}
              onClick={()=>handleSortClick(item.text)}>
                <li>{item.text}</li>
              </ul>
            ))}
          </div>
          <div className='tablet:pr-7 sm:pr-3 pt-[10px]'>
            <hr className='border-[1.8px] ' />
          </div>
        </div>
      </div>
    </div>
  )
}
