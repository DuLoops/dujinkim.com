import SocialLinks from "components/SocialLinks"
import Landing from "./_blog/Landing"
import Link from "next/link"
import { Suspense } from "react"
import BlogLoader from "../components/blog/Loading"
import LandingGallery from "./gallery/LandingGallery"
import GalleryLoader from "components/gallery/GalleryLoader"
import { WavyBackground } from "components/ui/wavy-background"
export default function page() {
  return (
    <main className="flex flex-col text-white min-h-screen">
      <div className='flex flex-col gap-6 '>

        <div className='mt-[20%]' >
          <p className="text-3xl ml-5 ">Hi, I'm DuJin</p>
          <p className="text-2xl text-right mr-5 mt-9">Welcome to my Blog</p>
        </div>
        <div>
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
