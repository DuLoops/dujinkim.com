import SocialLinks from "components/SocialLinks"
import Landing from "./_blog/Landing"
import Link from "next/link"
export default function page() {
  return (
    <main>
      <div className='flex flex-col text-6xl gap-4 text-center font-m'>
        <div>
          <h1 className='text-2xl'>DuJin's Blog</h1>
        </div>
        <div className='text-xl'>
          <p>Sharing my</p>
          <p>passion, knowledge, and creations</p>
        </div>
        <div>
          <SocialLinks />
          <button className='bg-gradient-to-bl from-teal-300 to-slate-300 p-3 rounded-md text-xl'><Link href='/gallery'>Photo Gallery</Link></button>
        </div>
      </div>
      <Landing />
    </main>
  )
}
