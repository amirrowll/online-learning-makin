import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { LiaPlusSolid } from "react-icons/lia";



function UserComments() {
    return (
        <div className='w-full mt-20 '>
            <div className='flex justify-between '>
                <div className='flex items-center gap-2'>
                    <LuMessagesSquare size={24} />
                    <p className='font-kalamehMedium text-2xl'>نظرات کاربران</p>
                </div>

                <div className='text-[#36A8D9] text-xl font-kalamehMedium  flex items-center gap-2'>
                    <LiaPlusSolid size={32} />
                    <p>افزودن نظر</p>
                </div>
            </div>

            <div className='mt-6 w-full'>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserComments ;


