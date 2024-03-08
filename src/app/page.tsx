import SocialLinks from "components/SocialLinks"
import Landing from "./_blog/Landing"
import Link from "next/link"
import { Suspense } from "react"
import BlogLoader from "../components/blog/Loading"
import LandingGallery from "./gallery/LandingGallery"
import GalleryLoader from "components/gallery/GalleryLoader"
import { Meteors } from "components/ui/meteors"
export default function page() {
  return (
    <main className="flex flex-col text-white min-h-screen">
      <div className='flex flex-col gap-6 '>
        <div className='py-[20%] relative' >
        <Meteors number={5} />
          <p className="text-2xl ml-10">Hi, I'm <span className="font-ma text-4xl text-teal-200">DuJin</span></p>
          <p className="text-2xl text-center mt-9">Welcome to my <span className="font-ma font-black text-4xl text-teal-200">Blog</span></p>
        </div>
        <div className="mt-10">
          <Suspense fallback={<GalleryLoader />} >
            <LandingGallery />
          </Suspense>
        </div>
        <Suspense fallback={<BlogLoader />}>
          <Landing />
        </Suspense>
      </div>
    </main>
  )
}
