import { Image, Center, useColorMode } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../resources/images/logo.png";
const LandingAnimation = () => {
  const { colorMode } = useColorMode();

  return (
    <Center m="auto" position="relative" h="100%" w="100%">
      <Image src={logo} alt="1" w="100%" h="100%" objectFit={"contain"} />
      <motion.div
        style={{
          position: "absolute",
          backgroundColor: colorMode == "light" ? "white" : "#1C1D1F",
          width: "100%",
          height: "10%",
          top: "0",
          right: 0,
        }}
        animate={{
          width: "0",
        }}
        transition={{ duration: 0.8, type: "linear" }}
      />
      <motion.div
        style={{
          position: "absolute",
          backgroundColor: colorMode == "light" ? "white" : "#1C1D1F",
          width: "100%",
          height: "31%",
          bottom: "59%",
          right: 0,
        }}
        animate={{
          width: "0",
          h: "0",
        }}
        transition={{ duration: 1.3, delay: 1, type: "linear" }}
      />
      <motion.div
        style={{
          position: "absolute",
          backgroundColor: colorMode == "light" ? "white" : "#1C1D1F",
          width: "100%",
          height: "60%",
          bottom: 0,
          right: 0,
        }}
        animate={{
          width: "0",
        }}
        transition={{ duration: 1, delay: 2.5 }}
      />
    </Center>
  );
};

export default LandingAnimation;
