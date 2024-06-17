import SocialLinks from "components/SocialLinks"
import LandingBlog from "./blog/_components/LandingBlog"
import LandingProject from "./project/_components/LandingProject"
import Contact from "./contact/Contact"
import { Suspense } from "react"
import BlogLoader from "./blog/_components/Loading"
import { Meteors } from "components/ui/meteors"

const LandingHome = () => {
  return (
    <div className="relative overflow-hidden">
      <Meteors number={5} />
      <div className="flex flex-row justify-center items-center bg-neutral-700 py-2 absolute top-[100px] w-screen">
        <p className="mx-2 text-2xl font-m">WEB</p>
        <p className="font-ma text-7xl text-teal-200 leading-10">D</p>
        <div className="font-ma text-3xl text-teal-200 leading-8">
          <p>esigner</p>
          <p>eveloper</p>
        </div>
      </div>
    </div>
  )
}

export default function page() {
  return (
    <main className="flex flex-col text-white min-h-screen">
      <LandingHome />
      <LandingBlog />
      <LandingProject />
      <Contact />
    </main>
  )
}
