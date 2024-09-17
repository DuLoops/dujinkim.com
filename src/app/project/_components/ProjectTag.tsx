import React from 'react'
import { cn } from '@/utils/cn'
interface ProjectTagProps {
    tech: {name: string, color: string, bg: string}[]
}

export default function ProjectTag({tech}: ProjectTagProps) {
  return (
    <div className='flex flex-row text-black gap-2' >
      {tech.map((item: any, i: any) => <div key={i} className={cn(item.bg, 'rounded px-2 py-1 text-md')}>{item.name}</div>)}
    </div>
  )
}
