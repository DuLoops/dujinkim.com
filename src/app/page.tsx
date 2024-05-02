import SocialLinks from "components/SocialLinks"
import Landing from "./blog/_components/Landing"
import Link from "next/link"
import { Suspense } from "react"
import BlogLoader from "./blog/_components/Loading"
import LandingGallery from "./gallery/LandingGallery"
import GalleryLoader from "@/app/gallery/_components/GalleryLoader"
import { Meteors } from "components/ui/meteors"
export default function page() {
  return (
    <main className="flex flex-col text-white min-h-screen">
      <div className='flex flex-col gap-6 '>
        <div className='py-[20%] relative' >
        <Meteors number={5} />
        <div className="mx-10">
          <p className="text-2xl font-m">DuJin Kim's Blog</p>
          <p className="mt-4 font-ma text-4xl text-teal-200 text-right">DuDream</p>
        </div>

        </div>
        <div className="mt-9 mb-9">
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
