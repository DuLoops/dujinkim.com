'use server'
import 'server-only'
import {cache} from 'react'
import { db } from "@/utils/firebase";
import { collection, getDocs , updateDoc} from "firebase/firestore";



export const getFirestoreImages = cache( async () => {
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
  });