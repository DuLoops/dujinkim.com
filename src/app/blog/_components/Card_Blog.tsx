import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardImage,
  CardDate
} from "@/components/ui/card"
import { BlogPostType, BlogType, tagColors, borderColorVariants} from '@/data/blogPosts';
import { formatDate } from '@/utils/date';
import Link from 'next/link'
import { cn } from '@/utils/cn';
export default function Card_Blog({postData}: {postData: BlogPostType}) {

  
  return (

     <Card  className={cn(borderColorVariants[postData.tags[0]], 'hover:scale-105 group')} > 
      <Link href={`/blog/${postData.link}`}>
      <CardImage src={postData.card.image[0]} alt={postData.title} height={200} width={200} className=''/>  
      <CardContent >
          <CardTitle className='group-hover:md:text-inherit text-xl md:text-xl'>{postData.title}</CardTitle>
          <CardDescription className='min-h-8 text-md md:text-md'>{postData.description}</CardDescription>
          {/* <CardDate className='justify-self-start items-center'>{formatDate(postData.date)}</CardDate> */}
          <div className='flex gap-2 text-black mt-1 '>
            {postData.tags.map((tag, i) => <div key={i} className={cn('px-2 py-1 rounded-lg text-sm font-ma text-black',tagColors[tag])}>{BlogType[tag]}</div>)}
          </div>
      </CardContent>
      </Link>
      </Card> 


  )
}
