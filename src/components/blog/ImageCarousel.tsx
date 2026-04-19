"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export interface CarouselImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function CarouselImage({ src, alt, caption }: CarouselImageProps) {
  return (
    <figure className="flex flex-col items-center w-full h-full group !m-0">
      <div className="relative w-full flex justify-center h-48 xl:h-64 !mb-0 px-2 lg:px-4">
        <Image 
          src={src} 
          alt={alt} 
          width={800} 
          height={600} 
          sizes="(max-width: 768px) 100vw, 400px"
          className="rounded-xl object-contain h-full w-full border border-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.02] !m-0" 
        />
      </div>
      {caption && (
        <figcaption className="!mt-2 text-sm text-neutral-400 text-center italic h-10 flex items-center justify-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function ImageCarousel({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children).filter(Boolean);
  
  if (childrenArray.length === 0) return null;

  return (
    <div className="my-12 w-full relative">
      <Swiper
        className={'w-full pb-12 pt-2 px-10 text-center'}
        spaceBetween={20}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: Math.min(3, childrenArray.length) },
        }}
        navigation
        pagination={{ clickable: true }}
        style={{
          '--swiper-navigation-size': '25px',
          '--swiper-navigation-sides-offset': '0px',
          '--swiper-navigation-color': '#F97316',
          '--swiper-pagination-color': '#F97316',
          '--swiper-pagination-bullet-inactive-color': '#fff',
          '--swiper-pagination-bottom': '0px',
        } as React.CSSProperties}
      >
        {childrenArray.map((child, i) => (
          <SwiperSlide key={i} className="flex flex-col items-center h-full">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
