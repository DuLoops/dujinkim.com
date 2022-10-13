import { Icon, Modal, ModalContent, useBoolean } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Remote from "../container/Remote";
import PhotoSlider from "../container/gallery/PhotoSlider";

const PhotoViewerModal = (props) => {
  const [showDetail, setShowDetail] = useBoolean(true);
  const [url, setUrl] = useState(
    `https://dujinkim.com/gallery/${props.photos[props.showIndex].id}`
  );

  let navigate = useNavigate();

  const back = () => {
    navigate("/gallery", { replace: false });
    props.setModal.off();
  };

  useEffect(() => {
    let urlPath = props.photos[props.showIndex].id;
    setUrl(`https://dujinkim.com/gallery/${urlPath}`);
    // navigate(`/gallery/${urlPath}`,{state:{modal:true}})
    window.history.replaceState(null, "New photo url", `/gallery/${urlPath}`);
  }, [props.showIndex]);

  const hoverStyle = {
    color: "white !important",
  };

  return (
    <Modal isOpen={props.isOpen} zIndex="10">
      <ModalContent
        backgroundColor={"dark.200"}
        maxW="100vw"
        maxH={"100vh"}
        h="100vh"
        overflow="hidden"
        m="0"
        borderRadius={0}
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
        <PhotoSlider
          photos={props.photos}
          showIndex={props.showIndex}
          setShowIndex={props.setShowIndex}
          showDetail={showDetail}
        />
        <Remote
          photo={props.photos[props.showIndex]}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          url={url}
        />
      </ModalContent>
    </Modal>
  );
};

export default PhotoViewerModal;
