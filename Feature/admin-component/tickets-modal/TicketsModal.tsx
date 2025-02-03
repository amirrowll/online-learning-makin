import { X } from 'lucide-react';

interface Ticket {
  userName: string;
  ticketSubject: string;
  ticketStatus: string;
  ticketId: string;
}

interface TicketsModalProps {
  ticket: Ticket;
  onClose: () => void;
}

const TicketsModal = ({ ticket, onClose }: TicketsModalProps) => {
  const currentDate = new Date().toLocaleDateString('fa-IR');
  const ticketNumber = ticket.ticketId;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-[677px] bg-white rounded-2xl shadow-lg">
        <div className="border-b border-gray-200 p-4 flex justify-between items-center">
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>وضعیت تیکت:</span>
              <span>{ticket.ticketStatus}</span>
              <span className="mx-2">|</span>
              <span>{ticketNumber}</span>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm">
              بستن تیکت
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="text-center mb-4">
            <span className="text-sm text-gray-500">{currentDate}</span>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-sm">ک</span>
              </div>
            </div>
            <div className="flex-grow">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-800 leading-relaxed text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                  لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </p>
              </div>
              <div className="mt-2">
                <button className="text-blue-500 hover:text-blue-600 text-sm">
                  پاسخ به این پیام
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <textarea
                className="w-full border border-gray-200 rounded-lg p-4 min-h-[120px] resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
              />
              <button className="absolute left-4 bottom-4 text-blue-500 hover:text-blue-600">
                <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsModal;