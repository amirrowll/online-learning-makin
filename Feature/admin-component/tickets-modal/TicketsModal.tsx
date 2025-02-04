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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-[677px] rounded-2xl bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="size-6" />
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>وضعیت تیکت:</span>
              <span>{ticket.ticketStatus}</span>
              <span className="mx-2">|</span>
              <span>{ticketNumber}</span>
            </div>
            <button className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600">
              بستن تیکت
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4 text-center">
            <span className="text-sm text-gray-500">{currentDate}</span>
          </div>

          <div className="mb-8 flex gap-4">
            <div className="shrink-0">
              <div className="flex size-10 items-center justify-center rounded-full bg-blue-100">
                <span className="text-sm text-blue-600">ک</span>
              </div>
            </div>
            <div className="grow">
              <div className="rounded-lg bg-gray-100 p-4">
                <p className="text-sm leading-relaxed text-gray-800">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                  لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </p>
              </div>
              <div className="mt-2">
                <button className="text-sm text-blue-500 hover:text-blue-600">
                  پاسخ به این پیام
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <textarea
                className="min-h-[120px] w-full resize-none rounded-lg border border-gray-200 p-4 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
              />
              <button className="absolute bottom-4 left-4 text-blue-500 hover:text-blue-600">
                <svg className="size-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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