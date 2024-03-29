import { Image, Center } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import LogoAnimation from "./LogoAnimation";
import { useState, useEffect } from "react";
const LandingAnimation = () => {
  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#1C1D1F",
        zIndex: 3,
      }}
      animate={{
        scale: 0.1,
        translateY: "-50vh",
        opacity: 0.5,
        background: "none",
      }}
      transition={{ duration: 1, delay: 3.5 }}
    >
      {/* <Center
        w={{ sm: "90%", md: "40%" }}
        maxH="100%"
        marginX="auto"
        marginTop={{ sm: "40%", md: "50px" }}
      > */}
      <LogoAnimation />
      {/* </Center> */}
    </motion.div>
  );
};

export default LandingAnimation;
