import React from 'react'
import { LampContainer } from 'components/ui/lamp'
import Slider from 'components/gallery/Slider'
import Image from 'next/image'
export default function LandingGallery() {
    return (
        <div className='flex items-center flex-col'>
            <h1 className='text-center text-5xl font-ma font-light text-neutral-500 my-2 '>GALLERY</h1>
            <LampContainer>
                <Slider />
            </LampContainer>
            <button className="p-[2px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-neutral-400 rounded-lg" />
                <div className="flex flex-row px-3 gap-2 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    <p className='font-m'>VIEW</p>
                    <Image src="/images/dev/gallery.png" alt="gallery" width={30} height={10} className='w-10'/>
                </div>
            </button>
        </div>
    )
}
