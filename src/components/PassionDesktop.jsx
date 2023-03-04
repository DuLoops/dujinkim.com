import { Box, Heading, Image } from "@chakra-ui/react";
import {
  photography,
  sky,
  softwareDevelopment,
  blog,
  gallery,
} from "../resources/images/passion";
import "../styles/passion.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import "../styles/passion.scss";

const PassionDesktop = (props) => {
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
      <ParallaxLayer offset={2.8} speed={0.1} style={{ height: "500px" }}>
        <Image
          src={blog}
          alt="blog"
          position="absolute"
          w="57vw"
          right="2.5rem"
          border="2px solid white"
          p="5px"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2.9} speed={0.3}>
        <Image
          // top="30%"
          src={gallery}
          alt="gallery"
          position="absolute"
          left="3.8rem"
          w="22vw"
          border="2px solid white"
          p="5px"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.4}>
        <Image
          src={sky}
          alt="sky"
          className="containedImage"
          h="180vh"
          filter="blur(1px)"
          boxShadow={"0 0 100px #ADC272"}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={5.5} speed={0.7}>
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
    </>
  );
};

export default PassionDesktop;

// <ParallaxLayer sticky={{ start: 2.5, end: 3.8 }}>
//   <Box
//     border="#1C1D1F solid"
//     boxSizing="content-box"
//     borderWidth={"2rem 2rem 40vh 50px"}
//     h="61vh"
//     w="57vw"
//     position="absolute"
//     top="0"
//     right={"0"}
//     zIndex={0}
//   ></Box>
// </ParallaxLayer>
// <ParallaxLayer sticky={{ start: 2.5, end: 3.8 }}>
//   <Image
//     src={monitor}
//     alt="monitor"
//     position="absolute"
//     h="85vh"
//     w="60vw"
//     right="1rem"
//     top="1rem"
//   />
// </ParallaxLayer>
// <ParallaxLayer sticky={{ start: 2.5, end: 3.8 }}>
//   <Box
//     border="#1C1D1F solid"
//     boxSizing="content-box"
//     borderWidth={"3.8rem 2rem 150px 3.8rem"}
//     h="82vh"
//     w="22vw"
//     position="absolute"
//     top="0"
//     left={"0"}
//     zIndex={0}
//   ></Box>
// </ParallaxLayer>
// <ParallaxLayer sticky={{ start: 2.5, end: 3.8 }}>
//   <Image
//     src={mobile}
//     alt="gallery"
//     h="88vh"
//     w="26vw"
//     position="absolute"
//     top="2rem"
//     left="2rem"
//   />
// </ParallaxLayer>
