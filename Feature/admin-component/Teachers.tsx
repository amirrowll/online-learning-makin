import React from 'react'
import { GrEdit } from "react-icons/gr";
import { GoTrash } from "react-icons/go";
import { IoCheckboxOutline } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi2";

function Teachers() {
    const teachers = [
        { id: 1, row: "۱", name: "علیرضا مومنی", coursesCount: "۱", isActive: false, image: "/panel/ostadBack.svg" },
        { id: 2, row: "۲", name: "حسین رفیعی", coursesCount: "۳", isActive: true, image: "/panel/ostadFront.svg" },
        { id: 3, row: "۳", name: "محمد صادقی کیا", coursesCount: "۶", isActive: false, image: "/panel/ostadUi.svg" },
        { id: 4, row: "۴", name: "محسن زیرک", coursesCount: "۴", isActive: true, image: "/panel/ostadPh.svg" },
        { id: 5, row: "۵", name: "محمدرضا کسائی", coursesCount: "۰", isActive: true, image: "/panel/ostadPhyton.svg" },
    ];


    return (
        <div className='xl:px-20'>
            <div className='flex items-center justify-between mt-5 '>
                <input type="text" className='w-[420px] rounded-2xl border border-[#E0E0E0] px-4 py-2 text-gray-700 font-kalamehRegular text-base' placeholder='جست و جو  بر اساس نام دوره...' />
                <button className='w-[192px] rounded-lg bg-[#F28C28] px-6 py-2 text-white font-kalamehSemiBold text-base flex items-center justify-center gap-1'>
                    افزودن استاد <HiOutlinePlus className='text-white w-6 h-6' />
                </button>
            </div>
            <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden mt-5 px-7 pt-2 pb-10">
                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead className='bg-white border-b border-[#A9A9A9]'>
                            <tr className="text-[20px] font-kalamehMedium">
                                <th className="py-4 px-6 ">ردیف</th>
                                <th className="py-4 px-6 ">عکس استاد</th>
                                <th className="py-4 px-6">نام استاد</th>
                                <th className="py-4 px-6 ">تعداد دوره های فعال</th>
                                <th className="py-4 px-6">
                                    <span className='flex items-center justify-center'> وضعیت <FaAngleDown className='w-5 h-5 text-[#F28C28]' /> </span>
                                </th>
                                <th className="py-4 px-6">عملیات</th>
                            </tr>
                        </thead>
                        <tbody className='[&>tr>td]:text-[18px] [&>tr>td]:font-kalamehRegular [&>tr>td]:py-4 [&>tr>td]:px-6'>
                            {teachers.map((teacher, index) => (
                                <tr
                                    key={teacher.id}
                                    className={index % 2 === 1 ? 'bg-[#F8F8F8]' : 'bg-white'}
                                >
                                    <td >{teacher.row}</td>
                                    <td className='flex justify-center'>
                                        <img
                                            src={teacher.image}
                                            alt={teacher.name}
                                            className="w-14 h-14 rounded-full"
                                        />
                                    </td>
                                    <td>{teacher.name}</td>
                                    <td >{teacher.coursesCount}</td>
                                    <td>
                                        <div className="flex items-center justify-center">
                                            {teacher.isActive ? (
                                                <div className="flex items-center gap-1">
                                                    <IoCheckboxOutline className="w-[24px] h-[24px] text-[#2ECC71] " />
                                                    فعال
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1">
                                                    <CgCloseR className="w-[22px] h-[22px] text-[#FA2523] " />
                                                    غیر فعال
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center justify-center gap-4">
                                            <button className="text-[#36A8D9]">
                                                <GrEdit className="w-5 h-5" />
                                            </button>
                                            <button className="text-[#FA2523]">
                                                <GoTrash className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Teachers;