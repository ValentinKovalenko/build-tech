import Menu from "./Menu";
import Mask from '../../assets/images/Mask group - 2023-07-29T084407 1.png'
import yellowLine from '../../assets/icons/Line 12.png'
import {textAboutUsBlock, wiringBlock} from "../../constants";
import BottomBlock from "./BottomBlock";

const AboutUsBlock = () => {
  return (
    <div className='relative'>
      <div className='image'>
        <div className='block-color relative'>
          <Menu />
          <div className='flex mt-20 2xl:mt-40'>
            <div className='relative left-40 2xl:left-52 pt-10'>
              <p className='text-white text-[68px] 2xl:text-[88px]'>НАВЧАЄМО МИСТЕЦТВУ</p>
              <p className='text-regal-yellow text-7xl 2xl:text-8xl'>БУДІВНИЦТВУ</p>
              <p className='text-white text-lg mt-8 w-1/2'>{textAboutUsBlock}</p>
              <button className='bg-regal-yellow mt-8 text-xl py-5 px-8 w-60 hover:opacity-80'>Записатись</button>
            </div>
            <div>
              <img className='max-w-[680px] h-auto 2xl:max-w-[800px]' src={Mask} alt=''/>
            </div>
          </div>
          <div className='absolute bottom-[150px] right-0 2xl:bottom-[200px]'>
            <div className='flex h-40 justify-between items-center w-[830px] 2xl:w-[1030px]'>
              <div>
                {wiringBlock.map((item) =>
                  <p key={item.id} className='flex m-6 gap-2 text-white'>
                    <img src={yellowLine} alt='пунктир'/>
                    <span className='text-lg font-change'>{item?.number}</span>
                    <span className='text-xl'>{item?.value}</span>
                  </p>)}
              </div>
              <div className='flex relative items-center text-xl pl-20 bg-regal-black w-2/3 h-32 2xl:h-28 2xl:w-3/4 2xl:text-2xl'>
                <span className='text-white'>Курс “Електропроводка PRO”</span>
                <div className='text-xl absolute top-0 end-24 text-regal-black bg-regal-yellow py-2 px-7 2xl:end-60'>New</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBlock />
    </div>
  );
};

export default AboutUsBlock;