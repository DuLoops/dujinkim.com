import {
  Box,
  useColorMode,
  useMediaQuery,
  Button,
  Heading,
  Image,
  Icon,
  Link,
  Text,
  Center,
  Flex,
  Grid,
  Highlight,
} from "@chakra-ui/react";
import { useEffect, useState, useRef, useContext } from "react";
import "../styles/style.scss";
import "../styles/passion.scss";
import Nav from "../container/Nav";
import AboutIntro from "../container/AboutIntro";
import LandingMobile from "../container/LandingMobile";
import Contact from "../container/ContactForm";
import Footer from "../container/Footer";
import PassionMobile from "../components/PassionMobile";
import PassionDesktop from "../components/PassionDesktop";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { mobile, monitor } from "../resources/images/passion";
import { SiCodesandbox } from "react-icons/si";
import { folderGallery, folderBlog } from "../resources/images/icons";
import { CustomCursorContext } from "../hooks/CustomCursorContext";
export default function About() {
  const { setCursor } = useContext(CustomCursorContext);
  const [isLanding, setIsLanding] = useState(true);
  const parallax = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 980px)");

  const Software = () => (
    <Box className={"center desc"} boxShadow="dark-lg" color="white" w="auto">
      <Heading>Software Development</Heading>
      <Text my="1rem" fontSize="1.2rem" whiteSpace={"nowrap"}>
        For me, building software is a perfect outlet to{" "}
        <Highlight
          query={"create"}
          styles={{
            color: "blue.400",
            fontWeight: "600",
            fontFamily: "Montserrat Alternates",
          }}
        >
          create
        </Highlight>{" "}
        and{" "}
        <Highlight
          query={"problem-solve"}
          styles={{
            color: "green.400",
            fontWeight: "600",
            fontFamily: "Montserrat Alternates",
          }}
        >
          problem-solve
        </Highlight>
        .
        <br />I love the process of taking an idea and turning it into a
        functioning program.
      </Text>
      <Button _hover={{ color: "blue.400" }} mt="10px" colorScheme={"cyan"}>
        <Link href="https://github.com/DuLoops" target="_blank">
          <Center>
            View Projects
            <Icon as={SiCodesandbox} className="iconStyle" boxSize={8} />
          </Center>
        </Link>
      </Button>
    </Box>
  );

  const Blogging = () => (
    <Box className="desc center" position="absolute" p="30px">
      <Heading color={"white"}>Blogging</Heading>
      <Text my="1rem" fontSize="1.2rem">
        I've developed my personal blog,{" "}
        <Highlight
          query={"duloops.com"}
          styles={{
            color: "orange.400",
            fontWeight: "600",
            fontFamily: "Montserrat Alternates",
          }}
        >
          duloops.com
        </Highlight>
        , as a way to <b>grow</b> and <b>document</b> my knowledge, skills, and
        passions.{" "}
      </Text>
      <Button
        _hover={{ color: "red.400" }}
        p="25px 10px"
        colorScheme="orange"
        mt="10px"
      >
        <Link href="https://duloops.com/" target="_blank">
          <Center>
            View Blog
            <Image src={folderBlog} loading="lazy" className="imageIconStyle" />
          </Center>
        </Link>
      </Button>
    </Box>
  );

  const Photography = () => (
    <Box className="center desc" top={{ sm: "300px", md: "75%" }}>
      <Heading color="white">Photography</Heading>
      <Text my="1rem" fontSize="1.2rem" whiteSpace={"nowrap"}>
        I enjoy capturing the beauty of nature and people around me.
      </Text>
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
  );
  return (
    <Box w="100vw" h="100vh" overflow={"hidden"}>
      <Parallax
        pages={isMobile ? 7 : 8}
        ref={parallax}
        style={{
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <ParallaxLayer offset={0}>
          <Nav />
          {isMobile ? (
            <LandingMobile showTitle={!isLanding} />
          ) : (
            <AboutIntro setCursor={setCursor} />
          )}
        </ParallaxLayer>
        {isMobile ? <PassionMobile /> : <PassionDesktop />}
        <ParallaxLayer offset={isMobile ? 6 : 7}>
          <Contact />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 1.7 }}>
          <Software />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 2.5, end: 3.8 }}>
          <Blogging />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 4.5, end: 5.4 }}>
          <Photography />
        </ParallaxLayer>
        <Footer parallax={parallax} />
      </Parallax>
    </Box>
  );
}
