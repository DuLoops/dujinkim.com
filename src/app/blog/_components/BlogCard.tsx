import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,

  CardTitle,
  CardImage,
  CardDate
} from "@/components/ui/card"
import { BlogPostType } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/utils/date';


export default function BlogCard({postData}: {postData: BlogPostType}) {

    console.log(postData.card.image[0])
  return (

     <Card className='bg-white' > 
      <Link href={`/blog/${postData.link}`}>
      <CardImage src={postData.card.image[0]} alt={postData.title} height={200} width={200} />  
      <CardContent className='bg-neutral-700 h-30'>
          <CardTitle>{postData.title}</CardTitle>
          <CardDescription>{postData.description}</CardDescription>
          {/* <CardDate>{formatDate(postData.date)}</CardDate> */}
      </CardContent>
      </Link>
      </Card> 

  )
}
