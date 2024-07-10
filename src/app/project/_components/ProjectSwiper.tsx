"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css'
import 'swiper/css/effect-cards'
import { projectData } from '@/data/projects';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ProjectSwiper() {


  return (

    <Swiper
      className={'w-[98%]  h-[300px] md:h-[400px] text-center'}
      spaceBetween={30}
      modules={[Navigation, Pagination]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3
        }
      }} navigation
      pagination={{ clickable: true }}
      scrollbar
      // draggable={true}

      autoplay={{ delay: 500, disableOnInteraction: false, pauseOnMouseEnter: false, stopOnLastSlide: true }}
      loop={true}
      style={{
        padding: '15px 2rem',
        '--swiper-navigation-size': '30px',
        '--swiper-navigation-sides-offset': '7px',
        '--swiper-navigation-color': '#99F6E4',
        '--swiper-pagination-color': '#2DD4BF',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-pagination-bottom': '-5px',
      }}
    >
      {projectData.map((project, i) => (
        <SwiperSlide key={i}>
          <div className='bg-neutral-800 rounded-xl flex flex-col h-full justify-around p-3 items-center  cursor-pointer'>
            {/* <h1 className='text-4xl font-ma font-light text-neutral-500'>{project.title}</h1> */}
            <Image src={project.images[0]} alt={project.title} className='w-full overflow-hidden' />
            <h3 className='text-white text-xl'>{project.desc}</h3>
          </div>
        </SwiperSlide>
      ))}


    </Swiper>

  )
}
