import Link from 'next/link';
import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';

export default function Social() {
  return (
    <div className='flex flex-row border border-white border-2 w-full justify-around py-2'>
        <Link className='rounded-full p-1  text-3xl p-2 bg-blue-200' href='https://www.linkedin.com/in/dujin-kim/' target='_blank' >
          <BsLinkedin className='' />
        </Link>

    </div>
  )
}
