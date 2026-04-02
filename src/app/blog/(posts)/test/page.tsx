import Image from 'next/image'

export default function SteveJobsPost() {
    return (
        <main className="min-h-screen bg-neutral-800 text-white">
            <article className="mx-auto p-4 max-w-4xl  ">
                <header >
                    <h1 className="text-4xl font-bold text-white text-center mb-2">Steve Jobs</h1>
                    <p className="text-white text-center">The Visionary Who Bent Reality and Redefined Technology</p>
                    <Image
                        src={'/images/blog/steve_jobs/hero.jpeg'}
                        alt="Steve Jobs"
                        width={1200}
                        height={800}
                        className="rounded-lg w-full h-auto mt-4"
                    />
                </header>
                <section className="px-2 py-4 bg-neutral-700 m-4 rounded-lg">
                    <h2 className="text-2xl font-bold text-white">Table of Contents</h2>
                    <ol className="list-decimal ml-4">
                        <li>Formative Years and Seeds of Vision</li>
                        <li>Reality Distortion Field in Action</li>
                        <li>Journey of Innovation: From Macintosh to NeXT and Pixar</li>
                        <li>Legacy and Impact</li>
                    </ol>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-white">Formative Years and Seeds of Vision</h2>
                    <p></p>
                </section>
            </article>
        </main>
    )
}