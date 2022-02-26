import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { navLinks } from '../../utils/vars'
import CustomLink from '../link/customLink'
// const navigation = navLinks.guest;

const navigation = navLinks.guest;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <Popover.Group as="nav" className="flex space-x-10">
          {
            navigation.map((nav)=>(
              !!nav.subNav? 
              <Popover className="relative" key={nav.name}>
                {({open})=>(
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span>{nav.name}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {nav.subNav.map((item) => (
                              <Link href={item.href}>
                                <a
                                    key={item.name}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              :
            //   <Link href={nav.href}>
            //     <a className="text-base font-medium text-gray-500 hover:text-gray-900" key={nav.name}>
            //         {nav.name}
            //     </a>
            //   </Link>
              <CustomLink link={nav}>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900" key={nav.name}>
                    {nav.name}
                </a>
              </CustomLink>
            ))
          }
        </Popover.Group>
          
          <div className="flex items-center md:ml-12">
              <Link href='/auth'>
                <a
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                Join us
                </a>
              </Link>
          </div>
        </div>
      </div>
    </Popover>
  )
}
