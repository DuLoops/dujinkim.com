import { getMergedBlogPosts } from '@/lib/blog';
import BlogCard from '@/app/blog/_components/Card_Blog';
import MainHeaderNav from '@/components/layout/MainHeaderNav';
// import Filter from '@/app/blog/_components/Filter';
// import { FaFilter } from "react-icons/fa";

export default function Page() {
  const mergedPosts = getMergedBlogPosts();

  return (
    <>
      <MainHeaderNav />
      <div className='flex flex-col items-center w-full'>
        <h1 className='text-center text-3xl font-ma font-light text-neutral-500 m-5 md:text-5xl md:m-6 md:block'>Blog</h1>
      {/* <Filter selectedType={selectedType} setSelectedType={setSelectedType}/>
      <FaFilter className='text-xl md:text-2xl mt-3 text-white' /> */}
      <div className='px-6 grid md:auto-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto '>
        {mergedPosts.map((post, i) => <BlogCard postData={post} key={i} />)}
      </div>
    </div>
    </>
  )
}
