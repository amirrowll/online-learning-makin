import React, { useState, useEffect } from 'react';
import { GrEdit } from "react-icons/gr";
import { GoTrash } from "react-icons/go";
import { IoCheckboxOutline } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi2";
import TeacherModal from '@/Feature/admin-component/teachermodal/TeacherModal';
import axios from 'axios';
import https from 'https';

interface Teacher {
  id: string;
  name: string;
  description: string;
  imageName: string;
  isActive: boolean;
}

function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchTeachers = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('لطفاً ابتدا وارد شوید');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        'https://109.230.200.230:8585/api/Teacher/getAllTeacher',
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false
          }),
          timeout: 10000
        }
      );

      if (response.data?.$values) { // تغییر این خط
        const teachersWithActive = response.data.$values.map((teacher: any) => ({
          ...teacher,
          isActive: true // یا هر مقدار پیش‌فرضی که می‌خواهید
        }));
        setTeachers(teachersWithActive);
        setError(null);
      } else {
        setError('داده‌ای از سرور دریافت نشد');
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError('نشست شما منقضی شده است. لطفا دوباره وارد شوید');
        localStorage.removeItem('token');
      } else {
        setError('خطا در دریافت اطلاعات اساتید');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleAddTeacher = () => {
    setSelectedTeacher(null);
    setIsModalOpen(true);
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeacher(null);
    fetchTeachers(); // بروزرسانی لیست بعد از بستن مودال
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteTeacher = async (teacherId: string) => {
    if (!window.confirm('آیا از حذف این استاد اطمینان دارید؟')) {
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('لطفاً ابتدا وارد شوید');
      return;
    }

    try {
      // اینجا API حذف استاد را صدا بزنید
      setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
    } catch (error) {
      setError('خطا در حذف استاد');
    }
  };

  return (
    <div className='xl:px-20'>
      {error && (
        <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="mt-2 text-sm underline">
            تلاش مجدد
          </button>
        </div>
      )}

      <div className='mt-5 flex items-center justify-between'>
        <input
          type="text"
          className='w-[420px] rounded-2xl border border-[#E0E0E0] px-4 py-2 font-kalamehRegular text-base text-gray-700'
          placeholder='جست و جو  بر اساس نام استاد...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className='flex w-[192px] items-center justify-center gap-1 rounded-lg bg-[#F28C28] px-6 py-2 font-kalamehSemiBold text-base text-white'
          onClick={handleAddTeacher}
        >
          افزودن استاد <HiOutlinePlus className='size-6 text-white' />
        </button>
      </div>

      <div className="mt-5 w-full overflow-hidden rounded-lg bg-white px-7 pb-10 pt-2 shadow-sm">
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="size-8 animate-spin rounded-full border-b-2 border-[#F28C28]"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead className='border-b border-[#A9A9A9] bg-white'>
                <tr className="font-kalamehMedium text-[20px]">
                  <th className="px-6 py-4">ردیف</th>
                  <th className="px-6 py-4">عکس استاد</th>
                  <th className="px-6 py-4">نام استاد</th>
                  <th className="px-6 py-4">توضیحات</th>
                  <th className="px-6 py-4">
                    <span className='flex items-center justify-center'>وضعیت <FaAngleDown className='size-5 text-[#F28C28]' /></span>
                  </th>
                  <th className="px-6 py-4">عملیات</th>
                </tr>
              </thead>
              <tbody className='[&>tr>td]:px-6 [&>tr>td]:py-4 [&>tr>td]:font-kalamehRegular [&>tr>td]:text-[18px]'>
                {filteredTeachers.length > 0 ? (
                  filteredTeachers.map((teacher, index) => (
                    <tr
                      key={teacher.id}
                      className={index % 2 === 1 ? 'bg-[#F8F8F8]' : 'bg-white'}
                    >
                      <td>{index + 1}</td>
                      <td className='flex justify-center'>
                        <img
                          src={`https://109.230.200.230:8585/images/${teacher.imageName}`}
                          alt={teacher.name}
                          className="size-14 rounded-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/panel/default-teacher.svg';
                          }}
                        />
                      </td>
                      <td>{teacher.name}</td>
                      <td>{teacher.description}</td>
                      <td>
                        <div className="flex items-center justify-center">
                          {teacher.isActive ? (
                            <div className="flex items-center gap-1">
                              <IoCheckboxOutline className="size-6 text-[#2ECC71]" />
                              <span>فعال</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              <CgCloseR className="size-6 text-[#FA2523]" />
                              <span>غیرفعال</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-center gap-4">
                          <button
                            className="text-[#36A8D9]"
                            onClick={() => handleEditTeacher(teacher)}
                          >
                            <GrEdit className="size-5" />
                          </button>
                          <button
                            className="text-[#FA2523]"
                            onClick={() => handleDeleteTeacher(teacher.id)}
                          >
                            <GoTrash className="size-6" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-500">
                      هیچ استادی یافت نشد
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isModalOpen && (
        <TeacherModal
          isOpen={isModalOpen}
          onClose={closeModal}
          initialData={selectedTeacher ? {
            name: selectedTeacher.name,
            description: selectedTeacher.description,
            image: `https://109.230.200.230:8585/${selectedTeacher.imageName}`,
            isActive: selectedTeacher.isActive
          } : undefined}
        />
      )}
    </div>
  );
}

export default Teachers;