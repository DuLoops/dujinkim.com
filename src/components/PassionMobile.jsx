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
  photography,
  sky,
  softwareDevelopment,
  softwareMobile,
  blog,
  gallery,
  mobile,
  monitor,
} from "../resources/images/passion";
import "../styles/passion.scss";
import { SiCodesandbox } from "react-icons/si";
import { folderGallery, folderBlog } from "../resources/images/icons";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";
import "../styles/passion.scss";

const PassionDesktop = (props) => {
  const gaEventTracker = useAnalyticsEventTracker("passion");
  return (
    <>
      <ParallaxLayer offset={0.9}>
        <Heading
          borderBottom="5px solid"
          width={"50%"}
          m="auto"
          mb="5rem"
          p={"20px"}
        >
          My passions are
        </Heading>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.5}
        speed={0.5}
        style={{ zIndex: 0, position: "relative" }}
      >
        <Image
          src={softwareDevelopment}
          alt="softwareDevelopment"
          className="containedImage"
          h="120vh"
          boxShadow={"0 0 200px #6A96BB"}
        />
      </ParallaxLayer>
      <Box>
        <ParallaxLayer offset={2.5} speed={0.5}>
          <Image
            src={mobile}
            position="absolute"
            alt="skiing"
            w="40%"
            right="10%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={1.8}>
          <Image
            // top="30%"
            src={monitor}
            alt="climbing"
            w="30%"
            left="8%"
            position="absolute"
          />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={2.9} speed={0.8}>
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
        <ParallaxLayer offset={2.9} speed={1.8}>
          <Image
            src={duloops2}
            alt="moonwalk"
            position={"absolute"}
            w="30%"
            right="5%"
            bottom="120%"
          />
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={3} speed={1.2}>
          <Heading fontSize="15rem" fontWeight={"300"} color="gray">
            &
          </Heading>
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.5}>
          <Image
            src={sky}
            alt="sky"
            className="containedImage"
            h="180vh"
            filter="blur(1px)"
            boxShadow={"0 0 100px #ADC272"}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.4}>
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
        </ParallaxLayer> */}
      </Box>
    </>
  );
};

export default PassionDesktop;
