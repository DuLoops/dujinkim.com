import { Box, Container, Heading, Text, Image, Flex } from "@chakra-ui/react";

import quote from "../../resources/images/icons/quote.svg";

import DeveloperBandwidth from "./DeveloperBandwidth";
import DeveloperProjects from "./DeveloperProjects";

const Developer = () => {
  return (
    <Box position="relative" backgroundColor="dark.100">
      <Box width="60vw" maxWidth={"1400px"} marginX="auto" py={"120px"} position='relative'>
        <Text color={"light"} marginLeft="20%">
          My GOAL as a Web Developer
        </Text>
        <Flex
          marginX="auto"
          marginY="50px"
          alignItems={"center"}
          gap="20px"
          justifyContent="center"
          position={'relative'}
          zIndex='1'
        >
          <Image src={quote} alt="quote" transform={"rotate(180deg)"} />
          <Text fontSize="3xl" color={"white"}>
            Broaden the bandwidth of communication
          </Text>
          <Image src={quote} alt="quote" />
        </Flex>
        <Box position={"absolute"} right="0" bottom="0" zIndex={'0'}>
          <DeveloperBandwidth />
        </Box>
      </Box>
    </Box>
  );
};

export default Developer;
