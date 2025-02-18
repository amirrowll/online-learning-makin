import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form';

function SettingsPage() {

  interface dataType {
    address: string;
    call: string;
    description: string;
  }

  const form = useForm<dataType>({});

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = form;

  const onSubmit = (data: dataType) => {
    console.log(data);
  };

  const onErrorHandler = (errors: FieldErrors<dataType>) => [
    console.log(errors, "errors"),
  ];

  return (
    <div className='xl:px-20'>
      <div className='bg-white px-[120px] mt-[89px] rounded-lg shadow-sm'>
        <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
          <div className='flex justify-between items-center pt-[80px]'>
            <div className='flex flex-col'>
              <div className="flex flex-col">
                <label
                  className="text-[18px] font-kalamehMedium text-black "
                  htmlFor="address"
                >
                  آدرس
                </label>
                <input
                  className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border border-[#9E9E9E] py-[12px] pr-2 pl-[195px] mt-[10px] rounded-lg"
                  placeholder=" آدرس را وارد کنید "
                  type="text"
                  id="address"
                  {...register("address", {
                    required: " آدرس الزامی است ",
                  })}
                />
                <p className="error">{errors.address?.message}</p>
              </div>

              <div className="flex flex-col mt-9">
                <label
                  className="text-[18px] font-kalamehMedium text-black"
                  htmlFor="call"
                >
                  شماره تماس
                </label>
                <input
                  className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border border-[#9E9E9E] py-[12px] pr-2 pl-[195px] mt-[10px] rounded-lg"
                  placeholder=" شماره تماس را وارد کنید "
                  type="call"
                  id="call"
                  {...register("call", {
                    required: " در وارد کردن ایمیل خود دقت فرمایید ",
                  })}
                />
                <p className="error">{errors.call?.message}</p>
              </div>
            </div>
            <div >
              <div className="flex flex-col">
                <label
                  className="text-[18px] font-kalamehMedium text-black "
                  htmlFor="description"
                >
                  درباره ما
                </label>
                <input
                  className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border-[#9E9E9E]  py-[8px] pb-[135px] pr-2 pl-[121px] mt-[10px] rounded-lg"
                  placeholder=" درباره ما را وارد کنید "
                  type="text"
                  id="description"
                  {...register("description", {
                    required: "توضیحات خود را وارد نمایید ",
                  })}
                />
                <p className="error">{errors.description?.message}</p>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <button className="bg-[#F28C28] mt-[198px] mb-[60px] px-[87px] py-[6px] text-white rounded-lg font-kalamehMedium text-[18px]">
              اعمال تغییرات
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SettingsPage



// "use client"
// import React from 'react'
// import { FieldErrors, useForm } from 'react-hook-form';
// import { PiNotePencilBold } from "react-icons/pi";

// export default function page() {

//   interface dataType {
//     name: string;
//     family: string;
//     email: string;
//   }

//   const form = useForm<dataType>({});

//   const {
//     handleSubmit,
//     formState: { errors },
//     register,
//   } = form;

//   const onSubmit = (data: dataType) => {
//     console.log(data);
//   };

//   const onErrorHandler = (errors: FieldErrors<dataType>) => [
//     console.log(errors, "errors"),
//   ];


//   return (
//     <div className='xl:px-20'>
//       <div className='bg-white px-[120px] mt-[89px] pb-[222px] rounded-lg shadow-sm'>
//         <div className='flex justify-center pt-[16px]' >
//           <img src="/panel/avatar2.svg" alt="img" />
//         </div>
//         <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
//           <div className='flex justify-between items-center pt-[56px]'>
//             <div className='flex flex-col'>
//               <div className="flex flex-col">
//                 <label
//                   className="text-[18px] font-kalamehMedium text-black "
//                   htmlFor="name"
//                 >
//                   نام
//                 </label>
//                 <input
//                   className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border border-[#9E9E9E] py-[12px] pr-2 pl-[121px] mt-[10px] rounded-lg"
//                   placeholder=" امیرحسین "
//                   type="text"
//                   id="name"
//                   {...register("name", {
//                     required: " آدرس الزامی است ",
//                   })}
//                 />
//                 <p className="error">{errors.name?.message}</p>
//               </div>

//               <div className="flex flex-col mt-9">
//                 <label
//                   className="text-[18px] font-kalamehMedium text-black"
//                   htmlFor="family"
//                 >
//                   نام خانوادگی
//                 </label>
//                 <input
//                   className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border border-[#9E9E9E] py-[12px] pr-2 pl-[121px] mt-[10px] rounded-lg"
//                   placeholder=" محمدی "
//                   type="text"
//                   id="family"
//                   {...register("family", {
//                     required: " در وارد کردن ایمیل خود دقت فرمایید ",
//                   })}
//                 />
//                 <p className="error">{errors.family?.message}</p>
//               </div>
//             </div>
//             <div className='flex flex-col gap-[75px]' >
//               <div className="flex flex-col">
//                 <label
//                   className="text-[18px] font-kalamehMedium text-black "
//                   htmlFor="email"
//                 >
//                   ایمیل
//                 </label>
//                 <input
//                   className="placeholder-[#9E9E9E] placeholder:font-kalamehRegular text-[16px] border-[#9E9E9E]  py-[12px] pr-2 pl-[121px] mt-[10px] rounded-lg"
//                   placeholder=" example@example.com "
//                   type="email"
//                   id="email"
//                   {...register("email", {
//                     required: "ایمیل خود را وارد نمایید ",
//                     pattern: {
//                       value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                       message: "invalid form",
//                     },
//                   })}
//                 />
//                 <p className="error">{errors.email?.message}</p>
//               </div>
//               <button className="bg-[#F28C28] px-[87px] py-[11px] text-white rounded-lg font-kalamehMedium text-[18px] flex items-center gap-1">
//                 ویرایش اطلاعات <PiNotePencilBold className='w-5 h-5' />
//               </button>
//             </div>
//           </div>

//         </form>
//       </div>

//     </div>
//   )
// }
