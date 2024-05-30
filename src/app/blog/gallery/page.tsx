"use server"
import React from 'react'
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from 'next/image';
async function getImages() {
  "use server"
  const querySnapshot = await getDocs(collection(db, "photos"));
  const photos = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    delete data.cameraInfo;
    return data;
  });

  return {
    photos
  };
}


export default async function page() {
"use server"
  const { photos } =  await getImages();

  return (
    <div>
      <h1 className=''>Gallery</h1>
      <div className='flex flex-col'>
        
        {photos.map((photo, i) => (
          <div key={i}>
          <p>{photo.id}</p>
            <Image src={photo.file} alt={photo.id} key={i}  width={100} height={100}/>
          </div>
        ))
        }
        </div>

    </div>
  )
}
