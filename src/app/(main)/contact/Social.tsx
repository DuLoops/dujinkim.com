import Link from 'next/link';
import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';

export default function Social() {
  return (
    <div className='col-start-2 row-start-1 flex flex-row border border-white   w-full justify-around bg-neutral-700 py-2 rounded '>
        <Link className='rounded-full p-1  text-3xl p-2  hover:bg-blue-400' href='https://www.linkedin.com/in/dujin-kim/' target='_blank' >
          <BsLinkedin className='' />
        </Link>
        <Link className='rounded-full p-1 text-3xl p-2  hover:bg-gray-400' href='https://github.com/DuLoops' target='_blank' >
          <BsGithub className='' />
        </Link>
        <Link className='rounded-full p-1 text-3xl p-2  hover:bg-pink-400' href='https://www.instagram.com/dujinkim_/' target='_blank' >
          <BsInstagram className='' />
        </Link>
        <Link className='rounded-full p-1 text-3xl p-2  hover:bg-red-400' href='https://www.youtube.com/@DujinKim' target='_blank' >
          <BsYoutube className='' />
          </Link>
    </div>
  )
}
