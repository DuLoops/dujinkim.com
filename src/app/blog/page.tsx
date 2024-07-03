"use client"

import {useState, useEffect} from 'react'
import { homeBlogPosts } from '@/data/blogPosts';
import BlogCard from '@/app/blog/_components/BlogCard';
import Filter from './_components/Filter';
import { BlogPostType, BlogType } from '@/data/blogPosts';
import { FaFilter } from "react-icons/fa";
export default function page() {

  const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>(homeBlogPosts)
 const [selectedType, setSelectedType] = useState<BlogType | null>(null)
 

  useEffect(() => {
    console.log(selectedType)
    setFilteredPosts(homeBlogPosts.filter(post => selectedType === null || post.tags.includes(selectedType)))
    }, [selectedType]);
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-center text-5xl font-ma font-light text-neutral-500 m-10 hidden md:block'>BLOG</h1>
      <Filter selectedType={selectedType} setSelectedType={setSelectedType}/>
      <FaFilter className='text-2xl md:text-3xl mt-3 text-teal-200' />
      <div className='p-5 grid md:auto-rows grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto my-6'>
        {filteredPosts.map((post, i) => <BlogCard postData={post} key={i}/>)}
      </div>
    </div>
  )
}
