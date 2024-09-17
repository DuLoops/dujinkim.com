import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { GrNext, GrPrevious} from "react-icons/gr";
import { cn } from '@/utils/cn';

interface GalleryLightboxProps {
    photos: any;
    selectedIndex: number;
    setSelectedIndex: any;
}



export default function GalleryLightbox({ photos, selectedIndex, setSelectedIndex }: GalleryLightboxProps) {
    const photo = photos[selectedIndex];
    console.log(photo)
    const photosLength = photos.length;
    return (
        <DialogContent className='w-screen h-screen bg-neutral-800 border-none flex flex-col justify-center '>
            <div className='text-center lg:h-4/5'>
                <Image src={photo.file} alt={photo.title} width={700} height={700} className='w-fullred m-auto lg:h-full object-contain'/>
                <h1 className='text-2xl text-white font-po my-2 '>{photo.title}</h1>
            </div>
                <button onClick={() => setSelectedIndex((prev:number)=>prev == 0 ? 0 : prev-1)} 
                    className={cn('absolute left-0 text-2xl', 
                        selectedIndex == 0 ? 'text-black' : 'text-teal-200'
                    )}><GrPrevious /></button>
                <button onClick={() => setSelectedIndex((prev:number)=> prev < photos.length-1 ? prev + 1 : prev)} 
                    className={cn('absolute right-0 text-2xl',
                        selectedIndex == photosLength-1 ? 'text-black' : 'text-teal-200'
                    )}><GrNext /></button>
        </DialogContent>
    )
}
