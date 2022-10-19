import { Box, Text, Image, useMediaQuery, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { sky } from "../resources/images/dev/aboutPhoto";

const LandingMobile = (props) => {


  return (
    <Box position="relative" w="100vw" h="100vh">
      <Image
        src={sky}
        alt={"skyPicture"}
        w="100%"
        h="100%"
        objectFit={"cover"}
        // filter={showTitle ? "blur(4px)" : "none"}
        filter='blur(3px)'
      />
      <Box
        textAlign={"center"}
        position="absolute"
        top="50%"
        left="50%"
        transform={"translate(-50%,-50%)"}
        color="white"
      >
        <Heading fontSize="5rem" marginBottom={"30px"}>
          DuJin
        </Heading>
        <Heading size="3xl">Kim</Heading>
      </Box>
    </Box>
  );
};

export default LandingMobile;
