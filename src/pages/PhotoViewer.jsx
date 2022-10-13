import { useParams } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import Nav from "../container/Nav";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const PhotoViewer = () => {
  const { photoID } = useParams();
  const [photo, setPhoto] = useState();

  const getPhoto = async () => {
    const docRef = doc(db, "photos", photoID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPhoto(docSnap.data());
    } else {
      alert("Invalid photo link");
    }
  };

  useEffect(() => {
    getPhoto();
  }, [photoID]);

  return (
    <Box>
      <Nav />
      {photo && (
        <Image
          src={photo.file}
          alt={photo.title}
          maxH="90vh"
          maxW="100vw"
          objectFit={"contain"}
          m="auto"
        />
      )}
    </Box>
  );
};

export default PhotoViewer;
