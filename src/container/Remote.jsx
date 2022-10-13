import {
  Box,
  Icon,
  Stack,
  useBoolean,
} from "@chakra-ui/react";
import {
  BiDownload,
  BiShare,
  BiMessageAlt,
  BiMessageDetail,
} from "react-icons/bi";
import { useState } from "react";
import ShareSNS from "../components/UI/ShareSNS";

const PhotoshowDetail = (props) => {
  const [popover, setPopover] = useBoolean(false);
  const [popoverType, setPopoverType] = useState("");
  const [showShare, setShowShare] = useBoolean(false);
  const iconStyle = {
    width: "35px",
    height: "35px",
    zIndex: 100,
    color: props.showDetail ? "white" : "#5A5A5A",
  };

  const hoverStyle = {
    color: "white !important",
  };

  const flipIcon = {
    ...iconStyle,
    transform: "scaleX(-1)",
  };

  const handleHover = (type) => {
    if (!showShare) {
      setPopoverType(type);
      setPopover.on();
    }
  };

  const handleLeave = () => {
    setPopover.off();
  };

  async function handleDownload() {
    const image = await fetch(props.photo.file);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = props.photo.title + "-DuJin";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <Box>
      <Stack
        direction={"row"}
        position="absolute"
        right={"1rem"}
        bottom="1rem"
        onMouseLeave={handleLeave}
      >
        <Icon
          as={props.showDetail ? BiMessageAlt : BiMessageDetail}
          style={iconStyle}
          onMouseEnter={() =>
            handleHover(props.showDetail ? "Hide Details" : "Photo Details")
          }
          _hover={hoverStyle}
          onClick={props.setShowDetail.toggle}
        />
        <Icon
          as={BiDownload}
          style={iconStyle}
          onMouseEnter={() => handleHover("Download")}
          _hover={hoverStyle}
          onClick={handleDownload}
        />
        <Icon
          as={BiShare}
          style={flipIcon}
          color={showShare ? "white !important" : ""}
          onMouseEnter={() => handleHover("Share")}
          _hover={hoverStyle}
          onClick={setShowShare.toggle}
          zIndex={"10"}
        />
        {showShare && (
          <Box
            position="absolute"
            bottom="40px"
            right="0"
            borderRadius={"5px"}
            zIndex={10}
          >
            <ShareSNS close={setShowShare.off} url={props.url} />
          </Box>
        )}

        {popover && (
          <Box
            position="absolute"
            top="-35px"
            backgroundColor="whiteAlpha.100"
            borderRadius={"5px"}
            p="3px"
            color={"gray.50"}
            right="0"
            zIndex={10}
          >
            {popoverType}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default PhotoshowDetail;
