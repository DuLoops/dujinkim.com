import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SmallCloseIcon,
  InfoIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { chakra, Box, CloseButton, Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MdNavigateNext, MdNavigateBefore, MdClose, MdInfoOutline, MdInfo } from "react-icons/md";


const iconStyle = { width: "40px", height: "40px", color: "white" };


const ViewerControler = () => {

  return (
    <Flex>
      <MdNavigateBefore style={iconStyle} />
      <MdInfoOutline style={iconStyle} />
      <MdNavigateNext style={iconStyle} />
      <MdClose style={iconStyle} />

      
    </Flex>
  );
};

export default ViewerControler;
