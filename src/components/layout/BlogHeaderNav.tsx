"use client";

import Link from 'next/link';
import React from 'react';
import SideSheetNav from './SideSheetNav';
import DesktopNav from './DesktopNav';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const BlogHeaderNav = () => {
    const scrollDirection = useScrollDirection();

    return (
        <nav
            className={`grid grid-cols-3 w-screen p-1 bg-neutral-900 text-xl lg:px-10 sticky top-0 z-50 border-b border-neutral-800 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <Link href={'/blog'} className='col-start-1 my-auto ml-1 text-neutral-100 color-white fill-white'>
                <span className='text-emerald-400'>Blog</span> <span className='text-neutral-400'>| DuJin</span>
            </Link>

            <div className='col-start-3 row-start-1 flex justify-end items-center lg:hidden'>
                <SideSheetNav />
            </div>

            <div className='col-start-3 row-start-1 hidden lg:block'>
                <DesktopNav />
            </div>
        </nav>
    );
};

export default BlogHeaderNav;
