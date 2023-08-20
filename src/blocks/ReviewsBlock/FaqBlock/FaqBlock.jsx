import architect from '../../../assets/images/architect-giving-a-hand-shake 1.png'
import frame1 from '../../../assets/icons/Frame 2609320.png'
import frame2 from '../../../assets/icons/Frame 2609314.png'

const FaqBlock = () => {
  return (
    <div className='flex justify-between gap-10 mt-32'>
      <div className='pt-[3%] w-1/2'>
        <img className='h-auto w-auto' src={architect} alt='архітектор'/>
      </div>
      <div className='w-1/2'>
        <div className='text-6xl border-b-[12px] border-regal-yellow mb-12'>
          <span className='mb-2 my-1'>FAQ</span>
        </div>
        <div className='text-lg pt-2 pb-4 w-3/4'>
          <div className='my-4 border-b-2 border-regal-black'/>
          <div className='flex justify-between'>
            <p>Чи буде в мене доступ до матеріалів курса після його завершення?</p>
            <img className='w-[34px] h-[34px] cursor-pointer' src={frame1} alt='картинка'/>
          </div>
          <div className='my-4 border-b-2 border-regal-black'/>
          <div className='flex justify-between'>
            <div>
              <p>Чи отримаю я сертифікат, який підтвердить моє проходження курсу?</p>
              <p className='text-regal-black opacity-80 mt-4'>Так, якщо Ваш загальний бал по курсу буде складати більше 80 балів, Ви отримаєте затверджений куратором
                сертифікат</p>
            </div>
            <img className='w-[34px] h-[34px] cursor-pointer' src={frame2} alt='картинка'/>
          </div>
          <div className='my-4 border-b-2 border-regal-black'/>
          <div className='flex justify-between'>
            <p>Чи є система відпрацювання пропущених занять?</p>
            <img className='w-[34px] h-[34px] cursor-pointer' src={frame1} alt='картинка'/>
          </div>
          <div className='my-4 border-b-2 border-regal-black'/>
          <div className='flex justify-between'>
            <p>В мене повинні бути якісь базові знання по темі для проходження курсу?</p>
            <img className='w-[34px] h-[34px] cursor-pointer' src={frame1} alt='картинка'/>
          </div>
          <div className='my-4 border-b-2 border-regal-black'/>
          <div className='flex justify-between'>
            <p>Чи зможу я поставити питання спікеру під час курсу?</p>
            <img className='w-[34px] h-[34px] cursor-pointer' src={frame1} alt='картинка'/>
          </div>
          <div className='my-4 border-b-2 border-regal-black'/>
        </div>
      </div>
    </div>
  );
};

export default FaqBlock;