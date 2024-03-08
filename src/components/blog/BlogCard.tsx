import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card"
import { BlogPostData } from 'types/blogPostData';
import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';
export default function BlogCard({postData}: {postData: DocumentData}) {


  

  return (
    <div>
     <Card className='shadow-md shadow-teal-200'> 
      <CardHeader className='bg-neutral-300 mb-2 m-1 rounded-t'>
        <CardTitle>{postData.title}</CardTitle>
        <CardDescription>{postData.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex justify-center items-center'>
        <Image src={postData.card.data} alt={postData.title} width={300} height={300} />
      </CardContent>
      </Card> 
    </div>
  )
}
