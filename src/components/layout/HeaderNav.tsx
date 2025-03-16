"use client"
import Link from 'next/link';
import React from 'react';
import { menuItems } from '../../data/menuItems';
import SideSheetNav from './SideSheetNav';
import { usePathname } from 'next/navigation'


const HeaderNav = () => {
    const pathname = usePathname()
    const getRouteStyle = (pathname: string, itemPath: string, isMobile = false) => {
        if (pathname === itemPath) return isMobile ? 'text-white underline' : 'text-orange-400'
        if (pathname.startsWith(`${itemPath}/`)) return isMobile ? 'text-white text-5xl' : 'text-orange-300'
        return isMobile ? 'text-white' : ''
    }

    return (
        <nav className='grid grid-cols-3 w-screen p-1 bg-neutral-700 text-xl lg:px-10 md:fixed top-0 z-50'>
            <Link href={'/'} className='col-start-1 my-auto ml-1 text-neutral-100 color-white fill-white'>
                <span className='text-orange-400'>DuJin</span> Kim
            </Link>
            
            <div className='col-start-3 row-start-1 flex justify-end items-center lg:hidden'>
                <SideSheetNav pathname={pathname} getRouteStyle={getRouteStyle} />
            </div>
            
            <div className='col-start-3 row-start-1 hidden lg:block'>
                <ol className='flex flex-row gap-3 justify-end text-white'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link 
                                href={item.link} 
                                className={`${getRouteStyle(pathname, item.link)} hover:underline`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default HeaderNav;
