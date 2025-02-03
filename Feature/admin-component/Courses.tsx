/* eslint-disable tailwindcss/classnames-order */
import React from 'react'
import { MoreHorizontal, ChevronDown } from 'lucide-react';
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineModeEdit } from "react-icons/md";




function Courses() {

  const users = [
    {
      id: 1,
      row: "۱",
      courseName: "React JS",
      category: "برنامه نویسی",
      master: "حسین رفیعی",
      status: "فعال",
    },

  ];


  return (
    <div className='xl:px-20 mt-5'>
      <div className='flex items-center justify-between'>
        <input type="text" className='w-[420px] mt-5 rounded-2xl border border-[#E0E0E0] px-4 py-3 text-gray-700 font-kalamehRegular text-base' placeholder='جست و جو  بر اساس نام دوره...' />


        <button className='bg-[#F28C28] text-white w-[192px] px-4 py-3 rounded-2xl font-kalamehSemiBold text-base'>
          ایجاد دوره +
        </button>
      </div>
      <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden mt-5 px-7 py-2">
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="bg-white border-b border-[#A9A9A9]">
              <tr className='text-[20px] font-kalamehMedium'>
                <th className="py-4 px-6 ">ردیف</th>
                <th className="py-4 px-6 ">نام دوره</th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'>دسته بندی دوره <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'> اساتید دوره <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="py-4 px-6 ">

                  <span className='flex items-center justify-center'> وضعیت  <ChevronDown className="size-5 text-[#F28C28]" /></span>
                </th>
                <th className="py-4 px-6 ">عملیات</th>
              </tr>
            </thead>
            <tbody className='[&>tr>td]:text-lg [&>tr>td]:font-kalamehRegular [&>tr>td]:py-5 [&>tr>td]:px-6'>
              {users.map((user) => (
                <tr key={user.id} className={user.id % 2 === 0 ? 'bg-[#F8F8F8]' : 'bg-white'}>
                  <td >{user.row}</td>
                  <td >{user.courseName}</td>
                  <td >{user.category}</td>
                  <td >{user.master}</td>
                  <td >{user.status}</td>
                  <td >
                    <div className='flex items-center justify-center gap-2'>

                      <button>
                        <MdOutlineModeEdit className='size-7 text-[#36A8D9]' />
                      </button>

                      <button>
                        <HiOutlineTrash className='size-7 text-[#FA2523]' />
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

  )
}

export default Courses