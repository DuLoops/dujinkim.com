import React from 'react'
import ProjectSwiper from './ProjectSwiper'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
export default function LandingProject() {
  return (
    <div className='flex flex-col items-center gap-6 py-10 bg-neutral-900'>
      <h1 className='text-center text-5xl font-ma font-light text-neutral-500 '>PROJECTS</h1>
      <ProjectSwiper />
      <Button><Link href={'/project'}>View All</Link></Button>
    </div>
  )
}
