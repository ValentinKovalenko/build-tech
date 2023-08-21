import {blockBlog} from "../../constants";
import Footer from "./Footer/Footer";
import wiring from '../../assets/images/wiring.png'
import ventilation from '../../assets/images/ventilation.png'
import plumbing from '../../assets/images/plumbing.png'

const BlogBlock = () => {
  return (
    <div className='mt-32'>
      <div className='flex justify-between text-regal-black w-full py-4 pb-20'>
        <div className='flex justify-end w-[21%] text-6xl border-b-[12px] border-regal-yellow'>
          <span className='my-1'>БЛОГ</span>
        </div>
      </div>
      <div className='flex flex-row justify-between w-full gap-10'>
        {blockBlog.map((blog) =>
          <div className={blog.style} key={blog.id}>
            <img className='h-[55%] w-full object-cover' src={blog.image === 'wiring' ? wiring : blog.image === 'ventilation' ? ventilation : plumbing} alt='фото'/>
            <div className={blog.styleTitle}>
              <p className='text-end text-[28px] border-b-2 border-regal-yellow py-2 '>{blog.title}</p>
            </div>
            <p className='pt-4 px-8'>{blog.value}</p>
          </div>
        )}
      </div>
      <div className='flex justify-center'>
        <div className='mt-20 w-1/5 border-b-[3px] border-regal-black opacity-20'/>
      </div>
      <Footer/>
    </div>
  );
};

export default BlogBlock;