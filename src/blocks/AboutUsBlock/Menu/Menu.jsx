import {navigationName} from "../../../constants";
import Polygon from '../../../assets/icons/Polygon 7.png'
import ScrollTo from "react-scroll-into-view";
const Menu = () => {

  return (
    <div className='pl-[2%] h-28 pr-[7%] border-b-2 border-regal-yellow border-opacity-25'>
    <header className='flex justify-between font-medium items-center text-white text-xl mr-'>
      <span className='font-change text-2xl text-regal-yellow font-bold'>BuildTech Pro</span>
      <div className='flex items-center h-28'>
        {navigationName.map((item) =>
          <ScrollTo className='h-full' key={item.id} selector={`#${item.name}`}>
            <button
                    className='flex items-center gap-2 mx-6 h-full hover:border-b-2 border-regal-yellow'>
              {item.value}
            </button>
          </ScrollTo>
            )}
      </div>
      <div className='flex gap-6'>
        <div className='flex items-center gap-2'>
          <span>ua</span>
          <img className='w-4 h-3' src={Polygon} alt=''/>
        </div>
        <button className='border-2 px-4 h-14'>Мій кабінет</button>
      </div>
    </header>
    </div>
  );
};

export default Menu;