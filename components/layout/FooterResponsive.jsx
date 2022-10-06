import { Disclosure } from '@headlessui/react';
import {BiChevronUp} from 'react-icons/bi';
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {IoIosArrowDropright} from 'react-icons/io';
import Link from 'next/link';

export default function FooterResponsive({navBar}) {
    return (
      <div className="w-full px-4 py-10 bg-black md:hidden">
        <div className="mx-auto w-full max-w-md p-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <h5 className='uppercase font-semibold'>Shop</h5>
                  <BiChevronUp
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col">
                    {navBar.categories.map(e => {
                        return (
                            <Link href={e.slug} key={e.id}><a className='hover:text-blue'>{e.name}</a></Link>
                        )
                    })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <h5 className='uppercase font-semibold'>Réseaux sociaux</h5>
                  <BiChevronUp
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="flex items-center justify-center">
                        <Link href='/' ><a className='p-2 hover:text-blue'><AiFillFacebook size={25} /></a></Link>
                        <Link href='/'><a className='p-2 hover:text-blue'><AiFillLinkedin size={25}/></a></Link>
                        <Link href='/'><a className='p-2 hover:text-blue'><AiFillInstagram size={25}/></a></Link>
                        <Link href='/'><a className='p-2 hover:text-blue'><AiOutlineTwitter size={25}/></a></Link>
                    </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <h5 className='uppercase font-semibold'>Contact</h5>
                  <BiChevronUp
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <Link href='/contact'><a className='p-2 hover:text-blue flex'> <p className="px-1">Nous Contacter</p>  <IoIosArrowDropright size={25}/></a></Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    )
  }