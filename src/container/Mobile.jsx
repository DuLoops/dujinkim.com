import React from "react";
import { Box } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Nav from "../container/Nav";
import LandingMobile from "../container/LandingMobile";
import LandingAnimation from "../components/LandingAnimation";
import PassionMobile from "../components/PassionMobile";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { CustomCursorContext } from "../hooks/CustomCursorContext";

export default function Mobile(props) {
  const parallax = React.useRef();
  const { setCursor } = React.useContext(CustomCursorContext);

  React.useEffect(() => {
    setCursor("none");
  }, []);

  return (
    <Box w="100vw" h="100vh" overflow={"hidden"}>
      {props.isLanding && <LandingAnimation />}
      <Parallax
        pages={8}
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
          <Nav parallax={parallax} />
          <LandingMobile />
        </ParallaxLayer>
        <PassionMobile />
        <ParallaxLayer offset={4}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={7}>
          <ContactForm />
        </ParallaxLayer>
        <Footer parallax={parallax} />
      </Parallax>
    </Box>
  );
}
