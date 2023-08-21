import logo from '../../../assets/icons/Vector (1).png'
import chat from '../../../assets/icons/chat_FILL1_wght300_GRAD0_opsz48 1.png'
import {footerText, navigationName} from "../../../constants";
import ScrollTo from "react-scroll-into-view";

const Footer = () => {
  return (
    <div className='relative bg-regal-black text-white mt-20 py-[3%]'>
      <div className='flex w-3/5 ml-[10%] justify-between'>
        <div className='w-1/2'>
          <div className='flex items-center mb-2'>
            <p className='font-change mr-4 font-bold'>BuildTech Pro </p>
            <img className='w-[13px] h-[13px] mr-1' src={logo} alt='логотип'/>
            <span>2023</span>
          </div>
          <span className='text-sm font-light'>{footerText} <a className='border-b' href='mailto: team@buildtechpro.com.ua'>team@buildtechpro.com.ua</a></span>
        </div>
        <div className='flex justify-between w-1/3 text-lg'>
          <div className='flex flex-col gap-2'>
            {navigationName.map((item) =>
              <ScrollTo className='h-full' key={item.id} selector={`#${item.name}`}>
                <button
                  className='flex items-center gap-2 mx-6 h-full'>
                  {item.value}
                </button>
              </ScrollTo>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <p>Telegram</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
      <img className='absolute right-6 bottom-12 w-[38px] h-[38px]' src={chat} alt='логотип'/>
    </div>
  );
};

export default Footer;