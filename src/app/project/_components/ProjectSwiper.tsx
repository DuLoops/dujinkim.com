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

        className='w-[98%] my-6 h-[250px] md:h-[400px] text-center'
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      breakpoints={{
        0: { 
          slidesPerView: 1
        },
        1024: { 
          slidesPerView: 3
        }
      }}      navigation
      pagination={{ clickable: true,  }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay: 500, disableOnInteraction: false, pauseOnMouseEnter: false, stopOnLastSlide: true}}
      loop={true}
      style={{padding: '0 3rem'}}
        >
         {projectData.slice(0,3).map((project, i) => (
           <SwiperSlide key={i}>
                <div className='border border-teal-200  flex flex-col h-full justify-around p-3 items-center'>
                    {/* <h1 className='text-4xl font-ma font-light text-neutral-500'>{project.title}</h1> */}
                    <Image src={project.images[0]} alt={project.title} className='w-full max-h-1/2'/>
                    <p className='text-neutral-300'>{project.desc}</p>
                </div>
            </SwiperSlide>
        ))}
        <SwiperSlide className='flex flex-col h-full justify-center '>
            <Button ><a href='/projects'>View More</a></Button>
        </SwiperSlide>

        </Swiper>

  )
}
