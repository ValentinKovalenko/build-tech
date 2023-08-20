import {userReviews} from "../../constants";
import SubscriptionBlock from "./SubscriptionBlock";
import FaqBlock from "./FaqBlock";

const ReviewsBlock = () => {
  return (
    <div className='mt-24 text-regal-black'>
      <div className='text-regal-black w-full py-4 pb-20'>
        <div className='flex justify-end w-[23%] text-6xl border-b-[12px] border-regal-yellow'>
          <span className='my-1'>ВІДГУКИ</span>
        </div>
      </div>
      <div className='flex justify-between'>
        {userReviews.map((review) =>
          <div className='w-[23%] p-8 border border-regal-black border-opacity-5' key={review.id}>
            <p className='text-[28px]'>{review.name}</p>
            <div className='border-b-[3px] border-regal-yellow mb-3'/>
            <p className='text-lg'>{review.value}</p>
          </div>
        )}
      </div>
      <div className='flex justify-center'>
        <div className='mt-20 w-1/5 border-b-[3px] border-regal-black opacity-20'/>
      </div>
      <SubscriptionBlock />
      <FaqBlock />
    </div>
  );
};

export default ReviewsBlock;