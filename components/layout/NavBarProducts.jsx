import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { buildImage } from '../../lib/cloudinary'

export default function NavBarProducts({navBar}) {
    const [isShowing, setIsShowing] = useState(false)
  return (
    
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)} className="inline-flex w-full justify-center text-white">
            Produits
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          show={isShowing}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
        >
          <Menu.Items className="absolute rounded flex left-0 mt-2 w-100 origin-top-left divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 mx-10 flex flex-col">
              <h3 className='text-black font-semibold'> Catégories </h3>
              {navBar.categories.map(e => {
                return (
                <Menu.Item key={e.id}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? ' text-blue' : 'text-black'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <Link href={`/categories/${e.slug}`}><a>{e.name}</a></Link>
                    </button>
                  )}
                </Menu.Item>

                )
              })}
            </div>
            <div className="px-1 py-1 flex flex-col mr-10">
              <h3 className='text-black font-semibold'> Marques </h3>
              {navBar.brands.map(e => {
                return (
                <Menu.Item key={e.id}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? ' text-blue' : 'text-black'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <Link href={`/brands/${e.slug}`}><a>{e.name}</a></Link>
                    </button>
                  )}
                </Menu.Item>
                )
              })}
            </div>
              {navBar.images.map(e => {
                return (
                  <div className="px-1 py-1 mr-10 flex flex-col w-[200px]" key={e.id}>
                    
                      <img src={buildImage(e.image.public_id).toURL()} width='200px' alt=''/>
                    <Menu.Item>
                    {({ active }) => (
                      <button
                      className={`${
                        active ? ' text-blue' : 'text-black'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                         <Link href={e.link.href}><a>{e.link.label}</a></Link>
                        </button>
                    )}
                  </Menu.Item>
                </div>

                )
              })}
          </Menu.Items>
        </Transition>
      </Menu>
  )
}
