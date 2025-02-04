/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
import { X, Upload, Trash2, Lock, Check, AlertCircle } from 'lucide-react';

const CoursesModal = ({ course, onClose }: any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto pt-14 ">
      <div className="max-w-4xl w-full rounded-lg bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">


          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span>وضعیت دوره:</span>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="status" className="hidden" />
                  <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center"></span>
                  <span>فعال</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="status" className="hidden" defaultChecked />
                  <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center bg-orange-500"></span>
                  <span>غیرفعال</span>
                </label>
              </div>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 text-sm">
              افزودن دوره
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">
                  کاور دوره <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-2 pl-10 text-sm"
                    placeholder="کاور دوره را بارگذاری کنید"
                  />
                  <Upload className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">
                  تیزر دوره <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-2 pl-10 text-sm"
                    placeholder="تیزر دوره را بارگذاری کنید"
                  />
                  <Upload className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">
                  توضیحات دوره <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm min-h-[120px]"
                  placeholder="توضیحات دوره را وارد کنید"
                />
              </div>
            </div>

            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">
                  نام دوره <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm"
                  placeholder="نام دوره را وارد کنید"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  دسته بندی دوره <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-200 rounded-lg p-2 text-sm appearance-none bg-white">
                  <option value="">دسته بندی دوره را انتخاب کنید</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">
                  استاد دوره <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-200 rounded-lg p-2 text-sm appearance-none bg-white">
                  <option value="">استاد دوره را انتخاب کنید</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">
                  قیمت <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm"
                  placeholder="قیمت دوره را وارد کنید"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">درصد تخفیف</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-2 text-sm"
                    placeholder="درصد تخفیف را وارد کنید"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">قیمت بعد تخفیف</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-2 text-sm"
                    placeholder="قیمت بعد از تخفیف را وارد کنید"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">افزودن قسمت</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 text-sm flex items-center gap-2">
                <span>+</span>
                <span>ایجاد فصل</span>
              </button>
            </div>

            {/* Section 1 */}
            <div className="border rounded-lg mb-4">
              <div className="p-4 border-b bg-gray-50 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button className="text-orange-500 border border-orange-500 px-4 py-1 rounded text-sm">
                    بارگذاری قسمت
                  </button>
                  <button className="text-red-500 border border-red-500 px-4 py-1 rounded text-sm">
                    حذف فصل
                  </button>
                </div>
                <select className="border border-gray-200 rounded p-1 text-sm min-w-[200px]">
                  <option>فصل اول</option>
                </select>
              </div>

              <div className="p-4 space-y-3">
                {[1, 2, 3].map((lesson) => (
                  <div key={lesson} className="flex items-center gap-4">
                    <span className="text-gray-400">=</span>
                    <Trash2 className="h-5 w-5 text-gray-400" />
                    <Lock className="h-5 w-5 text-gray-400" />
                    {lesson === 1 && <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">50</div>}
                    {lesson === 2 && <Check className="h-6 w-6 text-green-500" />}
                    {lesson === 3 && <AlertCircle className="h-6 w-6 text-red-500" />}
                    <span className="text-sm">نام فایل: example.{lesson}.Mp4</span>
                    <input
                      type="text"
                      className="flex-1 border border-gray-200 rounded p-1 text-sm"
                      placeholder="نام قسمت را وارد کنید"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div className="border rounded-lg">
              <div className="p-4 border-b bg-gray-50 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button className="text-orange-500 border border-orange-500 px-4 py-1 rounded text-sm">
                    بارگذاری قسمت
                  </button>
                  <button className="text-red-500 border border-red-500 px-4 py-1 rounded text-sm">
                    حذف فصل
                  </button>
                </div>
                <select className="border border-gray-200 rounded p-1 text-sm min-w-[200px]">
                  <option>فصل دوم</option>
                </select>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 text-center">قسمتی موجود نیست!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600">
            ویرایش
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesModal;