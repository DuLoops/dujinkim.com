import {
  chakra,
  Box,
  CloseButton,
  Flex,
  Icon,
  Stack,
  Text,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
  useBoolean,
  PopoverContent,
  PopoverHeader,
} from "@chakra-ui/react";
import { motion, transform } from "framer-motion";
import { MdInfoOutline, MdInfo } from "react-icons/md";
import { BiDownload, BiShare,BiMessageAlt, BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const PhotoshowDetail = (props) => {
  const [showDetail, setShowDetail] = useBoolean(false);
  const [popover, setPopover] = useBoolean(false);
  const [popoverType, setPopoverType] = useState("");
  const iconStyle = {
    width: "35px",
    height: "35px",
    zIndex: 100,
    color: showDetail ? 'white' : '#5A5A5A'
  };

  const hoverStyle = {
    color: "white !important",
  };

  const flipIcon = {
    ...iconStyle,
    transform: "scaleX(-1)",
  };

  const handleHover = (type) => {
    setPopoverType(type);
    setPopover.on();
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
    link.download = "image file name here";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleShare = () => {};

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
          as={showDetail ? BiMessageAlt : BiMessageDetail}
          // as= {MdInfoOutline}
          style={iconStyle}
          onMouseEnter={() => handleHover("Photo Details")}
          _hover={hoverStyle}
          onClick={setShowDetail.toggle}
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
          onMouseEnter={() => handleHover("Share")}
          _hover={hoverStyle}
          onClick={() => {navigator.clipboard.writeText(window.location.href)}}
        />
        {popover && (
          <Box
            position="absolute"
            top="-35px"
            backgroundColor="whiteAlpha.100"
            borderRadius={"5px"}
            p="3px"
            color={"gray"}
            right="0"
          >
            {popoverType}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default PhotoshowDetail;
