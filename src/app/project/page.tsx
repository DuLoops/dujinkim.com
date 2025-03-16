import React from 'react'
import { projectData } from '@/data/projects'
import Card_Project from './_components/Card_Project'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Portfolio | Dujin Kim',
  description: 'Showcase of full-stack development projects and software engineering work by Dujin Kim.',
  keywords: ['portfolio', 'software development', 'full stack', 'web development', 'projects', 'Dujin Kim'],
  openGraph: {
    title: 'Software Engineering Portfolio | Dujin Kim',
    description: 'Explore my full-stack development projects and technical work',
    images: [
      {
        url: '/images/dev/laptop.jpg', // Replace with your actual portfolio cover image
        width: 1200,
        height: 630,
        alt: 'Dujin Kim Portfolio Projects',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Development Portfolio | Dujin Kim',
    description: 'Software engineering projects and development work',
    images: [
      {
        url: '/images/dev/laptop.jpg', // Replace with your actual portfolio cover image
        width: 1200,
        height: 630,
        alt: 'Dujin Kim Portfolio Projects',
      }
    ],
  },
}

export default function page() {
  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-ma font-light text-neutral-500 mt-2 md:my-6'>Project Porfolio</h1>
      <div className='flex flex-col p-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:px-12 md:gap-4 lg:gap-6 mb-6'>
        {projectData.map((project, index) => (<Card_Project cardData={project} key={index} />))}
      </div>
    </div>
  )
}
