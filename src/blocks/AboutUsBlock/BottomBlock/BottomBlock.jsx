import verified from '../../../assets/icons/verified_FILL1_wght300_GRAD0_opsz48 1.png'
import format from '../../../assets/icons/format_list_numbered_FILL0_wght300_GRAD0_opsz48 1.png'
import noteAlt from '../../../assets/icons/note_alt_FILL1_wght300_GRAD0_opsz48 1.png'
import note from '../../../assets/icons/note_FILL1_wght300_GRAD0_opsz48 1.png'
import {textAboutUsBlockBottom} from "../../../constants";

const BottomBlock = () => {
  return (
    <div className='w-4/5 flex shadow relative left-40 bottom-20 h-96 2xl:left-52 '>
      <div className='grid grid-cols-2 w-2/5 bg-white'>
        <div className='flex flex-col justify-center items-center gap-1 2xl:gap-2'>
          <img src={verified} alt='логотип'/>
          <p className='text-lg text-regal-black'>Експертний матеріал</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 2xl:gap-2'>
          <img src={format} alt='логотип'/>
          <p className='text-lg text-regal-black'>Чіткі алгоритми</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 2xl:gap-2'>
          <img src={noteAlt} alt='логотип'/>
          <p className='text-lg text-regal-black'>Поради та лайфхаки</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 2xl:gap-2'>
          <img src={note} alt='логотип'/>
          <p className='text-lg text-regal-black'>Актуальні нововведення</p>
        </div>
      </div>
      <div className='bg-regal-yellow w-3/5 pl-20'>
        <div className='flex items-center h-20 border-b-[3px] border-regal-black'>
          <p className='font-change text-2xl font-bold text-regal-black'>BuildTech Pro</p>
        </div>
        <p className='text-lg pr-20 pt-5 text-regal-black 2xl:pt-10'>{textAboutUsBlockBottom}</p>
      </div>
    </div>
  );
};

export default BottomBlock;