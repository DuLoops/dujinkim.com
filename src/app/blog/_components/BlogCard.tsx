import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardImage,
  CardDate
} from "@/components/ui/card"
import { BlogPostType, BlogType, getBlogTypeColor, BlogTypeColors} from '@/data/blogPosts';
import { formatDate } from '@/utils/date';
import Link from 'next/link'
import { cn } from '@/utils/cn';
export default function BlogCard({postData}: {postData: BlogPostType}) {

  // console.log(BlogTypeColors[postData.tags[0]])

  const borderColorVariants = {
    [BlogType.Software] : 'border-teal-200 hover:border-teal-400 hover:shadow-md hover:shadow-teal-600 text-teal-200',
    [BlogType.Design]: 'border-rose-200 hover:border-rose-400 hover:shadow-md hover:shadow-rose-600 text-rose-200',
    [BlogType.Art]: 'border-yellow-200 hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-600 text-yellow-200',
    [BlogType.Study]: 'border-sky-200  hover:border-sky-400 hover:shadow-md hover:shadow-sky-600 text-sky-200'
  }

  const tagColors = {
    [BlogType.Software]: 'bg-teal-200 hover:shadow-md hover:shadow-teal-600',
    [BlogType.Design]: 'bg-rose-200',
    [BlogType.Art]: 'bg-yellow-200',
    [BlogType.Study]: 'bg-sky-200'
  }
  
  return (

     <Card  className={cn(borderColorVariants[postData.tags[0]], 'hover:scale-105 group')} > 
      <Link href={`/blog/${postData.link}`}>
      <CardImage src={postData.card.image[0]} alt={postData.title} height={200} width={200} className=''/>  
      <CardContent >
          <CardTitle className='group-hover:md:text-inherit'>{postData.title}</CardTitle>
          <CardDescription className='min-h-12'>{postData.description}</CardDescription>
          {/* <CardDate className='justify-self-start items-center'>{formatDate(postData.date)}</CardDate> */}
          <div className='flex gap-2 text-neutral-700 mt-1 '>
            {postData.tags.map((tag, i) => <div key={i} className={cn('px-2 py-1 rounded-lg text-sm font-ma text-black',tagColors[tag])}>{BlogType[tag]}</div>)}
          </div>
      </CardContent>
      </Link>
      </Card> 


  )
}
