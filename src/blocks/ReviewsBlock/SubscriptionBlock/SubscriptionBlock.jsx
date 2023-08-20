import {SubscriptionBlockText} from "../../../constants";
import blue from '../../../assets/images/blue-print-and-arrangement-of-yellow-repair-tools 1.png'
import {useForm} from "react-hook-form";

const SubscriptionBlock = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className='flex ml-[10%] mt-32 h-[302px]'>
      <form className='flex px-16 py-8 w-1/3 flex-col gap-8 border border-regal-black border-opacity-5'
            onSubmit={handleSubmit(onSubmit)}>
        <input className='outline-0 border-b-[3px] border-regal-black border-opacity-20'
               type='text'
               placeholder='Прізвище та ім`я'
               {...register('firstName')}
        />
        <input className='outline-0 border-b-[3px] border-regal-black border-opacity-20'
               type='text'
               placeholder='Email'
               {...register('email')}
        />
        <div className='flex justify-center'>
          <button type='submit' className='bg-regal-yellow text-xl py-5 px-8 w-60 hover:opacity-80'>Записатись</button>
        </div>
      </form>
      <div className='relative pl-16 pt-8 bg-regal-yellow'>
        <p className='text-[28px]'>Підпишіться на новини</p>
        <div className='mt-5 border-b-[3px] border-regal-black opacity-80'/>
        <p className='pt-8 text-lg w-[55%]'>{SubscriptionBlockText}</p>
        <img className='absolute top-0 right-0' src={blue} alt='картинка'/>
      </div>
    </div>
  );
};

export default SubscriptionBlock;