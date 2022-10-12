import { Box, Flex, Image } from "@chakra-ui/react";

const PhotoGrid = (props) => {
  const handleClick = (index) => {
    props.setShowIndex(index);
    props.setModal.on();
  };
  return (
    <Flex w="100%" flexFlow={"row wrap"} gap='10px' p='30px'>
      {props.photos.map((photo, index) => (
        <Image
          src={photo.file}
          alt={photo.title}
          key={index}
          objectFit={"contain"}
          loading="lazy"
          onClick={() => handleClick(index)}
          maxH="70vh"
          maxW="49%"
          m="auto"
          draggable="true"
        />
      ))}
    </Flex>
  );
};

export default PhotoGrid;
