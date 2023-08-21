import logo1 from '../../../assets/icons/person1.png'
import logo2 from '../../../assets/icons/engineering_FILL1_wght300_GRAD0_opsz48 1.png'
import logo3 from '../../../assets/icons/person_FILL1_wght300_GRAD0_opsz48 2.png'
import logo4 from '../../../assets/icons/person_FILL1_wght300_GRAD0_opsz48 3.png'
import {testUsefulInformationBlock1, testUsefulInformationBlock2} from "../../../constants";

const UsefulInformationBlock = () => {

  return (
    <div className='flex text-regal-black w-full mt-32'>
      <div className='flex bg-regal-yellow w-[41%] pl-[10%] py-8 pr-20'>
        <div>
          <div className='flex items-center gap-2'>
            <img src={logo1} alt='логотип'/>
            <p className='text-[28px]'>Приватним особам</p>
          </div>
          <p className='text-lg'>для виконання базових ремонтних робіт у власному житлі</p>
          <div className='my-4 border-b-2 border-regal-black'/>
          <div className='flex items-center gap-2'>
            <img src={logo2} alt='логотип'/>
            <p className='text-[28px]'>Робітникам</p>
          </div>
          <p className='text-lg'>для підвищення своїх професійних навичок та знань</p>
          <div className='my-4 border-b-2 border-regal-black'/>
          <div className='flex items-center gap-2'>
            <img src={logo3} alt='логотип'/>
            <p className='text-[28px]'>Власникам бізнесів</p>
          </div>
          <p className='text-lg'>для підвищення рівня надання послуг в будівельній сфері</p>
          <div className='my-4 border-b-2 border-regal-black'/>
          <div className='flex items-center gap-2'>
            <img src={logo4} alt='логотип'/>
            <p className='text-[28px]'>Дизайнерам</p>
          </div>
          <p className='text-lg'>для оволодіння новими технологіями і поглиблення знань</p>
        </div>
      </div>
      <div className='pl-16 w-[55%]'>
        <p className='text-6xl mb-2'>КОМУ БУДЕ КОРИСНО</p>
        <div className='flex justify-end text-6xl border-b-[12px] border-regal-yellow mb-12'/>
        <div className='w-2/3 text-lg'>
          <p className='pb-4'>{testUsefulInformationBlock1}</p>
          <p>{testUsefulInformationBlock2}</p>
        </div>
      </div>
    </div>
  )
    ;
};

export default UsefulInformationBlock;