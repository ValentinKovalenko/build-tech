const Header = ({title, linkName}) => {
  return (
    <div className='flex justify-between text-regal-black w-full py-4 pb-20'>
      <div className='flex justify-end pl-[10%] text-6xl border-b-[12px] border-regal-yellow'>
        <span className='my-1'>{title}</span>
      </div>
      {
        linkName?.length &&
        <div className='flex items-center text-xl w-1/5'>
          <span className='border-black border-b-2 cursor-pointer ml-20'>{linkName}</span>
        </div>
      }
    </div>
  );
};

export default Header;