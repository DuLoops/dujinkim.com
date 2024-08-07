"use client"
import Link from 'next/link';
import React  from 'react';
import { menuItems } from '../../data/menuItems';
import SideSheetNav from './SideSheetNav';
import { usePathname } from 'next/navigation'


const HeaderNav = () => {

    const pathname = usePathname()
    return (
        <nav className='grid grid-cols-3 w-screen p-1 bg-neutral-700 shadow-md shadow-neutral-800 text-xl lg:px-10 md:fixed top-0 z-50 '>
            <Link href={'/'} className='col-start-1 my-auto ml-1 text-neutral-100 color-white fill-white '>
                <span className='text-teal-300'>DuJin</span> Kim
                {/* <Image src='/images/dev/dujinlogo.svg' alt='logo' width={130} height={130} className='fill-blue-100' /> */}
                {/* <Image src='/images/dev/logo.png' alt='logo' width={30} height={30} /> */}
                </Link>
            {/* <button className='col-start-3 row-start-1 flex justify-end items-center lg:hidden' onClick={() => setSideMenuOpen(true)}>
                <AiOutlineMenu className='size-7' />
            </button>
            <AnimatePresence>
                {isSideMenuOpen && (
                    <SideNav setSideMenuOpen={setSideMenuOpen} />
                )}
            </AnimatePresence> */}
            <div className='col-start-3 row-start-1 flex justify-end items-center lg:hidden'>
                <SideSheetNav />
            </div>
            <div className='col-start-3 row-start-1 hidden lg:block '>
                <ol className='flex flex-row gap-3 justify-end text-white'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className={`${pathname == item.link ? 'text-teal-200 hover:underline' : 'hover:underline'}`}>{item.name}</Link>
                        </li>
                    ))}
                </ol>
            </div>

        </nav>
    );
};

export default HeaderNav;
