import {
  Box,
  Button,
  Image,
  CloseButton,
  Center,
  Icon,
  Modal,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdClose,
  MdInfoOutline,
  MdInfo,
} from "react-icons/md";
import { BiDownload, BiShare } from "react-icons/bi";
import Remote from "../components/gallery/Remote";
import Gallery from "./Gallery";
const PhotoViewerModal = (props) => {
  const [photo, setPhoto] = useState(props.photos[props.showIndex]);
  let navigate = useNavigate();

  const back = () => {
    navigate("/gallery", { replace: false });
    props.setModal.off();
  };

  useEffect(() => {
    setPhoto(props.photos[props.showIndex]);
  }, [props.showIndex]);

  const iconStyle = {
    width: "60px",
    height: "60px",
    zIndex: 100,
    color: "gray",
  };

  const hoverStyle = {
    color: "white !important",
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      position={"absolute"}
      w="100vw"
      h="100vh"
      top="0"
      left="0"
      backgroundColor={"dark.200"}
      zIndex="10"
    >
      <Icon
        as={MdClose}
        position="absolute"
        top="30px"
        right="30px"
        onClick={back}
        h="30px"
        w="30px"
        color={"gray"}
        zIndex={100}
        _hover={hoverStyle}
      />
      <Center position={"relative"} h="100%" width={"100%"}>
        <Image
          src={photo.file}
          alt={photo.title}
          h="100%"
          objectFit={"contain"}
          draggable="true"
          pointerEvents={"none"}
        />
        <Icon
          as={MdNavigateBefore}
          position="absolute"
          top="45%"
          left="0px"
          style={iconStyle}
          _hover={hoverStyle}
          onClick={() => props.swiperRef.current.slidePrev()}
        />
        <Icon
          as={MdNavigateNext}
          position="absolute"
          top="45%"
          right="00px"
          style={iconStyle}
          _hover={hoverStyle}
          onClick={() => props.swiperRef.current.slideNext()}
        />
        {/* <Remote /> */}
        <Remote photo={photo} />
      </Center>
    </Modal>
  );
};

export default PhotoViewerModal;
