/* eslint-disable tailwindcss/classnames-order */
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "رضا محمدی",
    rating: 3.5,
    comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ساختگیهای که لازم است و برای شرایط فعلی تکنولوژی که لازم است"
  },
  {
    id: 2,
    name: "الهام قدیری",
    rating: 5,
    comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ساختگیهای که لازم است و برای شرایط فعلی تکنولوژی که لازم است"
  },
  {
    id: 3,
    name: "سارا شاه رضایی",
    rating: 3.5,
    comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ساختگیهای که لازم است و برای شرایط فعلی تکنولوژی که لازم است",
  },
  {
    id: 4,
    name: "علی قربانی",
    rating: 4,
    comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ساختگیهای که لازم است و برای شرایط فعلی تکنولوژی که لازم است",
  },
  {
    id: 5,
    name: "نیما عابدی",
    rating: 4.5,
    comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ساختگیهای که لازم است و برای شرایط فعلی تکنولوژی که لازم است",
  },
  {
    id: 6,
    name: "تینا نیک خو",
    rating: 3,
    comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ساختگیهای که لازم است و برای شرایط فعلی تکنولوژی که لازم است",
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0.5 ml-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`size-4 ${star <= rating
            ? 'text-[#FCEA2B] fill-[#FCEA2B]'
            : 'text-gray-300'
            }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className='flex flex-col gap-2'>
            <h3 className="font-kalamehSemiBold text-base text-gray-900">{review.name}</h3>
            <RatingStars rating={review.rating} />
          </div>
        </div>
      </div>
      <p className="text-[#051116] text-sm font-kalamehRegular leading-relaxed">{review.comment}</p>
      <div className='flex justify-end'>
        <button className="text-[#36A8D9] text-base font-kalamehMedium mt-4">بیشتر</button>
      </div>
    </div>
  );
};

const AverageRating = () => {
  const averageRating = 4.5;
  const totalReviews = 1350;
  const ratingDistribution = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 60 },
    { stars: 3, percentage: 50 },
    { stars: 2, percentage: 30 },
    { stars: 1, percentage: 20 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm sticky top-36">
      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
        <div className="flex justify-center mb-2">
          <RatingStars rating={averageRating} />
        </div>
        <div className="text-sm text-gray-500">{totalReviews} نظر</div>
      </div>

      <div className="space-y-3">
        {ratingDistribution.map(({ stars, percentage }) => (
          <div key={stars} className="flex items-center gap-2">
            <div className="flex items-center gap-1 w-12">
              <span className="text-sm text-gray-600">{stars}</span>
              <Star fill='#FCEA2B' stroke='none' />
            </div>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FCEA2B] rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 ">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AverageRating />
          </div>
          <div className="lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            <button className="w-full mt-6 text-center text-gray-600 hover:text-gray-900">
              نمایش همه کامنت ها ▼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}