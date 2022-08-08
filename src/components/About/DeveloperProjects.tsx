import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import Carousel from "../UI/Gallery/Carousel";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
  },
];

export default function DeveloperProjects() {
  return (
    <Flex h="300px" backgroundColor={"ligtGlass.100"} w='80%' mx='auto' my='100px'>
      <Box w="50%">
        <Carousel cards={cards} />
      </Box>
      <Box width={"50%"} p='50px'>
        <Text>Title</Text>
        <Text></Text>
        <Text>Desc</Text>
      </Box>
    </Flex>
  );
}
