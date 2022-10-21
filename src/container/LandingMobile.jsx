import {
  Box,
  Text,
  Image,
  Heading,
  Highlight,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { sky } from "../resources/images/aboutPhoto";
import LandingMobileDesc from "../components/LandingMobileDesc";
import { motion } from "framer-motion";
import { AiOutlineCaretDown } from "react-icons/ai";
import { ParallaxLayer } from "@react-spring/parallax";
const LandingMobile = (props) => {
  const textShadow = "5px 5px#051F20";
  return (
    <Box position="relative">
      <motion.img
        src={sky}
        alt={"skyPicture"}
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        animate={{ filter: ["blur(3px)", "blur(0px)", "blur(3px)"] }}
        transition={{ delay: 4, duration: 13, repeat: 5 }}
      />
      <Box
        textAlign={"center"}
        position="absolute"
        top="50vh"
        left="50%"
        transform={"translate(-50%,-50%)"}
        background="rgba(150,150,150, 0.2)"
        p="25px"
        borderRadius={"150px"}
        boxShadow={"0px 0px 30px rgba(150,150,150, 0.4)"}
      >
        <Heading
          fontSize="6rem"
          fontFamily={"Raleway"}
          fontWeight="500"
          color="analogous.3"
          textShadow={textShadow}
        >
          Du
          <Highlight
            query={"Jin"}
            styles={{ color: "analogous.1", textShadow: textShadow }}
          >
            Jin
          </Highlight>
        </Heading>
        <Heading
          fontSize="6rem"
          fontFamily={"Raleway"}
          fontWeight="500"
          color={"analogous.2"}
          textShadow={textShadow}
        >
          Kim
        </Heading>
      </Box>
      {props.showTitle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: ["0px", "-10px", "0px", "-10px", "0px"],
          }}
          transition={{ delay: 5, duration: 4 }}
          style={{ position: "absolute", top: "90vh", left: "50%" }}
        >
          <Flex
            transform="translateX(-50%)"
            fontSize={"3xl"}
            direction="column"
            alignItems="center"
          >
            <Text>Hello !</Text>
            <Icon as={AiOutlineCaretDown} />
          </Flex>
        </motion.div>
      )}
      <ParallaxLayer offset={1} speed={0.5}>
        <LandingMobileDesc />
      </ParallaxLayer>
    </Box>
  );
};

export default LandingMobile;
