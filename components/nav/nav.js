import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import { ChevronDownIcon,XIcon } from '@heroicons/react/solid'
import { navLinks } from '../../utils/vars'
import CustomLink from '../link/customLink'
// const navigation = navLinks.guest;

const navigation = navLinks.guest;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// const resources = [
//   {
//     name: 'Help Center',
//     description: 'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//   },
//   { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
//   { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
//   { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
// ]
export default function Example() {
  return (
    <Popover className="relative bg-white border-b-2 border-gray-100">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10  mx-auto max-w-7xl">
        <div>
          <Link href="/" className="flex">
            <a>
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10 lg:h-10"
                src="data:image/png;base64,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"
                alt=""
              />
            </a>
          </Link>
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
                      <Popover.Panel className="absolute z-30 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {nav.subNav.map((item) => (
                              <Link href={item.href} key={item.name}>
                                <a
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
              <CustomLink link={nav} key={nav.name}>
                  {/* <a className="text-base font-medium text-gray-500 hover:text-gray-900"> */}
                    {/* {nav.name} */}
                {/* </a> */}
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
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {navigation.map((nav) => (
                    !!nav.subNav?
                    nav.subNav.map((item)=>(
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))
                    :
                    ''
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {navigation.map((item) => (
                  !item.subNav?
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  :''
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="/auth"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="/auth" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
