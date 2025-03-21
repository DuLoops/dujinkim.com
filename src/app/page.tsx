import LandingBlog from "./blog/_components/LandingBlog"
import LandingProject from "./project/_components/LandingProject"
import Contact from "./contact/Contact"
import { BackgroundBeams } from "@/components/ui/background-beams"
import Image from "next/image"
const LandingHome = () => {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col  items-center justify-around">
      <BackgroundBeams />
      <div className="flex flex-col justify-center items-center  w-screen text-center pt-6 md:pt-10">
        <p className="text-3xl md:text-4xl leading-8">
          Hi, I&apos;m Dujin, a
          <br className="md:hidden" />
          <span className="font-medium ml-2">Software Developer</span>
        </p>
        <p className="text-3xl md:text-4xl font-m mt-4">Welcome to my
          <br className="md:hidden" />
          <a className="text-orange-400 font-ma ml-2 md:hover:underline" href={'/blog'}>Blog</a> /
          <a className="text-orange-400 font-ma font-normal md:hover:underline" href={'/project'}>Portfolio</a></p>
      </div>
      <div className="flex flex-col items-center">

        <Image src={'/images/dev/dujinlogo.svg'} width={300} height={300} alt='Dujin Logo' />
      <div className="scroll" />
      </div>
    </div>
  )
}

export default function page() {
  return (

    <main
      className="flex flex-col text-white gap-[50px] md:gap-[50px] lg:gap-[100px] " >
      <LandingHome />
      <LandingBlog />
      <LandingProject />
      <Contact />
    </main>
  )
}
