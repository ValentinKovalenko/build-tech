import Header from "./Header";
import CoursesCard from "../../components/CoursesCard";
import {coursesCard} from "../../constants";
import UsefulInformationBlock from "./UsefulInformationBlock";
import {forwardRef} from "react";


const CoursesBlock = () => {
  return (
    <div className='mt-8'>
      <Header/>
      <div className='flex flex-row justify-around w-full gap-10'>
        {coursesCard.map((res) => <CoursesCard key={res.id} res={res}/>)}
      </div>
      <div className='flex justify-center'>
        <div className='mt-20 w-1/5 border-b-[3px] border-regal-black opacity-20'/>
      </div>
      <UsefulInformationBlock/>
    </div>
  );
};

export default forwardRef (CoursesBlock);