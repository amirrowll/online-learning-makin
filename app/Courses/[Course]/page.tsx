import Container from '@/components/container/Container'
import React from 'react'

function page() {
    return (
        <Container>
            <div className='flex flex-col mt-10 px-4 lg:px-[70px] ' >
                <div>
                    <div className='text-[#636363] text-base font-kalamehMedium'>
                        <p>صفحه اصلی /  دوره ها / دوره جامع آموزش UI/UX </p>
                    </div>

                    <div className='mt-10 flex flex-col lg:flex-row justify-between '>

                        <div>
                            <img src="/Courses/Youtube player.svg" alt="img" />
                        </div>

                        <div className='hidden lg:block'>
                            <div className='w-[310px] bg-white p-6 flex flex-col gap-6 rounded-lg'>

                                <div className='text-lg font-kalamehBold'>
                                    <p>دوره جامع آموزش UI/UX </p>
                                </div>

                                <div className='flex items-center justify-between '>
                                    <p className='text-base font-kalamehMedium'>استاد : </p>

                                    <p className='text-sm font-kalamehRegular'>حسین رفیعی </p>
                                </div>

                                <div className='flex items-center justify-between '>
                                    <p className='text-base font-kalamehMedium'>رضایتمندی کاربران : </p>

                                    <p className='text-sm font-kalamehRegular'>4.9</p>
                                </div>

                                <div className='flex items-center justify-between '>
                                    <p className='text-base font-kalamehMedium'>مدت زمان دوره: </p>

                                    <p className='text-sm font-kalamehRegular'>8 ساعت</p>
                                </div>

                                <div className='flex items-center justify-between '>
                                    <p className='text-base font-kalamehMedium'>تعداد شرکت کنندگان: </p>

                                    <p className='text-sm font-kalamehRegular'>6985 نفر</p>
                                </div>

                                <div className='flex items-center justify-between '>
                                    <p className='text-base font-kalamehMedium'>قیمت دوره: </p>

                                    <p className='text-sm font-kalamehRegular'>445.000 تومان</p>
                                </div>

                                <div className='mt-[45px]'>
                                    <button type="button" className="text-white bg-gradient-to-r from-[#F28C28] via-[#F28C28] to-[#F28C28] hover:bg-gradient-to-br font-kalamehMedium  rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full">
                                        ثبت نام دوره
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className='bg-white mt-8 p-4 flex items-center flex-col gap-6 lg:hidden '>
                            <div>
                                <p className='text-base font-kalamehBold'>دوره جامع آموزش UI/UX </p>
                            </div>

                            <div className='w-full flex justify-center '>
                                <button className='text-lg  font-kalamehBold text-white w-full rounded-xl bg-[#F28C28] py-2 px-4 max-w-[425px]'>
                                    ثبت نام دوره
                                </button>
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        </Container>
    )
}

export default page