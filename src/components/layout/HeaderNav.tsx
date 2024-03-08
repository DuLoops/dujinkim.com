"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { menuItems } from '../../data/menuItems';
import { AiOutlineMenu } from "react-icons/ai";
import SideNav from './SideNav';
import { AnimatePresence } from 'framer-motion';


const HeaderNav = () => {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);
    return (
        <nav className='grid grid-cols-3 w-screen p-2 bg-teal-600 shadow-lg shadow-teal-900'>
            <Link href={'/'} className='col-start-2 flex justify-center'><Image src='/images/dev/logo.png' alt='logo' width={40} height={40} /></Link>
            <button className='col-start-3 row-start-1 flex justify-end items-center lg:hidden' onClick={() => setSideMenuOpen(true)}>
                <AiOutlineMenu className='size-7' />
            </button>
            <AnimatePresence>
                {isSideMenuOpen && (
                    <SideNav setSideMenuOpen={setSideMenuOpen} />
                )}
            </AnimatePresence>
            <div className='col-start-3 row-start-1 hidden lg:block'>
                <ol className='flex flex-row gap-3 justify-end pr-3'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className='text-xl hover:underline '>{item.name}</Link>
                        </li>
                    ))}
                </ol>
            </div>

        </nav>
    );
};

export default HeaderNav;
