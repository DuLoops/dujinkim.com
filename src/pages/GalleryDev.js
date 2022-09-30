import { Box, Input, Text, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

import ProgressBar from "../components/gallery/dev/ProgressBar";
import PhotoUploader from "../components/gallery/dev/PhotoUploader";

const GalleryDev = () => {
  const [photos, setPhotos] = useState();
  const types = ["image/png", "image/jpeg"];

  const fileHandler = (e) => {
    let selected = e.currentTarget.files;
    setPhotos(Array.from(selected));
  };


  const childRef = useRef();

  return (
    <Box p="20px">
      <Input type="file" accept="image/*" multiple onChange={fileHandler} />
      {photos && (
        <>
          <Flex gap={"10px"} m="20px">
            {photos.map((photo, index) => {
              return <PhotoUploader photo={photo} key={index} ref={childRef}/>;
            })}
          </Flex>
          <Button colorScheme={'red'} onClick={()=>{childRef.current.upload()}}>Upload</Button>
        </>
      )}
    </Box>
  );
};

// const GalleryDev = () => {
//   const [file, setFile] = useState<any>();
//   const [url, setUrl] = useState("");
//   const types = ["image/png", "image/jpeg"];

//   const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
//     //Choosing the first file
//     let selected: any = e.currentTarget.files;
//     let firstSelected = selected[0];
//     if (firstSelected && types.includes(firstSelected.type)) {
//       setFile(firstSelected);
//     } else {
//       setFile(undefined);
//       console.log("Wrong format");
//     }
//   };

//   return (
//     <form>
//       <input type="file" onChange={changeHandler} />
//       {file && <Text>{file.name}</Text>}
//       {file && <ProgressBar file={file} setImgUrl={setUrl} />}
//     </form>
//   );
// };

export default GalleryDev;
