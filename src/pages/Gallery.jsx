import Nav from "../container/Nav";
import Filter from "../components/gallery/Filter";
import PhotoSlider from "../container/gallery/PhotoSlider";
import GalleryDev from "./GalleryDev";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import {
  Box,
  useColorMode,
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredPhotos, setFilteredPhotos] = useState(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const [lightBox, setLigthBox] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getImages = async () => {
    const querySnapshot = await getDocs(collection(db, "photos"));
    querySnapshot.forEach((doc) => {
      setPhotos((prevPhotos) => [...prevPhotos, doc.data()]);
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    if (photos.length != 0) {
      setFilteredPhotos(
        photos.filter((photo) => photo.categories[filter] == true)
      );
    }
  }, [filter, photos]);

  return (
    <Box>
      <Nav />
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Box>
        <Filter />
        {filteredPhotos && (
          <PhotoSlider
            photos={filteredPhotos}
            setLightBox={setLigthBox}
            openLightBox={onOpen}
          />
        )}
      </Box>
      <Button onClick={onOpen}>Open Modal</Button>
      {lightBox && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>{lightBox.title}</ModalContent>
        </Modal>
      )}

      {/* <GalleryDev/> */}
    </Box>
  );
};

export default Gallery;
