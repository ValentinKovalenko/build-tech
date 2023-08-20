import buttomPlay from '../../assets/icons/buttomPlay.png'
import calendar from '../../assets/icons/Calendar.png'
import many from '../../assets/icons/schedule_FILL1_wght400_GRAD0_opsz48 1 (1).png'
import clock from '../../assets/icons/schedule_FILL1_wght400_GRAD0_opsz48 1.png'

const CoursesCard = ({res}) => {

  return (
    <div className='w-1/3 shadow-md relative text-regal-black'>
      <img className='w-full h-[400px] object-cover' src={res?.image} alt='engineer'/>
      <img className='absolute top-1/4 left-0 right-0 m-auto cursor-pointer' src={buttomPlay} alt='buttomPlay'/>
      <p className='pl-10 w-full text-3xl my-2'>Курс {res.value}</p>
      <div className='w-3/5 border-b-[3px] border-regal-yellow'/>
      <div className='flex justify-around mt-8 text-lg mb-6'>
        <div>
          <div className='flex items-center gap-2'>
            <img className='h-5 w-5' src={calendar} alt='calendar'/>
            <span className='opacity-80'>Старт</span>
          </div>
          <p className='font-change'>{res.start}</p>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <img className='h-5 w-5' src={clock} alt='clock'/>
            <span className='opacity-80'>Період</span>
          </div>
          <p><span className='font-change'>{res.periodNumber}</span> {res.period}</p>
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <img className='h-5 w-5' src={many} alt='many'/>
            <span className='opacity-80'>Ціна</span>
          </div>
          <p><span className='font-change'>{res.priceNumber}</span> {res.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;