import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutIntro(props) {
  return (
    <Box w="100vw" h="100vh">
      <Heading
        pos="absolute"
        color={"whiteAlpha.300"}
        top="20%"
        left="10%"
        fontSize="100px"
      >
        About Me
      </Heading>
      <Text
        textAlign={"left"}
        fontSize="1.8rem"
        fontWeight={"400"}
        w="100%"
        px="10%"
        mt="20%"
        onMouseEnter={() => {
          props.setCursor("intro");
        }}
        onMouseLeave={() => {
          props.setCursor("default");
        }}
      >
        Hi, my name is Dujin Kim. I am a software developer and designer based
        in British Columbia, Canada. <br />
        <br />
        To tell you about myself, here are three passions of mine:
      </Text>
    </Box>
  );
}
