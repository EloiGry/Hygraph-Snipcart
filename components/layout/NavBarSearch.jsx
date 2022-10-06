import { Fragment, useState, useCallback } from 'react';
import { SEARCH } from '../../queries/search';
import { useLazyQuery } from "@apollo/client";
import { IoIosCloseCircle } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import _ from 'lodash';
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link';


const NavBarSearch = () => {
  const [searchIcon, setSearchIcon] = useState(false)
  const [getSearch, { data, error }] = useLazyQuery(SEARCH)
  const debouncer = useCallback(_.debounce(getSearch, 1000), []);
  const handleClick = () => {
    setSearchIcon(false)
    debouncer({ variables: { _search: undefined } })
  }
  const dataLength = data?.products.length > 0 || data?.categories.length > 0 || data?.brands.length > 0 
  if (error) return <div>error</div>;

  return (
    <div>
      {!searchIcon ? <button onClick={() => setSearchIcon(true)} className='px-3'> <BiSearchAlt2 className='text-grey h-[25px] w-[25px]' /> </button> :
        <div className='flex items-center'>
          <input
            type='text'
            className='rounded-full pl-2 pr-10 py-1 text-black'
            placeholder='Que cherchez-vous ?'
            onChange={e => debouncer({ variables: { _search: e.target.value } })}
          />
          <button onClick={handleClick} className='px-3'>
            <IoIosCloseCircle className='text-grey h-[25px] w-[25px]' />
          </button>
          <Menu as="div" className="relative inline-block text-left">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              show={searchIcon}
            >
              <Menu.Items className="absolute rounded flex flex-col right-6 top-2 mt-2 w-64 divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                <div className={` ${dataLength && data !== undefined ? 'bg-white px-1 py-1 flex flex-col w-full' : 'hidden'}`}>
                  {data?.products?.map(e => {
                    return (
                      <Menu.Item key={e.id}>
                        {({ active }) => (
                          <div className='flex justify-between px-2 py-2'>
                            <button
                              className={`${active ? ' text-blue' : 'text-black'} group flex flex-col w-full items-start text-sm`}
                            >
                              <Link href={`/products/${e.slug}`}><a>{e.name}</a></Link>
                              <span className='text-xs text-grey'> Produits </span>
                            </button>
                            <img src={e.image.url} width='40px' height='0px' />
                          </div>
                        )}
                      </Menu.Item>

                    )
                  })}
                  {data?.categories?.map(e => {
                    return (
                      <Menu.Item key={e.id}>
                        {({ active }) => (
                          <button
                            className={`${active ? ' text-blue' : 'text-black'} group flex flex-col w-full items-start px-2 py-2 text-sm`}
                          >
                            <Link href={`/categories/${e.slug}`}><a>{e.name}</a></Link>
                            <span className='text-xs text-grey'> Catégories</span>
                          </button>
                        )}
                      </Menu.Item>

                    )
                  })}
                  {data?.brands?.map(e => {
                    return (
                      <Menu.Item key={e.id}>
                        {({ active }) => (
                          <button
                            className={`${active ? ' text-blue' : 'text-black'} group flex flex-col w-full items-start px-2 py-2 text-sm`}
                          >
                            <Link href={`/brands/${e.slug}`}><a>{e.name}</a></Link>
                            <span className='text-xs text-grey'> Marques </span>
                          </button>
                        )}
                      </Menu.Item>

                    )
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      }
    </div>

  );
};

export default NavBarSearch;