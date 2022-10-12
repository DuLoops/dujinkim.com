import {
  Box,
  Button,
  Image,
  CloseButton,
  Center,
  Icon,
  Modal,
  ModalContent,
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
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <Modal isOpen={props.isOpen}zIndex="10">
      <ModalContent backgroundColor={"dark.200"} maxW='100vw' maxH={'100vh'} m='0'>
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
        <Center position={"relative"} width={"100%"}>
          <AnimatePresence>
            {photo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Image
                  src={photo.file}
                  alt={photo.title}
                  h="100vh"
                  objectFit={"contain"}
                  draggable="true"
                  pointerEvents={"none"}
                />
              </motion.div>
            )}
          </AnimatePresence>

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
      </ModalContent>
    </Modal>
  );
};

export default PhotoViewerModal;
