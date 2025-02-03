import React from 'react';
import { MoreHorizontal, ChevronDown } from 'lucide-react';

const Users = () => {
  const users = [
    {
      id: 1,
      row: "۱",
      name: "جواد نعیمی",
      phone: "۰۹۸۷۱۹۳۰۶۹۴",
      lastCourse: "دوره جامع برنامه نویسی net.",
      status: "محدود",
    },
    {
      id: 2,
      row: "۲",
      name: "محمدرضا گنجی",
      phone: "۰۹۶۴۴۶۴۷۰۲۴",
      lastCourse: "دوره جامع UI/UX",
      status: "-",
    },
    {
      id: 3,
      row: "۳",
      name: "هانی عطائی",
      phone: "۰۹۰۰۹۳۱۸۱۳۶",
      lastCourse: " دوره جامع React JS ",
      status: "-",
    },
    {
      id: 4,
      row: "۴",
      name: "متین اسدی",
      phone: "-",
      lastCourse: "-",
      status: "-",
    },
    {
      id: 5,
      row: "۵",
      name: "فرزام قدیری",
      phone: "۰۹۸۵۱۸۸۴۰۷۹",
      lastCourse: "دوره جامع UI/UX",
      status: "-",
    },
    {
      id: 6,
      row: "۶",
      name: "امید احمدنژاد",
      phone: "۰۹۱۰۰۱۰۱۰۱۰",
      lastCourse: "-",
      status: "محدود",
    },
    {
      id: 7,
      row: "۷",
      name: "نیکا شرافتمند",
      phone: "-",
      lastCourse: "دوره جامع UI/UX",
      status: "محدود",
    },
  ];

  return (
    <div className='xl:px-20'>
      <input type="text" className='w-[420px] mt-5 rounded-2xl border border-[#E0E0E0] px-4 py-2 text-gray-700 font-kalamehRegular text-base' placeholder='جست و جو  بر اساس نام دوره...' />
      <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden mt-5 px-7 py-2">
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="bg-white border-b border-[#A9A9A9]">
              <tr className='text-[20px] font-kalamehMedium'>
                <th className="py-4 px-6 ">ردیف</th>
                <th className="py-4 px-6 ">نام کاربر</th>
                <th className="py-4 px-6 ">شماره تماس</th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'> آخرین دوره خریداری شده <ChevronDown className='w-5 h-5 text-[#F28C28]' /> </span>
                </th>
                <th className="py-4 px-6 ">
                  <span className='flex items-center justify-center'> وضعیت کاربر <ChevronDown className="w-5 h-5 text-[#F28C28]" /></span>
                </th>
                <th className="py-4 px-6 ">عملیات</th>
              </tr>
            </thead>
            <tbody className='[&>tr>td]:text-[18px] [&>tr>td]:font-kalamehRegular [&>tr>td]:py-5 [&>tr>td]:px-6'>
              {users.map((user) => (
                <tr key={user.id} className={user.id % 2 === 0 ? 'bg-[#F8F8F8]' : 'bg-white'}>
                  <td >{user.row}</td>
                  <td >{user.name}</td>
                  <td >{user.phone}</td>
                  <td >{user.lastCourse}</td>
                  <td >{user.status}</td>
                  <td >
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5 text-[#36A8D9]" />
                    </button>
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

export default Users;