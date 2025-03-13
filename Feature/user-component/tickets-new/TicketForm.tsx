"use client"
import { X } from 'lucide-react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FieldErrors, useForm } from 'react-hook-form';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GrStatusInfo } from "react-icons/gr";

const TicketForm = ({ onClose }: { onClose: () => void }) => {
  const [loginError, setLoginError] = useState('');
  const [cookies] = useCookies(['token']);

  interface dataType {
    title: string;
    description: string;
  }

  const form = useForm<dataType>({});

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError
  } = form;

  const onErrorHandler = (errors: FieldErrors<dataType>) => [
    console.log(errors, "errors"),
  ];

  const onSubmit = async (data: dataType) => {
    try {
      const token = cookies.token;

      if (!token) {
        setLoginError('توکن احراز هویت یافت نشد');
        return;
      }

      const response = await fetch("https://109.230.200.230:8585/api/Ticket/Ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}` // ارسال توکن در هدر برای احراز هویت
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description
          // حذف userId از بدنه درخواست
        })
      });
      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);

        try {
          const errorData = JSON.parse(errorText);
          setLoginError(errorData.message || 'خطا در ثبت تیکت');

          if (errorData.errors) {
            errorData.errors.forEach((err: { field: any; message: string; }) => {
              setError(err.field as keyof dataType, {
                type: 'manual',
                message: err.message
              });
            });
          }
        } catch (e) {
          setLoginError('خطای سرور: پاسخ نامعتبر');
        }
        return;
      }

      setLoginError('تیکت با موفقیت ثبت شد'); // پیام موفقیت
      onClose(); // بستن فرم پس از موفقیت
    } catch (error) {
      console.error('Network error:', error);
      setLoginError('خطا در برقراری ارتباط با سرور');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="max-w-[1140px] max-h-[665px] h-full mr-64 w-full bg-white rounded-lg shadow-sm p-10 ">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-[#051116] text-[24px] font-kalamehSemiBold">
            <div className="bg-[#F28C28] w-6 h-6 rounded flex items-center justify-center">
            </div>
            <span >ثبت تیکت جدید</span>
          </div>
          <button className="text-[#051116] hover:text-gray-700" onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className='flex items-start relative gap-[157px] mt-10 '>
          <div className='w-full max-w-[430px]'>
            <form  noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
              <div className='flex flex-col '>
                <div className="flex flex-col">
                  <label
                    className="text-[18px] font-kalamehMedium text-black "
                    htmlFor="address"
                  >
                    عنوان تیکیت را وارد کنید*
                  </label>
                  <input
                    className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border border-[#9E9E9E] py-[15px] mt-4 rounded-lg"
                    placeholder=" عنوان تیکت  را وارد کنید "
                    type="text"
                    id="address"
                    {...register("title", {
                      required: " آدرس الزامی است ",
                    })}
                  />
                  <p className="error">{errors.title?.message}</p>
                </div>

                <div className="flex flex-col mt-[63px] ">
                  <label
                    className="text-[18px] font-kalamehMedium text-black "
                    htmlFor="description"
                  >
                    متن تیکیت را وارد کنید*
                  </label>
                  <input
                    className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border-[#9E9E9E] pb-[85px] mt-[25px] rounded-lg"
                    placeholder=" متن تیکت  را وارد کنید "
                    type="text"
                    id="description"
                    {...register("description", {
                      required: "توضیحات خود را وارد نمایید ",
                    })}
                  />
                  <p className="error">{errors.description?.message}</p>
                </div>
              </div>

              <div className='absolute left-0 bottom-[-150px]'>
                <button className="bg-[#F28C28] flex justify-center px-10 py-[13.5px] text-white rounded-[14px] font-kalamehMedium text-[18px]">
                ثبت تیکت
                </button>
              </div>
            </form>
          </div>
          <div className='w-full'>
            <div>
              <span className='flex items-center text-[#051116] font-kalamehMedium text-[20px] gap-2'> <GrStatusInfo /> نکته </span>
              <p className='text-[#767676] font-kalamehRegular text-[18px] leading-[30.6px]'> قبل از ارسال تیکت حتما قسمت سوالات متداول را مطالعه بفرمایید، تا سریع تر مشکل خود را رفع کنید. در صورتی که سوال شما در این قسمت نبود، نسبت به ارسال تیکت اقدام کنید. </p>
            </div>
            <div className='mt-11'>
              <span className='flex items-center text-[#051116] font-kalamehMedium text-[20px] gap-2'> <AiOutlineExclamationCircle /> توجه </span>
              <p className='text-[#767676] font-kalamehRegular text-[18px] leading-[30.6px]'> ساعت پاسخگویی در پشتیبانی شنبه تا پنجشنبه 8 الی 14 | 17 الی 20 و ایام تعطیل 11 تا 13 است پاسخگویی به تیکت شما در سریعترین زمان ممکن انجام خواهد شد؛ از صبوری شما ممنونیم. </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketForm;