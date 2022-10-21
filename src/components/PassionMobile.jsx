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
  moonwalk,
  softwareMobile,
} from "../resources/images/passion";
import { AiFillGithub } from "react-icons/ai";
import "../styles/passion.scss";
import { folderGallery, folderBlog } from "../resources/images/icons";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

const PassionMobile = () => {
  let zIndex = 1;

  const handleImageClick = (e) => {
    e.target.style.zIndex = zIndex++;
  };

  return (
    <React.Fragment>
      <ParallaxLayer offset={1.5} speed={0.9}>
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
      <ParallaxLayer offset={1.7} speed={0.6}>
        <Image
          src={softwareMobile}
          alt="softwareMobile"
          className="containedImage"
          // w="100vw"
          h="100vw"
          objectFit={"contain"}
          boxShadow={"0 0 100px #4DA895"}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.9} speed={1}>
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
      <ParallaxLayer offset={2} speed={1}>
        <Image
          src={sky}
          alt="sky"
          className="containedImage"
          h="120vh"
          filter="blur(1px)"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2.2} speed={0.9}>
        <Box
          className="center"
          top="40%"
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
      <ParallaxLayer offset={2.4} speed={0.3}>
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
      <ParallaxLayer offset={2.9} speed="1.3" style={{ top: "350px" }}>
        <Heading fontSize="10rem" fontWeight={"300"} color="gray">
          &
        </Heading>
      </ParallaxLayer>
      <ParallaxLayer  offset={3} speed="1.3" style={{top:'-500px'}}>
        <Image
          src={climbing}
          position="absolute"
          alt="climbing"
          h="50vh"
          right="0"
          onClick={handleImageClick}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed="1.1" style={{top:'-100px'}}>
        <Image
          src={skiing}
          alt="skiing"
          h="50%"
          position="absolute"
          onClick={handleImageClick}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3.6} speed="0.7">
        <Image
          src={drawing}
          alt="drawing"
          position={"absolute"}
          onClick={handleImageClick}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3.9} speed="1.2">
        <Image
          src={moonwalk}
          alt="moonwalk"
          position={"absolute"}
          w="80%"
          right="0"
          // bottom="50px"
          onClick={handleImageClick}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3.4} speed="0.8">
        <Box className="desc" w="90%" position='absolute' left="50%" transform="translateX(-50%)">
          <Heading color={"white"}>
            Storytelling
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
    </React.Fragment>
  );
};

export default PassionMobile;
