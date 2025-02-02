/* eslint-disable tailwindcss/classnames-order */
import React from 'react'
import { GrEdit } from "react-icons/gr";
import { GoTrash } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";






function Courses() {




  return (
    <div className='mt-5 pl-10'>
      <div className='flex  items-center justify-between'>

        <input type="text" className='w-[420px] rounded-2xl border border-[#E0E0E0] px-4 py-2 text-gray-700 font-kalamehRegular text-base' placeholder='جست و جو  بر اساس نام دوره...' />


        <button className='w-[192px] rounded-lg bg-[#F28C28] px-6 py-2 text-white font-kalamehSemiBold text-base'>
          ایجاد دوره +
        </button>

      </div>

      <div className='mt-5'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase bg-white border-b-2">
              <tr className='text-xl font-kalamehMedium'>
                <th scope="col" className="px-6 py-3">
                  ردیف
                </th>
                <th scope="col" className="px-6 py-3">
                  نام دوره
                </th>
                <th scope="col" className="px-6 py-3">
                  <p className='flex items-center gap-2'>دسته بندی دوره <FaAngleDown className='text-[#F28C28]' /></p>

                </th>
                <th scope="col" className="px-6 py-3">
                  <p className='flex items-center gap-2'> استاد دوره <FaAngleDown className='text-[#F28C28]' /></p>

                </th>
                <th scope="col" className="px-6 py-3">
                  <p className='flex items-center gap-2'> وضعیت <FaAngleDown className='text-[#F28C28]' />
                  </p>
                </th>
                <th scope="col" className="px-6 py-3">
                  عملیات
                </th>


              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200 text-lg font-kalamehRegular">
                <td className='px-6 py-4'>1</td>
                <td className="px-6 py-4">دوره جامع React JS</td>
                <td className="px-6 py-4">برنامه نویسی Frontend</td>
                <td className="px-6 py-4">حسین رفیعی</td>
                <td className="px-6 py-4">فعال</td>
                <td className='flex gap-4 px-6 py-4'>
                  <GrEdit size={24} className='text-[#36A8D9]' />
                  <GoTrash size={24} className='text-[#FA2523]' />
                </td>


              </tr>

              <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200 text-lg font-kalamehRegular">
                <td className='px-6 py-4'>1</td>
                <td className="px-6 py-4">دوره جامع React JS</td>
                <td className="px-6 py-4">برنامه نویسی Frontend</td>
                <td className="px-6 py-4">حسین رفیعی</td>
                <td className="px-6 py-4">فعال</td>
                <td className='flex gap-4 px-6 py-4'>
                  <GrEdit size={24} className='text-[#36A8D9]' />
                  <GoTrash size={24} className='text-[#FA2523]' />
                </td>


              </tr>

              <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200 text-lg font-kalamehRegular">
                <td className='px-6 py-4'>1</td>
                <td className="px-6 py-4">دوره جامع React JS</td>
                <td className="px-6 py-4">برنامه نویسی Frontend</td>
                <td className="px-6 py-4">حسین رفیعی</td>
                <td className="px-6 py-4">فعال</td>
                <td className='flex gap-4 px-6 py-4'>
                  <GrEdit size={24} className='text-[#36A8D9]' />
                  <GoTrash size={24} className='text-[#FA2523]' />
                </td>


              </tr>

              <tr className="odd:bg-white  even:bg-[#F8F8F8]  border-b  border-gray-200 text-lg font-kalamehRegular">
                <td className='px-6 py-4'>1</td>
                <td className="px-6 py-4">دوره جامع React JS</td>
                <td className="px-6 py-4">برنامه نویسی Frontend</td>
                <td className="px-6 py-4">حسین رفیعی</td>
                <td className="px-6 py-4">فعال</td>
                <td className='flex gap-4 px-6 py-4'>
                  <GrEdit size={24} className='text-[#36A8D9]' />
                  <GoTrash size={24} className='text-[#FA2523]' />
                </td>


              </tr>

            </tbody>
          </table>
        </div>

      </div>

      <div className='mt-5 flex justify-end'>
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </div>

  )
}

export default Courses