import Link from "next/link";
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {IoIosArrowDropright} from 'react-icons/io';
import FooterResponsive from "./FooterResponsive";


const Footer = ({navBar}) => {
    return (
        <>
        <div className="hidden md:flex">
            <div className='px-[72px] py-[20px] flex items-start justify-between gap-0 w-full bg-black'>
                <div className='flex flex-col'>
                    <h5 className='uppercase pb-[10px] text-center'> Shop </h5>
                    {navBar.categories.map(e => {
                        return (
                            <Link href={`/categories/${e.slug}`} key={e.id}><a className='hover:text-blue'>{e.name}</a></Link>
                        )
                    })}
                </div>
                <div className='flex flex-col'>
                    <h5 className='uppercase pb-[10px] text-center'> Réseaux sociaux </h5>
                    <div className="flex items-center justify-center">
                        <Link href='/' ><a className='p-2 hover:text-blue'><AiFillFacebook size={25} /></a></Link>
                        <Link href='/'><a className='p-2 hover:text-blue'><AiFillLinkedin size={25}/></a></Link>
                        <Link href='/'><a className='p-2 hover:text-blue'><AiFillInstagram size={25}/></a></Link>
                        <Link href='/'><a className='p-2 hover:text-blue'><AiOutlineTwitter size={25}/></a></Link>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h5 className='uppercase pb-[10px] text-center'> Contact </h5>
                    <Link href='/contact'><a className='p-2 hover:text-blue flex'> <p className="px-1">Nous Contacter</p>  <IoIosArrowDropright size={25}/></a></Link>
                </div>
            </div>
        </div>
        <FooterResponsive navBar={navBar}/>
        </>
    );
};

export default Footer;