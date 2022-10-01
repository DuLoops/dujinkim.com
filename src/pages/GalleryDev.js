import { Box, Input, Text, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

import PhotoUploader from "../components/gallery/dev/PhotoUploader";

const GalleryDev = () => {
  const [photos, setPhotos] = useState();

  const fileHandler = (e) => {
    let selected = e.currentTarget.files;
    setPhotos(Array.from(selected));
  };

  return (
    <Box p="20px">
      {!photos ? (
        <Input type="file" accept="image/*" multiple onChange={fileHandler} />
      ) : (
        <Button
          colorScheme="red"
          onClick={() => {
            setPhotos(null);
          }}
        >
          Cancel
        </Button>
      )}
      {photos && <PhotoUploader photos={photos} setPhotos={setPhotos}/>}
    </Box>
  );
};

export default GalleryDev;
