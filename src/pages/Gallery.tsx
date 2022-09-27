import Nav from "../container/Nav";
import Filter from "../components/gallery/Filter";
import PhotoGallery from "../container/gallery/PhotoGallery";

import GalleryDev from './GalleryDev'

import {Box} from '@chakra-ui/react'

const Gallery = () => {
  return (
    <Box>
      <Nav />
      <Box>
        {/* <Filter />
        <PhotoGallery /> */}
      </Box>
      <GalleryDev/>
    </Box>
  );
};

export default Gallery;
