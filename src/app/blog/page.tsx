"use client"

import {useState, useEffect} from 'react'
import { homeBlogPosts } from '@/data/blogPosts';
import BlogCard from '@/app/blog/_components/Card_Blog';
import Filter from './_components/Filter';
import { BlogPostType, BlogType } from '@/data/blogPosts';
import { FaFilter } from "react-icons/fa";
export default function Page() {

  const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>(homeBlogPosts)
 const [selectedType, setSelectedType] = useState<BlogType | null>(null)
 

  useEffect(() => {
    setFilteredPosts(homeBlogPosts.filter(post => selectedType === null || post.tags.includes(selectedType)))
    }, [selectedType]);
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-center text-3xl font-ma font-light text-neutral-500 m-5 md:text-5xl md:m-6 md:block'>Blog</h1>
      {/* <Filter selectedType={selectedType} setSelectedType={setSelectedType}/>
      <FaFilter className='text-xl md:text-2xl mt-3 text-white' /> */}
      <div className='px-6 grid md:auto-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto '>
        {filteredPosts.map((post, i) => <BlogCard postData={post} key={i}/>)}
      </div>
    </div>
  )
}
