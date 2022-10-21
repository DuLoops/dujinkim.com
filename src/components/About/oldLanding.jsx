import {
  Box,
  Text,
  Image,
  useMediaQuery,
  Heading
} from "@chakra-ui/react";
import styled from "styled-components";

import LandingTitle from "../../components/about/LandingTitle";
import LandingDesc from "../../components/about/LandingDesc";

import { laptop } from "../../resources/images/aboutPhoto";

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
      <Heading>Dujin Kim</Heading>
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
