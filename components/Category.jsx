
import {ImHeadphones} from 'react-icons/im'
 import {BsSpeakerFill} from 'react-icons/bs'
 import {TbHeadphonesOff} from 'react-icons/tb'
 import Link from 'next/link';

const Category = () => {
    return (
        <div className='px-8 md:px-[72px] grid overflow-hidden grid-cols-3 grid-rows-1 gap-0 w-full bg-white'>
            <Link href='/categories/casques'>
                <a className="box col-start-1 flex flex-col items-center justify-center py-[50px] bg-white hover:bg-blue text-black hover:text-white cursor-pointer">
                <p className='mb-[10px]'> Casques </p> 
                <ImHeadphones size={30} className='mt-[10px]'/>
                </a> 
            </Link>
            <div className="box col-start-2 flex flex-col items-center justify-center py-[50px] bg-white hover:bg-blue text-black hover:text-white cursor-pointer">
                <p className='mb-[10px]'> Ecouteurs </p> 
                <TbHeadphonesOff size={30} className='mt-[10px]'/>
            </div>
            <div className="box col-start-3 flex flex-col items-center justify-center py-[50px] bg-white hover:bg-blue text-black hover:text-white cursor-pointer">
                <p className='mb-[10px]'> Enceintes </p> 
                <BsSpeakerFill size={30} className='mt-[10px]'/>
            </div>
        </div>
    );
};

export default Category;