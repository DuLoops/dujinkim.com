import {
  Box,
  Text,
  Image,
  useMediaQuery,
  Heading,
  Highlight,
  Tooltip,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import styled from "styled-components";
import { sky } from "../resources/images/dev/aboutPhoto";
import LandingMobileDesc from "../components/LandingMobileDesc";
import { motion } from "framer-motion";
import { AiOutlineCaretDown } from "react-icons/ai";
const LandingMobile = (props) => {
  return (
    <Box position="relative">
      <Image
        src={sky}
        alt={"skyPicture"}
        w="100vw"
        h="100vh"
        objectFit={"cover"}
        // filter={showTitle ? "blur(4px)" : "none"}
        filter="blur(3px)"
      />
      <Box
        textAlign={"center"}
        position="absolute"
        top="50vh"
        left="50%"
        transform={"translate(-50%,-50%)"}
        background="blackAlpha.500"
        p="10px"
        borderRadius={"3xl"}
        // border={'5px solid rgba(0,0,0,0.3)'}
        boxShadow={"0px 0px 15px rgba(0,0,0,0.8)"}
        // boxShadow='outline'
        color="analogous.3"
      >
        <Heading
          fontSize="6rem"
          fontFamily={"Raleway"}
          fontWeight="500"
          textShadow={"3px 3px #B0166A"}
        >
          Du
          <Highlight
            query={"Jin"}
            styles={{ color: "analogous.1", textShadow: "3px 3px #B0166A" }}
          >
            Jin
          </Highlight>
        </Heading>
        <Heading
          fontSize="6rem"
          fontFamily={"Raleway"}
          fontWeight="500"
          color={"analogous.2"}
          textShadow={"3px 3px #B0166A"}
        >
          Kim
        </Heading>
      </Box>
      {props.showTitle && (
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5 }}
        >
          <Flex
            position="absolute"
            top="90vh"
            left="50%"
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
      <LandingMobileDesc />
    </Box>
  );
};

export default LandingMobile;
