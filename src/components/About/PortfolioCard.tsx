import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

interface props {
  card: {
    title: String;
    desc?:String;
    tech: String;
    image: any;
  };
}

export default function PorfolioCard(props: props) {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        position='relative'
        p={6}
        overflow={"hidden"}
        onMouseEnter={() => {
          setDisplayInfo(true);
        }}
        onMouseLeave={() => {
          setDisplayInfo(false);
        }}
      >
        <Box
          bg={"gray.100"}
          pos={"relative"}
        >
          <Image src={props.card.image} fit="fill" />
        </Box>
        {displayInfo && (
          <Flex flexDir={'column'} textAlign={'center'} justifyContent='space-evenly' position={'absolute'} w='100%' h='100%' top='0' left='0' backgroundColor={'white'}>
            <Box>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {props.card.title}
            </Heading>
            <Text>{props.card.desc}</Text>
            </Box>
            <Text color={"blue.500"}>{props.card.tech}</Text>
            <Button colorScheme='whiteAlpha' >View More</Button>
          </Flex>
        )}
      </Box>
    </Center>
  );
}
