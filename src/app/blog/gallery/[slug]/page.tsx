"use server"
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { cache } from 'react'
import Image from "next/image";
import Link from "next/link";
//Get image from firestore by id
const getImage = cache(async (docId: string) => {
    "use server"
    const docRef = doc(db, "photos", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;

    }
})

const ReturnButton = ({returnId}:{returnId:string}) => {
    return (
        <div className='flex justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                <Link href={`/blog/gallery`}>Back</Link>
                {/* <Link href={`/blog/gallery#test`} >Back</Link> */}
            </button>
        </div>
    )
}

export default async function Page({ params }: { params: { slug: string } }) {
    const photo = await getImage(params.slug);
    if (!photo) {
        return <div>Not found <ReturnButton returnId={params.slug} /></div>
    }
    console.log(photo)
    return (
        <div>
            <ReturnButton returnId={params.slug} />
            <Image src={photo.file} alt={photo.title} width={700} height={700} className='w-full max-h-[800px] object-contain m-auto transition ease-in-out  hover:scale-105 duration-150 md: rounded-sm hover:rounded-none' />
        </div>
    )

}