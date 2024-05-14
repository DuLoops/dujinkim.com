import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card"
import { BlogPostType } from '@/types/BlogPostType';
import Image from 'next/image';
import Link from 'next/link';
export default function BlogCard({postData}: {postData: BlogPostType}) {

 
  return (

     <Card className='shadow-md shadow-teal-900  border border-2  border-neutral-800' > 
      <Link href={`/blog/${postData.link}`}>
      <CardHeader className='bg-teal-300 mb-2 rounded-t shadow-white'>
        <CardTitle className='text-xl font-m'>{postData.title}</CardTitle>
        <CardDescription className='italic'>{postData.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex justify-center items-center'>
        <Image src={postData.card.data} alt={postData.title} width={300} height={300} />
      </CardContent>
      </Link>
      </Card> 

  )
}
