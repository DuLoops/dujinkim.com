import SocialLinks from "components/SocialLinks"
import LandingBlog from "./blog/_components/LandingBlog"
import LandingProject from "./project/_components/LandingProject"
import Contact from "./contact/Contact"
import { Suspense } from "react"
import BlogLoader from "./blog/_components/Loading"
import { Meteors } from "components/ui/meteors"

const LandingHome = () => {
  return (
    <div className="relative overflow-hidden ">
      <Meteors/>
      <div className="flex flex-row justify-center items-center bg-neutral-700 py-2 absolute top-[100px] w-screen">
        <p className="mx-2 text-2xl md:text-3xl font-m">WEB</p>
        <p className="font-ma text-7xl md:text-8xl text-teal-300 leading-10">D</p>
        <div className="font-ma text-3xl md:text-4xl text-teal-300 leading-8">
          <p>esigner</p>
          <p>eveloper</p>
        </div>
      </div>
    </div>
  )
}

export default function page() {
  return (
    <main className="flex flex-col text-white min-h-screen gap-[50px] md:gap-[150px]" >
      <LandingHome />
      <LandingBlog />
      <LandingProject />
      <Contact />
    </main>
  )
}
