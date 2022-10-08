import { Box, Input, Text, Flex, Button, Heading, useBoolean } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

import PhotoUploader from "../container/gallery/PhotoUploader";
import PhotoEditor from "../container/gallery/PhotoEditor";
const GalleryDev = () => {
  const [photos, setPhotos] = useState();
  const [editPhotoFlag, setEditPhotoFlag] = useBoolean()

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
      {photos && <PhotoUploader photos={photos} setPhotos={setPhotos} />}
      <Button
        mt='100px'
        onClick={setEditPhotoFlag.toggle}
        colorScheme={editPhotoFlag ? 'red' : 'blue'}
      >
        {editPhotoFlag ? 'Close' : 'Edit Photos'}
      </Button>
      {editPhotoFlag && <PhotoEditor />}
    </Box>
  );
};

export default GalleryDev;
