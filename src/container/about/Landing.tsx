import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import LandingTitle from "../../components/About/LandingTitle";
import LandingDesc from "../../components/About/LandingDesc";

import { laptop } from "../../resources/images/dev/aboutPhoto";

const Clear = styled.div`
  clear: both;
`;

const Landing = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Box
      position="relative"
      width="70vw"
      maxWidth={"1400px"}
      marginX="auto"
      marginBottom={"100px"}
    >
      <Box textAlign="center" mt="100px">
        <Text color={"black"} fontSize="2xl">
          Software Developer / Photographer / Blogger
        </Text>
      </Box>
      <Box position={'relative'} marginY="130px">
        <Image
          src={laptop}
          alt="laptop"
          w="60%"
          maxWidth="1400px"
          zIndex={"0"}
        />
        <LandingTitle />
      </Box>
      <LandingDesc isScroll={false} />
    </Box>
  );
};

export default Landing;
