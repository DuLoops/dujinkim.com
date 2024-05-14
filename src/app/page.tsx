import SocialLinks from "components/SocialLinks"
import BlogLanding from "./blog/_components/LandingBlog"
import Link from "next/link"
import { Suspense } from "react"
import BlogLoader from "./blog/_components/Loading"
import LandingGallery from "./blog/gallery/LandingGallery"
import GalleryLoader from "@/app/blog/gallery/_components/GalleryLoader"
import { Meteors } from "components/ui/meteors"
export default function page() {
  return (
    <main className="flex flex-col text-white min-h-screen">
      <div className='flex flex-col gap-6 '>
        <div className='py-[20%] relative' >
        <Meteors number={5} />
        <div className="flex flex-row justify-center items-center bg-neutral-700 py-2">
          <p className="mx-2 text-2xl font-m">WEB</p>
          <p className="font-ma text-7xl text-teal-200 leading-10">D</p>
          <div className="font-ma text-3xl text-teal-200 leading-8">
            <p>esigner</p>
            <p>eveloper</p>
          </div>
        </div>
        </div>
        <Suspense fallback={<BlogLoader />}>
          <BlogLanding />
        </Suspense>
      </div>
    </main>
  )
}
