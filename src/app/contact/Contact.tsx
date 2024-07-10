"use client"
import React from 'react'
import {useState} from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';
import Email from './Email';
import Social from './Social';
import Image from 'next/image';
import DujinLogo from '@/data/DujinLogo';
export default function Contact() {
  return (
    <div className='w-11/12 m-auto'>
      <Email />
      {/* <Image src='/images/dev/dujinlogo.svg' alt={"Dujin's Logo"} width={200} height={200} className='fill-white' />  */}
      <div className='w-3/5 m-auto'>
        
      <DujinLogo color="#99F6E4" />
      </div>
    </div>
  )
}
