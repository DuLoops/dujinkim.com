import React from 'react'
import ProjectSwiper from './ProjectSwiper'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
export default function LandingProject() {
  return (
    <div className='flex flex-col items-center py-20 bg-neutral-900'>
      <h1 className='text-center text-5xl font-ma font-light text-neutral-500 my-[100px]'>PROJECTS</h1>
      <div className='w-full flex flex-col items-center gap-12'>
      <ProjectSwiper />
      <Button size='lg'><Link href={'/project'}>View All</Link></Button>
      </div>
    </div>
  )
}
