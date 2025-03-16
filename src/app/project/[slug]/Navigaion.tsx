"use client"
import React from 'react'
import Link from 'next/link'
import { GrFormPrevious, GrFormNext, GrList } from "react-icons/gr";
import useViewportWidth from '@/hooks/useViewportWidth'

interface NavigaionProps {
  navData: {
    prev: string;
    next: string;
  }
}

export default function Navigaion({ navData }: NavigaionProps) {
  const { isMobile } = useViewportWidth()

  return (
    <>
      {isMobile ?
        <div className='flex flex-row p-2 items-center justify-around w-full text-lg  bg-neutral-700/95 absolute bottom-0'>
          <Link href={navData.prev}><GrFormPrevious className='h-10 w-10 rounded-full p-1 text-white bg-black border-2 border-orange-400' /></Link>
          <Link href='/project'>
            <GrList className='block lg:hidden h-10 w-16 rounded-full p-1  bg-black border-2 border-orange-400' />
            <p className='hidden lg:block rounded-full px-2  bg-black border-2 border-orange-400 hover:bg-orange-400'>View all</p>
          </Link>
          <Link href={navData.next}><GrFormNext className='h-10 w-10 rounded-full p-1 text-white bg-black border-2 border-orange-400' /></Link>
        </div>
        :
        <>
          <Link href={navData.prev}><GrFormPrevious className='fixed top-[200px] lg:top-1/2 md:left-[70px] lg:left-[100px] h-10 w-10 rounded-full p-1 text-white bg-black border-2 border-orange-500 hover:bg-orange-400 opacity-50 hover:opacity-100' /></Link>
          <Link href={navData.next}><GrFormNext className='fixed top-[200px] lg:top-1/2 md:right-[70px] lg:right-[100px] h-10 w-10 rounded-full p-1 text-white bg-black border-2 border-orange-400 hover:bg-orange-400 opacity-50 hover:opacity-100' /></Link>
        </>
      }
    </>
  )
}
