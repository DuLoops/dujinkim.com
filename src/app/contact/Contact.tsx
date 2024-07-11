"use client"
import React from 'react'
import {useState} from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';
import Email from './Email';
import Social from './Social';
import DujinLogo from '@/data/DujinLogo';
import Link from 'next/link';
export default function Contact() {
  return (
    <div className='w-11/12 m-auto flex flex-col gap-2 items-center '>
      <Email />
      <Link href='mailto:dujink2@gmail.com' className='underline'>Email: dujink2@gmail.com</Link>
      <Social />
      <div className='w-3/5 m-auto'>
        
      <DujinLogo color="#99F6E4" />
      </div>
    </div>
  )
}
