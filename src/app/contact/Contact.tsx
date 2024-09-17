"use client"
import React from 'react'
import { useState } from 'react'
import Email from './Email';
import Social from './Social';
import DujinLogo from '@/data/DujinLogo';

export default function Contact() {
  return (
    <div className='w-full md:w-5/6 lg:w-3/4 m-auto'>
      <h2 className='text-center text-5xl font-ma font-light text-neutral-500 mb-10 '>CONTACT</h2>
    <div className='w-11/12 m-auto flex flex-col gap-10 items-center lg:grid grid-cols-[39%,61%] grid-rows-auto mb-[100px]'>
      <p className='hidden lg:block text-center text-xl'>Connect with <span className='text-teal-200'>Dujin</span> Kim!</p>
      <Social />
      <div className='w-full flex flex-col items-center col-start-2 row-start-2  h-full relative'>
        <Email />
      </div>
      <div className='w-3/5 m-auto col-start-1 '>
        <DujinLogo color="#99F6E4" />
      </div>
    </div>
    </div>
  )
}
