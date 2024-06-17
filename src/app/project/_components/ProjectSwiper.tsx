"use client"
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { projectData } from '@/data/projects';
import { Button } from '@/components/ui/button';

export default function ProjectSwiper() {


  return (

    <Swiper
              // install Swiper modules
        className='w-screen swiper-navigation-red'
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true,  }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay: 500, disableOnInteraction: false, pauseOnMouseEnter: false, stopOnLastSlide: true}}
      loop={true}

        >
         {projectData.slice(0,3).map((project, i) => (
            <SwiperSlide key={i} className='my-4 w-full'>
                <div className='flex flex-col items-center my-2'>
                    {/* <h1 className='text-4xl font-ma font-light text-neutral-500'>{project.title}</h1> */}
                    <Image src={project.images[0]} alt={project.title} className='w-full max-h-1/2'/>
                    <p className='text-neutral-300'>{project.desc}</p>
                </div>
            </SwiperSlide>
        ))}
        <SwiperSlide className='flex justify-center items-center'>
            <Button className='my-auto mx-auto'><a href='/projects'>View More</a></Button>
        </SwiperSlide>
        </Swiper>

  )
}
