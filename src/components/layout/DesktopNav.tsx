"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from '../../data/menuItems';

const DesktopNav = () => {
    const pathname = usePathname();

    const getRouteStyle = (pathname: string, itemPath: string) => {
        if (pathname === itemPath) return 'text-orange-400';
        if (pathname.startsWith(`${itemPath}/`)) return 'text-orange-300';
        return '';
    };

    return (
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
    );
};

export default DesktopNav;
