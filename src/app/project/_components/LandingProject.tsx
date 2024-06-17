import React from 'react'
import ProjectSwiper from './ProjectSwiper'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
export default function LandingProject() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-center text-5xl font-ma font-light text-neutral-500 '>PROJECTS</h1>
      <ProjectSwiper />
      <Button className='w-2/3 m-auto'><Link href={'/project'}>View More</Link></Button>
    </div>
  )
}
