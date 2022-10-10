import { Box, Button, Image, CloseButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewerControler from "../components/gallery/ViewerControler";
const PhotoViewerModal = (props) => {
  const [photo, setPhoto] = useState(props.photos[props.showIndex]);
  let navigate = useNavigate();

  const back = () => {
    console.log("back");
    navigate(-1, { replace: true });
    props.setModal.off();
  };

  useEffect(() => {
    setPhoto(props.photos[props.showIndex]);
  }, [props.showIndex]);
  // console.log(props.photos[props.showIndex]);

  return (
    <Box
      position={"absolute"}
      w="100vw"
      h="100vh"
      top="0"
      left="0"
      backgroundColor={"dark.200"}
    >
      <Box position={"relative"}>
        <Image
          src={photo.file}
          alt={photo.title}
          h="80vh"
          my="auto"
          mx="auto"
          objectFit={"contain"}
        />
        <ViewerControler/>
      </Box>
    </Box>
  );
};

export default PhotoViewerModal;
