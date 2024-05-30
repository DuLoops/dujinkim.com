"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { menuItems } from '../../data/menuItems';
import { AiOutlineMenu } from "react-icons/ai";
import SideNav from './SideNav';
import { AnimatePresence } from 'framer-motion';
import SideSheetNav from './SideSheetNav';


const HeaderNav = () => {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);
    return (
        <nav className='grid grid-cols-3 w-screen p-1 bg-neutral-700 shadow-md shadow-neutral-800 text-xl lg:px-5'>
            <Link href={'/'} className='col-start-1 my-auto ml-1 text-neutral-100 color-white fill-white'>
                <span className='text-teal-200'>DuJin</span> Kim
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
            <div className='col-start-3 row-start-1 hidden lg:block'>
                <ol className='flex flex-row gap-3 justify-end '>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className=' hover:underline '>{item.name}</Link>
                        </li>
                    ))}
                </ol>
            </div>

        </nav>
    );
};

export default HeaderNav;
