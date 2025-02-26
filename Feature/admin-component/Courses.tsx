import React, { useState, useEffect } from 'react';
import { MoreHorizontal, ChevronDown, X, Trash2 } from 'lucide-react';
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineModeEdit } from "react-icons/md";

import CoursesModal from './courses-modal/CoursesModal';

interface Course {
  id: string;
  name: string;
  price: number;
  description: string;
  discount: number;
  categoryId: string;
  teacherId: string;
  status: number;
}

interface ApiResponse {
  $id: string;
  $values: Course[];
}

export default function Courses(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async (): Promise<void> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch('https://109.230.200.230:8585/api/Course/allCourses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('خطا در دریافت اطلاعات');
      }
      const data: ApiResponse = await response.json();
      setCourses(data.$values || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطای ناشناخته');
    } finally {
      setLoading(false);
    }
  };

  const getStatusText = (status: number): string => {
    return status === 0 ? 'فعال' : 'غیرفعال';
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openEditModal = (course: Course): void => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const openAddModal = (): void => {
    setSelectedCourse(null);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  if (loading) {
    return <div className="py-10 text-center font-kalamehRegular">در حال بارگذاری...</div>;
  }

  if (error) {
    return <div className="py-10 text-center font-kalamehRegular text-red-500">{error}</div>;
  }

  return (
    <div className='mt-5 xl:px-20'>
      <div className='flex items-center justify-between'>
        <input
          type="text"
          className='mt-5 w-[420px] rounded-2xl border border-[#E0E0E0] px-4 py-3 font-kalamehRegular text-base text-gray-700'
          placeholder='جست و جو  بر اساس نام دوره...'
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
        <button 
          className='w-[192px] rounded-2xl bg-[#F28C28] px-4 py-3 font-kalamehSemiBold text-base text-white'
          onClick={openAddModal}
        >
          ایجاد دوره +
        </button>
      </div>
      
      <div className="mt-5 w-full overflow-hidden rounded-lg bg-white px-7 py-2 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="border-b border-[#A9A9A9] bg-white">
              <tr className='font-kalamehMedium text-[20px]'>
                <th className="px-6 py-4">ردیف</th>
                <th className="px-6 py-4">نام دوره</th>
                <th className="px-6 py-4">
                  <span className='flex items-center justify-center'>قیمت <ChevronDown className='size-5 text-[#F28C28]' /></span>
                </th>
                <th className="px-6 py-4">
                  <span className='flex items-center justify-center'>تخفیف <ChevronDown className='size-5 text-[#F28C28]' /></span>
                </th>
                <th className="px-6 py-4">
                  <span className='flex items-center justify-center'>وضعیت <ChevronDown className="size-5 text-[#F28C28]" /></span>
                </th>
                <th className="px-6 py-4">عملیات</th>
              </tr>
            </thead>
            <tbody className='[&>tr>td]:px-6 [&>tr>td]:py-5 [&>tr>td]:font-kalamehRegular [&>tr>td]:text-lg'>
              {filteredCourses.map((course, index) => (
                <tr key={course.id} className={index % 2 === 0 ? 'bg-[#F8F8F8]' : 'bg-white'}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>{course.price.toLocaleString()} تومان</td>
                  <td>{course.discount}%</td>
                  <td>{getStatusText(course.status)}</td>
                  <td>
                    <div className='flex items-center justify-center gap-2'>
                      <button onClick={() => openEditModal(course)}>
                        <MdOutlineModeEdit className='size-7 text-[#36A8D9]' />
                      </button>
                      <button>
                        <HiOutlineTrash className='size-7 text-[#FA2523]' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <CoursesModal 
          isOpen={isModalOpen} 
          onClose={closeModal}
          course={selectedCourse}
        />
      )}
    </div>
  );
}
