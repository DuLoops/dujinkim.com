import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LandingAnimation from "../components/LandingAnimation";
import Nav from "../container/Nav";
import LandingDesktop from "../container/LandingDesktop";
import LandingMobile from "../container/LandingMobile";
import Content from "../container/Content";
import Contact from "../container/ContactForm";
import "../styles/style.scss";
import Projects from "../container/Projects";
import Posts from '../container/Posts'
import Footer from "../container/Footer";
import Passion from "../components/Passion";
const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLanding, setIsLanding] = useState(true);

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    setTimeout(() => {
      setIsLanding(false);
    }, 4100);
  }, []);

  return (
    <Box position="relative" h={isLanding ? "100vh" : ""} overflow="hidden">
      {isLanding && <LandingAnimation />}
      <Nav colorMode={colorMode} toggleColorMode={toggleColorMode} isMobile={isMobile}/>
      {isMobile ? (
        <LandingMobile showTitle={!isLanding}/>
      ) : (
        <LandingDesktop colorMode={colorMode} showTitle={!isLanding} />
      )}
      {/* <Content /> */}
      <Passion isMobile={isMobile}/>
      <Projects />
      <Posts />
      <Contact />
      <Footer/>
    </Box>
  );
};

export default About;
