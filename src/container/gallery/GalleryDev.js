import { Box, Input, Text, Flex, Button, Heading, useBoolean } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

import PhotoUploader from "./PhotoUploader";
import PhotoEditor from "./PhotoEditor";
const GalleryDev = () => {
  const [photos, setPhotos] = useState();
  const [editPhotoFlag, setEditPhotoFlag] = useBoolean()

  const fileHandler = (e) => {
    let selected = e.currentTarget.files;
    setPhotos(Array.from(selected));
  };

  return (
    <Box>
      {photos && <PhotoUploader photos={photos} setPhotos={setPhotos} />}
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
      
      {/* <Button
        mt='100px'
        onClick={setEditPhotoFlag.toggle}
        colorScheme={editPhotoFlag ? 'red' : 'blue'}
      >
        {editPhotoFlag ? 'Close' : 'Edit Photos'}
      </Button>
      {editPhotoFlag && <PhotoEditor />} */}
    </Box>
  );
};

export default GalleryDev;
