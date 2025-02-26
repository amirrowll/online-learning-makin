import { X, Info } from 'lucide-react';

const TicketForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm">ثبت تیکت جدید</span>
            <div className="bg-orange-500 w-5 h-5 rounded flex items-center justify-center">
              <span className="text-white text-sm">+</span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Notice Section */}
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <h3 className="font-medium mb-2">نکته</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  قبل از ارسال تیکت حتما قسمت سوالات متداول را مطالعه‌ کنید.
                  <br />
                  بفرمایید، سریع به مشکل خود را واضح کنید. در صورتی که سوال شما
                  <br />
                  در این قسمت پاسخ داده نشده بود، به ارسال تیکت اقدام کنید.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <h3 className="font-medium mb-2">توجه</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ساعت پاسخگویی در پشتیبانی شنبه تا پنجشنبه ۸ الی ۱۷ | ۲۰ الی ۲۳
                  <br />
                  و تمام تعطیلات ۱۱ تا ۱۵ است. پاسخگویی به تیکت شما در سریعترین
                  <br />
                  زمان ممکن انجام خواهند شد. با صبوری شما متشکریم.
                </p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">
                عنوان تیکت را وارد کنید <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg p-2 text-sm"
                placeholder="عنوان تیکت را وارد کنید"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                متن تیکت را وارد کنید <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full border border-gray-200 rounded-lg p-2 text-sm min-h-[120px]"
                placeholder="متن تیکت را وارد کنید"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 text-sm">
              ثبت تیکت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;