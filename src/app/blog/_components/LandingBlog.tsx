import React from 'react'
import {db} from 'utils/firebase'
import {DocumentData, collection, getDocs} from 'firebase/firestore'
import BlogCard from '@/app/blog/_components/BlogCard';
import { BlogPostType } from '@/types/BlogPostType';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { homeBlogPosts } from '@/data/blogPosts';
// async function getPosts() {
//   return getDocs(collection(db, 'blogPosts'))
//     .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
//     .catch(error => {
//       console.error("Error fetching posts:", error);
//       return []; 
//     });

// }


export default async function LandingBlog() {

  // const posts = await getPosts  
  return (
    <div>
      <h1 className='text-center text-5xl font-ma font-light text-neutral-500 '>BLOG</h1>
      <div className='flex flex-col gap-4 p-4 '>
        {homeBlogPosts.map((post) => <BlogCard postData={post} />)}
      </div>
      <Button><Link href={'/blog'}>Read More</Link></Button>
    </div>
  )
}
