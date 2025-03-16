import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardImage,
  CardDate
} from "@/components/ui/card"
import { cn } from '@/utils/cn';
import Link from 'next/link';


export default function Card_Project({ cardData }: { cardData: any }) {
return (
    <Card className={'lg:hover:scale-105 group border-none shadow-neutral-700 shadow-sm'} >
      <Link href={`/project/${cardData.id}`}>
        <CardImage src={cardData.images[0]} alt={cardData.title} height={200} width={200} className='h-[240px]  bg-white' />
        <CardContent >
          <CardTitle className=' text-lg md:text-xl group-hover:underline'>{cardData.title}</CardTitle>
          {/* <CardDescription className='min-h-8 text-sm md:text-md'>{postData.description}</CardDescription> */}
          {/* <CardDate className='justify-self-start items-center'>{formatDate(postData.date)}</CardDate> */}
          <div className='flex gap-2 text-black mt-1 '>
            {cardData.tech.map((tech: any, i: any) => <div key={i} className={cn('px-2 py-1 rounded-lg text-sm  text-black', tech.bg)}>{tech.name}</div>)}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
