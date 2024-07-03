import React from 'react'
import { BlogType, BlogTypeNames } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { FaFilter } from "react-icons/fa";


interface FilterProps {
    selectedType: BlogType | null;
    setSelectedType: React.Dispatch<React.SetStateAction<BlogType | null>>;
}
export default function ({ selectedType, setSelectedType }: FilterProps) {

    return (

        <div className='text-white flex flex-col md:flex-row gap-2  justify-center items-center w-full mt-10 md:mt-0'>
            <Button onClick={() => setSelectedType(null)} className={`${selectedType == null ? 'bg-teal-400 text-black ' : ''}`}>All</Button>
            <div className='flex w-full gap-2 px-2 md:contents'>
                {Object.values(BlogTypeNames).map((type, i) => (
                    <Button key={i} onClick={() => setSelectedType(i)} className={`${selectedType == i ? 'bg-teal-400 text-black' : ''}`}>{type}</Button>
                ))}
            </div>
        </div>
    )
}
