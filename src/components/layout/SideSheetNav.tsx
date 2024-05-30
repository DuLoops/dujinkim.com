import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AiOutlineMenu } from 'react-icons/ai'
import { menuItems } from '@/data/menuItems'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'

export default function SideSheetNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <AiOutlineMenu className='size-7 fill-neutral-200' />
            </SheetTrigger>
            <SheetContent className=' bg-teal-500'>
                <ol className='flex flex-col gap-20 mt-32 text-4xl font-semibold pl-6'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className=''>{item.name}</Link>
                        </li>
                    ))}
                </ol>
            </SheetContent>
        </Sheet>

    )
}
