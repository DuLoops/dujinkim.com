import { Box, useColorMode, useMediaQuery, Image } from "@chakra-ui/react";
import { useEffect, useState, useRef, useContext } from "react";
import "../styles/style.scss";
import LandingAnimation from "../components/LandingAnimation";
import Nav from "../container/Nav";
import LandingDesktop from "../container/LandingDesktop";
import BottomNav from "../container/BottomNav";
import { laptop } from "../resources/images/aboutPhoto";
import logo from "../resources/images/logo.png";
import { CustomCursorContext } from "../hooks/CustomCursorContext";
import StarParticles from "../components/ui/StarParticles";
import Mobile from "../container/Mobile";
const About = () => {
  const animationPlayed = sessionStorage.getItem("animationPlayed");
  const { setCursor } = useContext(CustomCursorContext);
  const [isLanding, setIsLanding] = useState(!animationPlayed);
  const [isMobile] = useMediaQuery("(max-width: 980px)");
  useEffect(() => {

      setCursor("default");

    if (isLanding) {
      sessionStorage.setItem("animationPlayed", "true");

      const loadingTimeout = setTimeout(() => {
        setIsLanding(false);
      }, 4100);
      return () => clearTimeout(loadingTimeout);
    }
  }, []);

  if (isMobile) {
    return <Mobile isLanding={isLanding} />;
  }

  return (
    <Box
      position="relative"
      w="100vw"
      h="100vh"
      textAlign={"center"}
      backgroundImage={laptop}
      backgroundSize={"cover"}
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
    >
      {isLanding && <LandingAnimation />}
      <Nav setCursor={setCursor} />
      <Image
        src={logo}
        alt="logo"
        boxSize="60px"
        p="5px"
        pos={"absolute"}
        left="50%"
        transform={"translate(-50%,0)"}
      />
      {!isLanding && (
        <LandingDesktop showTitle={!isLanding} setCursor={setCursor} />
      )}
      {!isLanding && !isMobile && <BottomNav setCursor={setCursor} />}
      {/* <StarParticles/> */}
    </Box>
  );
};

export default About;
