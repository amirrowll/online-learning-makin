import React, { useState } from 'react';
import { MoreHorizontal, ChevronDown } from 'lucide-react';
import TicketsModal from './tickets-modal/TicketsModal'; 

function Tickets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const users = [
    {
      id: 1,
      row: "۱",
      userName: "محمد حسینی",
      ticketSubject: "پرداخت",
      ticketStatus: "باز ",
      ticketId: "۶۷۳۶۹۱۰۸۵۴۹",
    },
  ];


  const openModal = (ticket: any) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  return (
    <div className='mt-5 xl:px-20'>
      <div className='flex items-center justify-between'>
        <input
          type="text"
          className='mt-5 w-[420px] rounded-2xl border border-[#E0E0E0] px-4 py-3 font-kalamehRegular text-base text-gray-700'
          placeholder='جست و جو  بر اساس نام دوره...'
        />
      </div>
      <div className="mt-5 w-full overflow-hidden rounded-lg bg-white px-7 py-2 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="border-b border-[#A9A9A9] bg-white">
              <tr className='font-kalamehMedium text-[20px]'>
                <th className="px-6 py-4 ">ردیف</th>
                <th className="px-6 py-4 ">نام کاربر</th>
                <th className="px-6 py-4 ">موضوع تیکت</th>
                <th className="px-6 py-4">
                  <span className='flex items-center justify-center'>وضعیت تیکت <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="px-6 py-4">
                  <span className='flex items-center justify-center'>شناسه تیکت <ChevronDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="px-6 py-4 ">عملیات</th>
              </tr>
            </thead>
            <tbody className='[&>tr>td]:px-6 [&>tr>td]:py-5 [&>tr>td]:font-kalamehRegular [&>tr>td]:text-lg'>
              {users.map((user) => (
                <tr key={user.id} className={user.id % 2 === 0 ? 'bg-[#F8F8F8]' : 'bg-white'}>
                  <td>{user.row}</td>
                  <td>{user.userName}</td>
                  <td>{user.ticketSubject}</td>
                  <td>{user.ticketStatus}</td>
                  <td>{user.ticketId}</td>
                  <td>
                    <div className='flex items-center justify-center gap-2'>
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => openModal(user)}
                      >
                        <MoreHorizontal className="size-5 text-[#36A8D9]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && selectedTicket && (
        <TicketsModal ticket={selectedTicket} onClose={closeModal} />
      )}
    </div>
  );
}

export default Tickets;