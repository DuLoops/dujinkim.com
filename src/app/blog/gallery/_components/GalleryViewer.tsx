"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation'
import GalleryLightbox from './GalleryLightbox';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
interface Photo {
    id: string;
    file: string;
    title: string;
}


interface GalleryViewerProps {
    photos: Photo[];
}


export default function GalleryViewer({ photos }: { photos: any }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const searchParam = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const i = searchParam.get('i');
        if (i !== null)
            setSelectedIndex(Number(i));
    }, [])

    useEffect(() => {
        if (selectedIndex !== null) {
            router.push(`#${photos[selectedIndex].id}`);
        } else {
            router.push(`/blog/gallery`, {scroll: false});
        }
    }, [selectedIndex])

    return (
        <Dialog open={selectedIndex != null} onOpenChange={()=>setSelectedIndex(null)}>
            <div className='flex flex-col w-full relative gap-2 p-4 md:grid grid-cols-2 md:p-8 md:gap-8 items-center'>
                {photos.map((photo: any, i: number) => (
                    <Image src={photo.file} alt={photo.title} key={i} width={700} height={700}
                        id={photo.id}
                        onClick={() => setSelectedIndex(i)}
                        className='w-full max-h-[800px] object-contain m-auto transition ease-in-out  hover:scale-105 duration-150 md: rounded-sm hover:rounded-none' />
                ))}
                {selectedIndex !== null && (
                    <GalleryLightbox photos={photos} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                )}
            </div>
        </Dialog>

    )
}
