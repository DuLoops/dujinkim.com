import Nav from "../container/Nav";
import Filter from "../components/gallery/Filter";
import PhotoSlider from "../container/gallery/PhotoSlider";
import GalleryDev from "./GalleryDev";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import {
  Box,
  Center,
  Image,
  useBoolean,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import PhotoViewerModal from "./PhotoViewerModal";
import PhotoGrid from "../container/gallery/PhotoGrid";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredPhotos, setFilteredPhotos] = useState(null);
  const [modal, setModal] = useBoolean(false);
  const [showIndex, setShowIndex] = useState(0);

  const getImages = async () => {
    const querySnapshot = await getDocs(collection(db, "photos"));
    querySnapshot.forEach((doc) => {
      setPhotos((prevPhotos) => [...prevPhotos, doc.data()]);
    });
  };

  useEffect(() => {
    if (photos.length == 0) {
      getImages();
    }
  }, []);

  useEffect(() => {
    if (photos.length != 0) {
      setFilteredPhotos(
        photos.filter((photo) => photo.categories[filter] == true)
      );
    }
  }, [filter, photos]);

  return (
    <Box width="100%" overflow={"hidden"} position="relative">
      <Nav />
      <ScrollToTopBtn />
      <Box>
        <Filter />
        {/* {filteredPhotos && (
          <PhotoSlider photos={filteredPhotos} showIndex={showIndex} setShowIndex={setShowIndex} setModal={setModal}/>
        )} */}
        {filteredPhotos && (
          <PhotoGrid
            photos={filteredPhotos}
            setShowIndex={setShowIndex}
            setModal={setModal}
          />
        )}
      </Box>
      {modal && (
        <PhotoViewerModal
          isOpen={modal}
          setModal={setModal}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
          photos={filteredPhotos}
        />
      )}
    </Box>
  );
};

export default Gallery;
