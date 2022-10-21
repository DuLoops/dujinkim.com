import {
  Box,
  Button,
  Heading,
  Image,
  Icon,
  Link,
  Text,
  Center,
  Flex,
  Grid,
} from "@chakra-ui/react";
import {
  climbing,
  drawing,
  photography,
  skiing,
  sky,
  softwareDevelopment,
  moonwalk,
} from "../resources/images/passion";
import { AiFillGithub } from "react-icons/ai";
import "../styles/passion.scss";
import { folderGallery, folderBlog } from "../resources/images/icons";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

const PassionDesktop = (props) => {
  return (
    <React.Fragment>
      <ParallaxLayer offset={props.isMobile ? 1.5 : 1.1}>
        <Heading
          borderBottom="5px solid"
          width={"50%"}
          m="auto"
          mb="5rem"
          p={"20px"}
        >
          My passion is
        </Heading>
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={0.5}>
        <Image
          src={softwareDevelopment}
          alt="softwareDevelopment"
          className="containedImage"
          h="120vh"
          boxShadow={"0 0 200px #6A96BB"}

        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={0.1}>
        <Box className={"center desc"} boxShadow="dark-lg" color="white">
          <Heading>Software Development</Heading>
          <Button _hover={{ color: "blue.400" }} mt="10px" colorScheme={"cyan"}>
            <Link href="https://github.com/DuLoops" target="_blank">
              <Center>
                View Code <Icon as={AiFillGithub} className="iconStyle" />
              </Center>
            </Link>
          </Button>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer offset={2.1} speed={0.5}>
        <Image
          src={sky}
          alt="sky"
          className="containedImage"
          h="180vh"
          filter="blur(1px)"
          boxShadow={"0 0 100px #ADC272"}

        />
      </ParallaxLayer>
      <ParallaxLayer offset={2.3} speed={0.3}>
        <Box
          className="center"
          boxShadow={"dark-lg"}
          borderRadius={{ sm: "10px", md: "100px" }}
          overflow={{ md: "hidden" }}
        >
          <Image
            src={photography}
            alt="photography"
            maxW={{ sm: "90vw", md: "50vw" }}
            borderRadius={{ sm: "3rem", md: "" }}
          />
        </Box>
      </ParallaxLayer>
      <ParallaxLayer offset={2.4} speed={0.1}>
        <Box className="center desc" top={{ sm: "300px", md: "75%" }}>
          <Heading color="white">Photography</Heading>
          <Button
            _hover={{ color: "green.800" }}
            p="25px 10px"
            colorScheme="green"
            mt="10px"
          >
            <Link href="https://duloops.com/gallery" target="_blank">
              <Center>
                View Gallery
                <Image
                  src={folderGallery}
                  loading="lazy"
                  className="imageIconStyle"
                />
              </Center>
            </Link>
          </Button>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer offset={3.3} speed="2.5">
        <Heading fontSize="20rem" fontWeight={"300"} color="gray">
          &
        </Heading>
      </ParallaxLayer>
      <Box>
        <ParallaxLayer offset={3.9} speed={1.7}>
          <Image
            src={skiing}
            position="absolute"
            alt="skiing"
            w="40%"
            right="10%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} speed={1.5}>
          <Image
            top="30%"
            src={climbing}
            alt="climbing"
            w="30%"
            left="8%"
            position="absolute"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.8}>
          <Image
            position="absolute"
            src={drawing}
            alt="drawing"
            width={"70%"}
            left="10%"
            bottom="30%"
            // transform={"translateX(-50%)"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1.8}>
          <Image
            src={moonwalk}
            alt="moonwalk"
            position={"absolute"}
            w="30%"
            right="5%"
            bottom="120%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} speed={0.5}>
          <Box className="desc center" position="absolute" p="30px">
            <Heading color={"white"}>
              Storytelling
              <br /> from the mountains
            </Heading>
            <Button
              _hover={{ color: "red.400" }}
              p="25px 10px"
              colorScheme="orange"
              mt="10px"
            >
              <Link href="https://duloops.com/blog" target="_blank">
                <Center>
                  View Blog
                  <Image
                    src={folderBlog}
                    loading="lazy"
                    className="imageIconStyle"
                  />
                </Center>
              </Link>
            </Button>
          </Box>
        </ParallaxLayer>
      </Box>
    </React.Fragment>
  );
};

export default PassionDesktop;
