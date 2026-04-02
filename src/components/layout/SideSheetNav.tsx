"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AiOutlineMenu } from 'react-icons/ai'
import { menuItems } from '@/data/menuItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SideSheetNavProps {
    pathname: string;
    getRouteStyle: (pathname: string, itemPath: string, isMobile?: boolean) => string;
}

export default function SideSheetNav() {
    const pathname = usePathname()
    const [open, setOpen] = React.useState(false)

    const getRouteStyle = (pathname: string, itemPath: string) => {
        if (pathname === itemPath) return 'text-white underline'
        if (pathname.startsWith(`${itemPath}/`)) return 'text-white text-5xl'
        return 'text-white'
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
                <AiOutlineMenu className='size-7 fill-white' />
            </SheetTrigger>
            <SheetContent className='bg-orange-500'>
                <ol className='flex flex-col gap-20 mt-32 text-4xl font-semibold pl-6'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.link}
                                onClick={() => setOpen(false)}
                                className={`${getRouteStyle(pathname, item.link)} `}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </SheetContent>
        </Sheet>
    )
}
