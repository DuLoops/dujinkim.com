import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  useMediaQuery,
  Flex,
  Center,
  ColorModeScript,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import HomeFolder from "../components/Home/HomeFolder";
import ScrollableBackground from "../components/Home/ScrollableBackground";
//import ScrollableBackgroundUI from "../components/UI/ScrollableBackground";
import HomePreview from "../components/Home/HomePreview";
import backgroundImg from "../resources/images/dev/SideCountry.jpg";
import backgroundGreen from "../resources/images/dev/background.jpg";
import backgroundImgDark from "../resources/images/dev/Dark_lum_clear-0356.jpg";

//const pictures = [backgroundImg, backgroundGreen, backgroundImgDark];

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 1280px)");
  
  const [isHover, setIsHover] = useState(false);
  const [previewAddress, setPreviewAddress] = useState("");

  return (
    <Box className="home" overflow="hidden" w='100vw' h='100vh'>
      <ScrollableBackground />
      <HomePreview isHover={isHover} previewAddress={previewAddress} />
      <Box
        position="fixed"
        bottom="2rem"
        left="50%"
        transform="translate(-50%, 0%)"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <HomeFolder setPreviewAddress={setPreviewAddress} />
      </Box>
    </Box>
  );
};

export default Home;
