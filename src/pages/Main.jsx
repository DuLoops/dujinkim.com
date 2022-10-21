import { Box, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import LandingAnimation from "../components/LandingAnimation";
import Nav from "../container/Nav";
import LandingDesktop from "../container/LandingDesktop";
import LandingMobile from "../container/LandingMobile";
import Content from "../container/Content";
import Contact from "../container/ContactForm";
import "../styles/style.scss";
import Projects from "../container/Projects";
import Posts from "../container/Posts";
import Footer from "../container/Footer";
import PassionMobile from "../components/PassionMobile";
import PassionDesktop from "../components/PassionDesktop";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLanding, setIsLanding] = useState(true);
  const parallax = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 980px)");
  useEffect(() => {
    setTimeout(() => {
      setIsLanding(false);
    }, 4100);
  }, []);
  return (
    <Box position="relative" w="100vw" h="100vh" textAlign={"center"}>
      {isLanding && <LandingAnimation />}
      <Parallax
        pages={isMobile ? 7 : 8}
        ref={parallax}
        style={{ display: isLanding && "none" }}
      >
        <ParallaxLayer offset={0}>
          <Nav
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            isMobile={isMobile}
            parallax={parallax}
          />
          {isMobile ? (
            <LandingMobile showTitle={!isLanding} />
          ) : (
            <LandingDesktop colorMode={colorMode} showTitle={!isLanding} />
          )}
        </ParallaxLayer>
        {isMobile ? <PassionMobile /> : <PassionDesktop />}
        <ParallaxLayer offset={isMobile ? 4 : 5}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 5 : 6}>
          <Posts />
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 6 : 7}>
          <Contact colorMode={colorMode} />
        </ParallaxLayer>
        <Footer parallax={parallax} />
      </Parallax>
    </Box>
  );
};

export default About;
{
  /* <Nav
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        isMobile={isMobile}
      />
      {isMobile ? (
        <LandingMobile showTitle={!isLanding} />
      ) : (
        <LandingDesktop colorMode={colorMode} showTitle={!isLanding} />
      )}
      <Passion isMobile={isMobile} />
      <Projects />
      <Posts />
      <Contact colorMode={colorMode} />
      <Footer /> */
}
