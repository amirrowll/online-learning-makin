/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/classnames-order */
import { X } from 'lucide-react';

interface User {
    buyerName: string;
    orderDate: string;
    courseName: string;
    trackingCode: string;
    paymentId: string;
    price: string;
}

interface OrderDetailsModalProps {
    user: User;
    onClose: () => void;
}

const OrderDetailsModal = ({ user, onClose }: OrderDetailsModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-full max-w-[677px] bg-white rounded-2xl shadow-lg">
                <div className="p-4 flex flex-row-reverse justify-between items-center ">
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                        <X className="size-6" />
                    </button>
                    <div className='flex items-center gap-2'>

                        <div className='w-6 h-6 bg-[#F28C28] rounded-sm'>

                        </div>
                        <div className='text-2xl font-kalamehMedium'>
                            <p>جزئیات سفارش</p>
                        </div>

                    </div>
                </div>

                <div className="p-6 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm">
                        <div className="flex items-center justify-between md:justify-start gap-2">
                            <span className="text-black text-lg font-kalamehMedium">نام کاربر:</span>
                            <span className='text-lg font-kalamehRegular'>{user.buyerName}</span>
                        </div>
                        <div className="flex items-center justify-between md:justify-start gap-2">
                            <span className="text-black text-lg font-kalamehMedium">تاریخ سفارش:</span>
                            <span className='text-lg font-kalamehRegular'>{user.orderDate}</span>
                        </div>
                        <div className="flex items-center justify-between md:justify-start gap-2">
                            <span className="text-black text-lg font-kalamehMedium">دوره خریداری شده:</span>
                            <span className='text-lg font-kalamehRegular'>{user.courseName}</span>
                        </div>
                        <div className="flex items-center justify-between md:justify-start gap-2">
                            <span className="text-black text-lg font-kalamehMedium">کد پیگیری:</span>
                            <span className="font-kalamehRegular text-lg">{user.trackingCode}</span>
                        </div>
                        <div className="flex items-center justify-between md:justify-start gap-2">
                            <span className="text-black text-lg font-kalamehMedium">شناسه پرداخت:</span>
                            <span className="font-kalamehRegular text-lg">{user.paymentId}</span>
                        </div>
                        <div className="flex items-center justify-between md:justify-start gap-2">
                            <span className="text-black text-lg font-kalamehMedium">مبلغ سفارش:</span>
                            <span className='text-lg font-kalamehRegular'>{user.price}</span>
                        </div>
                    </div>

                    <div className="flex justify-center pt-4 ">
                        <button
                            className="bg-orange-400 font-kalamehSemiBold text-base text-white px-12 py-2.5 rounded-md hover:bg-orange-500 transition-colors"
                            onClick={onClose}
                        >
                            بستن
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsModal;