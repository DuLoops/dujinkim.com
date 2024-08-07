import React from 'react'
import { projectData } from '@/data/projects'
import Card_Project from './_components/Card_Project'
export default function page() {
  return (
    <div className='flex flex-col p-3 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:p-5 md:gap-5 lg:gap-6'>
      {projectData.map((project, index) => (<Card_Project cardData={project} key={index} />))}
    </div>
  )
}
