import React from 'react'
import { GrCircleInformation } from "react-icons/gr";

function InfoValue1() {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <GrCircleInformation size={24} />
                <p className='text-2xl font-kalamehMedium'>درباره دوره</p>
            </div>

            <div>
                <p className='text-lg font-kalamehRegular mt-4 '>

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ...

                </p>
            </div>
        </div>
    )
}

export default InfoValue1