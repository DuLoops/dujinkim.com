import Link from 'next/link';
import React from 'react';
import SideSheetNav from './SideSheetNav';
import DesktopNav from './DesktopNav';

const ProjectHeaderNav = () => {
    return (
        <nav className='grid grid-cols-3 w-screen p-1 bg-neutral-800 text-xl lg:px-10 md:fixed top-0 z-50 border-b border-neutral-700'>
            <Link href={'/project'} className='col-start-1 my-auto ml-1 text-neutral-100 color-white fill-white'>
                <span className='text-blue-400'>Project</span> <span className='text-neutral-400'>| DuJin</span>
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

export default ProjectHeaderNav;
