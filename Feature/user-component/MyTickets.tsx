import React, { useState } from 'react';
import { MoreHorizontal, ChevronDown } from 'lucide-react';
import TicketsModal from './tickets-modal/TicketsModal';
import TicketForm from './tickets-new/TicketForm'; // Import the new modal component

function MyTickets() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
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

  const openDetailsModal = (ticket: any) => {
    setSelectedTicket(ticket);
    setIsDetailsModalOpen(true);
  };


  const openFormModal = () => {
    setIsFormModalOpen(true);
  };

  const closeModals = () => {
    setIsDetailsModalOpen(false);
    setIsFormModalOpen(false);
    setSelectedTicket(null);
  };

  return (
    <div className='mt-5 xl:px-20'>
      <div className='flex items-center justify-end'>
        <button
          className='rounded-lg bg-[#F28C28] py-3 px-6 max-w-[193px] font-kalamehMedium text-[16px] text-white'
          onClick={openFormModal}
        >
          ثبت تیکت جدید
        </button>
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
                        onClick={() => openDetailsModal(user)}
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

      {/* Render the details modal if isDetailsModalOpen is true */}
      {isDetailsModalOpen && selectedTicket && (
        <TicketsModal ticket={selectedTicket} onClose={closeModals} />
      )}

      {/* Render the form modal if isFormModalOpen is true */}
      {isFormModalOpen && (
        <TicketForm onClose={closeModals} />
      )}
    </div>
  );
}

export default MyTickets;