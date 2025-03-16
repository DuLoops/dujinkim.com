import React from 'react'
import { BlogType, BlogTypeNames, borderColorVariants } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { tagColors } from '@/data/blogPosts';
import { cn } from '@/utils/cn';
interface FilterProps {
    selectedType: BlogType | null;
    setSelectedType: React.Dispatch<React.SetStateAction<BlogType | null>>;
}
export default function Filter({ selectedType, setSelectedType }: FilterProps) {

    return (

        <div className='text-white flex flex-col md:flex-row gap-2  justify-center items-center w-full  text-md '>
            <Button size='sm' onClick={() => setSelectedType(null)} className={`${selectedType == null ? 'bg-orange-400 text-black w-16' : ''}`}>All</Button>
            <div className='flex w-full gap-2 px-2 md:contents justify-center '>
                {Object.values(BlogTypeNames).map((type, i) => (
                    <Button size='sm' key={i} variant={'tag'} onClick={() => setSelectedType(i)} className={`${selectedType == i ? cn(tagColors[i as keyof typeof tagColors] , 'text-black border-none') : borderColorVariants[i as keyof typeof borderColorVariants]}`}>{type}</Button>
                ))}
            </div>
        </div>
    )

}
