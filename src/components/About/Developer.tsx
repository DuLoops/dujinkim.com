import { Box, Container, Heading, Text, Image, Flex  } from "@chakra-ui/react";
import quote from "../../resources/images/icons/quote.png"
import Wifi from "./Wifi";
import styled from "styled-components";


const Developer = () => {
  return (
    <Box position="relative" backgroundColor="dark.100">
      <Box className="quote" width='70vw' maxWidth={'1400px'} marginX='auto' paddingTop={'100px'}>
        <Text color={'light'} marginLeft='20%'>My GOAL</Text>
        <Flex width={'50vw'} marginX='auto' marginY='50px' alignItems={'center'} gap='20px' justifyContent='center'>
          <Image  src={quote} alt="quote"/>
          <Text fontSize='3xl' color={'light'}>Broaden the bandwidth of communication</Text>
          <Image src={quote} alt="quote" transform={'rotate(180deg)'}/>
        </Flex>
        <Box>
          <Wifi />
        </Box>
      </Box>
    </Box>
  );
};

export default Developer;
