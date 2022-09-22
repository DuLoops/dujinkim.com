import Nav from "../container/Nav";
import Landing from "../container/about/Landing";
import Content from "../container/about/Content"
import { Box, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { logo, logoTop, logoBottom } from "../resources/images/logo";
import { useEffect, useState } from "react";
import Contact from "../container/ContactForm";

const About = () => {
  const [isLanding, setIsLanding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLanding(false);
    }, 3000);
  }, []);
  return (
    <Box backgroundColor={"white"}>
      <AnimatePresence>
        {isLanding && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Image
              src={logo}
              alt="logo"
              position={"absolute"}
              zIndex="1"
              backgroundColor="white"
              objectFit={"contain"}
              width="100vw"
              h="100vh"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isLanding && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <Nav />
            <Landing />
            
            <Content />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default About;
