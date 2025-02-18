/* eslint-disable tailwindcss/classnames-order */
import React, { useState } from 'react';
import { MoreHorizontal, ChevronDown } from 'lucide-react';



function MyOrders() {
  
  const users = [
    {
      id: 1,
      row: "۱",
      buyerName: "محمد حسینی",
      courseName: "دوره جامع UI/UX",
      orderDate: "۱۴۰۲/۱۱/۲۵",
      price: "۳,۵۰۰,۰۰۰ تومان",
      paymentId: "۴۳۴۳۱۴۳۸",
      trackingCode: "۴۳۴۳۱۸۵۰۲۵",
    },

    {
      id: 2,
      row: "2",
      buyerName: "امیر حسین محمدی",
      courseName: "دوره جامع UI/UX",
      orderDate: "۱۴۰۲/۱۱/۲۵",
      price: "۳,۵۰۰,۰۰۰ تومان",
      paymentId: "۴۳۴۳۱۴۳۸",
      trackingCode: "۴۳۴۳۱۸۵۰۲۵",
    },
   
  ];

  

  return (
    <div className='xl:px-20 mt-5'>
      
      <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden mt-5 px-7 py-2">
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="bg-white border-b border-[#A9A9A9]">
              <tr className='text-[20px] font-kalamehMedium'>
                <th className="py-4 px-6 ">ردیف</th>
                <th className="py-4 px-6 ">نام خریدار</th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'>نام دوره <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'>تاریخ سفارش <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'>بهای پرداختی (تومان) <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'>شناسه پرداخت <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'>کد پیگیری <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
              </tr>
            </thead>
            <tbody className='[&>tr>td]:text-lg [&>tr>td]:font-kalamehRegular [&>tr>td]:py-5 [&>tr>td]:px-6'>
              {users.map((user) => (
                <tr key={user.id} className={user.id % 2 === 0 ? 'bg-[#F8F8F8]' : 'bg-white'}>
                  <td>{user.row}</td>
                  <td>{user.buyerName}</td>
                  <td>{user.courseName}</td>
                  <td>{user.orderDate}</td>
                  <td>{user.price}</td>
                  <td>{user.paymentId}</td>
                  <td>{user.trackingCode}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
    </div>
  );
}

export default MyOrders;