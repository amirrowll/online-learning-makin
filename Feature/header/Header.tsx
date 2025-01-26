import React from 'react'

export default function Header() {
  return (
    <div className='pt-[70px] lg:pt-[125px] lg:pl-[65px]'>
      <div className='bg-[url("/imageLanding/Background.svg")] h-fit xl:h-[484px] bg-cover bg-center'>
      <div className='w-full flex justify-end'>
        <img className='w-3/12 tablet:w-2/12 xl:w-fit' src="/imageLanding/person1.svg" alt="img" />
      </div>
      <div className='text-center py-3 mobileXxl:mt-[-30px] mobileXxxl:mt-[-100px] sm:mt-[-170px] xl:mt-[-250px] ' >
        <h1 className='font-kalamehBold text-[23px] text-[#051116] tablet:text-[46px]'> فصل جدیدی از یادگیری با مکین </h1>
        <h1 className='font-kalamehMedium text-[14px] text-[#051116] tablet:text-[24px] pt-1 xl:pt-4'> تو مکین قراره یاد بگیری که چجوری یاد بگیری </h1>
        <button className='bg-[#F28C28] text-[#F6F6F6] font-kalamehMedium text-[14px] rounded-[12px] px-[10px] py-2 tablet:py-3 tablet:px-[30px] tablet:text-[20px] mt-2 tablet:mt-4 xl:mt-8'> همین حالا مکینی شو </button>
      </div>
        <img className='w-[30%] bg-contain mobileXxl:w-[27%] mobileXxl:mt-[-50px] md:mt-[-200px] tablet:w-2/12 xl:w-fit' src="/imageLanding/person2.svg" alt="img" /> 
      </div>
    </div>
  )
}
