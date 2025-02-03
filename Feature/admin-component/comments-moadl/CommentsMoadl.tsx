/* eslint-disable tailwindcss/classnames-order */
import { X } from 'lucide-react';

const CommentsModal = ({ user, onClose }: { user: any, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="max-w-[800px] w-full bg-white rounded-lg shadow-lg">
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
        <br />
        <div className="px-6 py-4 ">

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm mb-6 justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-kalamehMedium">نام کاربر:</span>
              <span className='text-lg font-kalamehRegular'>{user.userName}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-kalamehMedium">امتیاز:</span>
              <span className='text-lg font-kalamehRegular'>{user.score}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-kalamehMedium">دوره:</span>
              <span className='text-lg font-kalamehRegular'>{user.courseName}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-kalamehMedium">تاریخ انتشار:</span>
              <span className='text-lg font-kalamehRegular'>۱۴۰۲/۱۰/۱۳</span> {/* این مقدار می‌تواند از user گرفته شود */}
            </div>
          </div>


          <br />

          <div className="space-y-4 ">
            <div className="flex justify-between items-start">
              <h2 className="font-kalamehMedium text-lg">متن نظر :</h2>
              <div className="flex items-center gap-2">
                <span className="text-lg font-kalamehMedium">وضعیت کامنت : </span>
                <span className="text-lg font-kalamehRegular">{user.commentStatus}</span>
              </div>
            </div>

            <div className="border border-blue-200 rounded-lg p-4 bg-white">
              <p className="text-sm font-kalamehRegular leading-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>

            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-3 mt-6">
                <span className="text-lg font-kalamehMedium">نمایش در صفحه اصلی:</span>
                <div className="w-6 h-6 border-2 border-black rounded-full"></div>
              </div>

              <div className="flex gap-3 mt-6 font-kalamehSemiBold" >
                <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors">
                  انتشار
                </button>
                <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
                  عدم انتشار
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;