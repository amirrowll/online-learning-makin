import React, { useState, useEffect } from 'react';
import axios, { AxiosInstance } from 'axios';
import { GrEdit } from "react-icons/gr";
import { GoTrash } from "react-icons/go";
import { IoCheckboxOutline } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi2";
import CategoryModal from './catmodal/CategoryModal';

interface ApiResponse {
  $id: string;
  $values: Category[];
}

interface Category {
  $id: string;
  id: string;
  name: string;
  status: number;
  createdAt?: string; // اضافه کردن فیلد تاریخ
  coursesCount?: number; // اضافه کردن فیلد تعداد دوره‌ها
}

function Categories() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingCategory, setEditingCategory] = useState<Category | undefined>(undefined);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://109.230.200.230:8585/api',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async (): Promise<void> => {
    try {
      const response = await axiosInstance.get<ApiResponse>('/Category/GetAllCategoties');
      console.log('API Response:', response.data);
      // تغییر $values به جای values برای مطابقت با ساختار API
      const categoriesData = response.data.$values || [];
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = (): void => {
    setEditingCategory(undefined);
    setIsModalOpen(true);
  };

  const handleEditCategory = (category: Category): void => {
    setEditingCategory(category);
    setIsModalOpen(true);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='xl:px-20'>
      <div className='mt-5 flex items-center justify-between'>
        <input 
          type="text" 
          className='w-[420px] rounded-2xl border border-[#E0E0E0] px-4 py-2 font-kalamehRegular text-base text-gray-700' 
          placeholder='جست و جو بر اساس نام دوره...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleAddCategory}
          className='flex w-[192px] items-center justify-center gap-1 rounded-lg bg-[#F28C28] px-6 py-2 font-kalamehSemiBold text-base text-white'
        >
          افزودن دسته بندی <HiOutlinePlus className='size-6 text-white' />
        </button>
      </div>
      <div className="mt-5 h-[730px] w-full overflow-hidden rounded-lg bg-white px-7 pb-10 pt-2 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className='border-b border-[#A9A9A9] bg-white'>
              <tr className="font-kalamehMedium text-[20px]">
                <th className="px-6 py-4">ردیف</th>
                <th className="px-6 py-4">عنوان دسته‌بندی</th>
                <th className="px-6 py-4">تعداد دوره های دسته بندی</th>
                <th className="px-6 py-4">تاریخ ایجاد دسته‌بندی</th>
                <th className="px-6 py-4">
                  <span className='flex items-center justify-center'>وضعیت <FaAngleDown className='size-5 text-[#F28C28]' /></span>
                </th>
                <th className="px-6 py-4">عملیات</th>
              </tr>
            </thead>
            <tbody className='[&>tr>td]:p-6 [&>tr>td]:font-kalamehRegular [&>tr>td]:text-[18px]'>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((item: Category, index: number) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 1 ? 'bg-[#F8F8F8]' : 'bg-white'}
                  >
                    <td>{index + 1}</td>
                    <td className='flex justify-center'>
                      {item.name}
                    </td>
                    <td>{item.coursesCount || "-"}</td>
                    <td>{item.createdAt || '-'}</td>
                    <td>
                      <div className="flex items-center justify-center">
                        {item.status === 0 ? (
                          <div className="flex items-center gap-1">
                            <CgCloseR className="size-[22px] text-[#FA2523]" />
                            غیر فعال
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <IoCheckboxOutline className="size-[24px] text-[#2ECC71]" />
                            فعال
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-4">
                        <button 
                          className="text-[#36A8D9]" 
                          onClick={() => handleEditCategory(item)}
                        >
                          <GrEdit className="size-5" />
                        </button>
                        <button className="text-[#FA2523]">
                          <GoTrash className="size-6" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-6 text-center font-kalamehRegular text-[18px] text-red-500">
                    {searchTerm ? 'نتیجه‌ای یافت نشد!' : 'خطا: هیچ دسته‌بندی یافت نشد یا داده‌ها خالی هستند!'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={editingCategory}
      />
    </div>
  );
}

export default Categories;