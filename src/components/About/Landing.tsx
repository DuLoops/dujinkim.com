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
import { PhotographerMe, laptop } from "../../resources/images/dev/aboutPhoto";

// import Typing from "react-typing-animation";

import LandingTitle from "./LandingTitle";
import LandingDesc from "./LandingDesc";

const Landing = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Box
      position="relative"
      width="70vw"
      maxWidth={"1400px"}
      marginX="auto"
      paddingTop={"100px"}
    >
      <Box textAlign="center">
        <Text color={"black"} fontSize="2xl">
          Web developer / Photographer / Blogger
        </Text>
      </Box>
      <Flex marginY="50px" justifyContent={"space-evenly"}>
        <Image
          margin={"auto"}
          src={laptop}
          alt="laptop"
          w="40%"
          maxWidth="1400px"
          zIndex={"0"}
        />
        <LandingTitle />
      </Flex>
      <LandingDesc isScroll={false} />
    </Box>
  );
};

export default Landing;
