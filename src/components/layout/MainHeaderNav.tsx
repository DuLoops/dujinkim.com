import Link from 'next/link';
import React from 'react';
import SideSheetNav from './SideSheetNav';
import DesktopNav from './DesktopNav';


const MainHeaderNav = () => {
    return (
        <nav className='grid grid-cols-3 w-screen p-1 bg-neutral-700 text-xl lg:px-10 md:sticky top-0 z-50'>
            <Link href={'/'} className='col-start-1 my-auto ml-1 text-neutral-100 color-white fill-white'>
                <span className='text-orange-400'>DuJin</span> Kim
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

export default MainHeaderNav;
