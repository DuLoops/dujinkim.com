import React from 'react'
import {db} from 'utils/firebase'
import {DocumentData, collection, getDocs} from 'firebase/firestore'
import BlogCard from 'components/blog/BlogCard';
import { BlogPostData } from 'types/blogPostData';
async function getPosts() {
  return getDocs(collection(db, 'blogPosts'))
    .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
    .catch(error => {
      console.error("Error fetching posts:", error);
      return []; 
    });

}

export default async function Landing() {

  const posts = await getPosts()
  
  return (
    <div>
      <h1 className='text-center text-5xl font-ma font-light text-neutral-500'>BLOG</h1>
      <div className='flex flex-col gap-4 p-4 '>
        {posts.map((post: DocumentData) => <BlogCard postData={post} />)}
      </div>
    </div>
  )
}
