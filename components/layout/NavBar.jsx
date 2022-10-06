import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {IoIosCloseCircle} from 'react-icons/io'
import {SiAudacity} from 'react-icons/si'
import Link from 'next/link'
import NavBarProducts from './NavBarProducts'
import NavBarProductsResponsive from './NavBarProductsResponsive'
import { useSnipcart } from 'use-snipcart';
import NavBarSearch from './NavBarSearch'


const Navbar = ({navBar}) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const { cart = {} } = useSnipcart();
    
  return (
    <div className='w-full h-[80px] z-10 bg-black text-white fixed drop-shadow-lg'>
        <div className='flex justify-between items-center w-full h-full px-8 md:px-[72px]'>
          <div className='flex items-center'>
            <SiAudacity className='text-blue h-[32px] w-[32px]'/>
            <ul className='hidden md:flex'>
            <li className='px-3'><Link href="/"><a className='cursor-pointer'>Acceuil</a></Link></li>
            <li className='px-3'><NavBarProducts navBar={navBar} className='px-3'><Link href="/produits"><a className='cursor-pointer'>Produits</a></Link></NavBarProducts></li>
            <li className='px-3'><Link href="/magasins"><a className='cursor-pointer'>Magasins</a></Link></li>
            <li className='px-3'><Link href="/contact"><a className='cursor-pointer'>Contact</a></Link></li>
            </ul>
          </div>
          <div className='hidden md:flex pr-4'>
            <NavBarSearch/>  
            <div>  
              <button className="snipcart-checkout flex items-center">
                <HiShoppingCart className='text-grey h-[25px] w-[25px]'/>
                <span>
                  {cart.subtotal?.toFixed(2)}€
                </span>
              </button>
            </div>
          </div>
          <div className='md:hidden mr-4' >
              {!nav ? 
              <div className='flex items-center'>
                <button className="snipcart-checkout mr-2">
                  <HiShoppingCart className='text-grey h-[25px] w-[25px]'/>
                </button>
                <button className='ml-2' onClick={handleClick}>
                  <GiHamburgerMenu className='text-grey h-[25px] w-[25px]' />
                </button> 
              </div> : 
              <button onClick={handleClick}> <IoIosCloseCircle className='text-grey h-[25px] w-[25px]'/> </button>}
            
          </div>
        </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-black w-full px-8 h-screen md:hidden'}>
          <li className='p-3'><Link href="/"><a className='cursor-pointer text-lg font-semibold hover:text-blue'>Acceuil</a></Link></li>
          <hr />
          <li className='p-3'><NavBarProductsResponsive navBar={navBar}><Link href="/produits"></Link></NavBarProductsResponsive></li>
          <hr />
          <li className='p-3'><Link href="/magasins"><a className='cursor-pointer text-lg font-semibold hover:text-blue'>Magasins</a></Link></li>
          <hr />
          <li className='p-3'><Link href="/contact"><a className='cursor-pointer text-lg font-semibold hover:text-blue'>Contact</a></Link></li>
      </ul>
    </div>
  );
};

export default Navbar;

