import { Box, CloseButton, Heading, Text } from "@chakra-ui/react";

const PhotoDetail = (props) => {
  return (
    <Box
      bg="whiteAlpha.100"
      width={"70vw"}
      h="14vh"
      position={"absolute"}
      bottom="0"
      left="50%"
      transform={"translate(-50%, 0)"}
      borderRadius={"5px 5px 0 0 "}
      p='10px'
    >
      <CloseButton position={'absolute'} top='0' right='0' onClick={props.close}/>
      <Text fontSize='lg' as='b'>{props.photo.title}</Text>
      <br/><br/>
      <Text fontSize={'md'} as='i'>{props.photo.desc}</Text>
      <Text fontSize='md' as='i' ml='1rem'>Location: {props.photo.location}</Text>
    </Box>
  );
};

export default PhotoDetail;
