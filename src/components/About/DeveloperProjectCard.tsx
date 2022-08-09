import { Box, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { createAdd } from "typescript";
import Carousel from "../UI/Gallery/Carousel";

interface props {
  card: {
    title: String, 
    desc: String, 
    link: any,
    images: string[]
  }

 }

export default function DeveloperProjectCard(props: props) {
  return (
    <Flex h="300px" backgroundColor={"ligtGlass.100"} w='80%' mx='auto' my='100px' bgColor={'light.100'} borderRadius='10px'>
      <Center width={'50%'} height='300px' >
        <Carousel cards={props.card.images} />
      </Center>
      <Box width={"50%"} p='50px'>
        <Text>{props.card.title}</Text>
        <Text>{props.card.desc}</Text>
        {/* <Text>{props.card.link}</Text> */}
      </Box>
    </Flex>
  );
}
