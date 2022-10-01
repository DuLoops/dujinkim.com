import { useState, useEffect } from "react";
import { db, storage } from "../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFile = async (file) => {
  const storageRef = ref(storage, `test/${file.name}`);

  const url = await uploadBytes(storageRef, file).then(async () => {
    return await getDownloadURL(storageRef);
  });
  return await url;
};

export default uploadFile;
