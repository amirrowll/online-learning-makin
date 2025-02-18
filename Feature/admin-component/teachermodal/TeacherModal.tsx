import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    name: string;
    description: string;
    image?: string;
    isActive: boolean;
  };
}

export default function TeacherModal({ isOpen, onClose, initialData }: TeacherModalProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    image: initialData?.image || '',
    isActive: initialData?.isActive ?? true
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full" dir="rtl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-orange-500">افزودن استاد</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Teacher Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              نام استاد
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="نام استاد را وارد کنید"
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Teacher Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              درباره استاد
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="درباره استاد را وارد کنید"
              className="w-full p-2 border rounded-md h-32 resize-none"
            />
          </div>

          {/* Teacher Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              عکس استاد
            </label>
            <div className="border-2 border-dashed rounded-lg p-4">
              <div className="flex items-center justify-center h-32 bg-gray-50">
                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="Teacher"
                    className="h-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">عکس استاد را بارگذاری کنید</p>
                    <p className="text-xs text-gray-400">حداکثر سایز عکس 2MB می باشد</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Teacher Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              وضعیت استاد:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={formData.isActive}
                  onChange={() => setFormData({ ...formData, isActive: true })}
                  className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="mr-2">فعال</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={!formData.isActive}
                  onChange={() => setFormData({ ...formData, isActive: false })}
                  className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="mr-2">غیرفعال</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              افزودن استاد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}