import React from 'react'
import { LampContainer } from 'components/ui/lamp'
import Image from 'next/image'
import Link from 'next/link'
import { getDocs, collection } from 'firebase/firestore'
import { db } from 'utils/firebase'
import {GradientButton} from 'components/ui/button'
import {InfiniteMovingImg} from 'components/ui/infiniteMovingImg'

async function fetchHomeGallery(){
    return getDocs(collection(db, 'homeGallery'))
    .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
    .catch(error => {
      console.error("Error fetching homeGallery:", error);
      return []; 
    });
}

export default async function LandingGallery() {
    const galleryData = await fetchHomeGallery()

    return (
        <div className='flex items-center flex-col'>
            <h1 className='text-center text-5xl font-ma font-light text-neutral-500 my-2 '>GALLERY</h1>
            <LampContainer>
               <InfiniteMovingImg items={galleryData} />
            </LampContainer>
                <Link href='/gallery'>
            <GradientButton>
                <p className='font-m'>VIEW</p>
                <Image src="/images/dev/gallery.png" alt="gallery" width={30} height={10} className='w-10'/>
            </GradientButton>
                </Link>
        </div>
    )
}
