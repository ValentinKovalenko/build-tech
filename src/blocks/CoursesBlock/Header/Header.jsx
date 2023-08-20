
const Header = () => {
    return (
        <div className='flex justify-between text-regal-black w-full py-4 pb-20'>
          <div className='flex justify-end w-[21%] text-6xl border-b-[12px] border-regal-yellow'>
            <span className='my-1'>КУРСИ</span>
          </div>
          <div className='flex items-center text-xl w-1/5'>
            <span className='border-black border-b-2 cursor-pointer ml-20'>Дивитись всі</span>
          </div>
        </div>
    );
};

export default Header;