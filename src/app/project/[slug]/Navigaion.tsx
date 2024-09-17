import React from 'react'
import Link from 'next/link'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

interface NavigaionProps {
    navData: {
        prev: string;
        next: string;
    }
}

export default function Navigaion({navData}: NavigaionProps) {

  return (
    <div className='flex flex-row h-20 items-center justify-around w-full text-lg'>
      <Link href={navData.prev}><GrFormPrevious className='h-10 w-10 rounded-full p-1 text-white bg-black border-2 border-teal-200'/></Link>
    <Link href='/project'><p className='text-white'>View more</p></Link>
      <Link href={navData.next}><GrFormNext className='h-10 w-10 rounded-full p-1 text-white bg-black border-2 border-teal-200'/></Link>
    </div>
  )
}
