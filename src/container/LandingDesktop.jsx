import { Box, Heading, Highlight, Text, Link, Tooltip } from "@chakra-ui/react";
import styled from "styled-components";
import { laptop } from "../resources/images/aboutPhoto";
import { motion } from "framer-motion";
import { MdSdCardAlert } from "react-icons/md";
const colors = {
  lightGlass: "rgba(255,255,255, .5)",
  lightGlass2: "rgba(255,255,255, .9)",
  darkGlass: "rgba(0,0,0, .5)",
  darkGlass2: "rgba(0,0,0, .9)",
};

const Title = styled(Heading)`
  position: absolute;
  top: 30%;
  right: 10%;
  max-width: 600px;
  transform: translatey(0px);
  animation: float 5s ease-in-out 3s;
  text-align: center;

  letter-spacing: 3px;
  font-size: 15px;
  background-color: ${(props) =>
    props.colorMode == "dark" ? colors.darkGlass2 : colors.lightGlass2};
  padding: 25px;
  border-radius: 11px;
  box-shadow: 10px 10px 30px
    ${(props) =>
      props.colorMode == "dark" ? colors.darkGlass2 : colors.lightGlass};
  &:after {
    transform: translatey(0px);
    animation: float2 5s ease-in-out 3s;
    content: ".";
    font-weight: bold;
    -webkit-text-fill-color: ${(props) =>
      props.colorMode == "dark" ? colors.darkGlass : colors.lightGlass};
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 30px;
    border-radius: 11px;
    background-color: ${(props) =>
      props.colorMode == "dark" ? colors.darkGlass : colors.lightGlass};
    position: absolute;
    display: block;
    bottom: -25px;
    left: -3px;
    z-index: -2;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
      box-shadow: 10px 10px 30px
        ${(props) =>
          props.colorMode == "dark" ? colors.darkGlass2 : colors.lightGlass};
    }
    50% {
      transform: translatey(-10px);
      box-shadow: 0px -10px 30px ${(props) => (props.colorMode == "dark" ? colors.darkGlass2 : colors.lightGlass)};
    }
    100% {
      transform: translatey(0px);
      box-shadow: 10px 10px 30px
        ${(props) =>
          props.colorMode == "dark" ? colors.darkGlass2 : colors.lightGlass};
    }
  }

  @keyframes float2 {
    0% {
      line-height: 30px;
      transform: translatey(0px);
    }
    55% {
      transform: translatey(-10px);
    }
    60% {
      line-height: 10px;
    }
    100% {
      line-height: 30px;
      transform: translatey(0px);
    }
  }
`;

const HighlightBeautiful = styled.span`
  color: blue;
`;

const LandingDesktop = (props) => {
  return (
    <Box
      position="relative"
      w="100vw"
      h="100vh"
      backgroundImage={laptop}
      backgroundSize={"cover"}
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
    >
      {props.showTitle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Title
            colorMode={props.colorMode}
            fontSize="xl"
            fontWeight="600"
            fontFamily="Montserrat "
            fontWeight="400"
          >
            Hi! I’m a software developer based in<br/>
            <Highlight
              query={"Beautiful"}
              styles={{
                color: "green.400",
                m: "5px",
                fontSize: "2xl",
                fontWeight: "600",
                fontFamily: "Montserrat Alternates",
              }}
            >
              Beautiful
            </Highlight>
            British Columbia,{" "}
            <Tooltip hasArrow label="Canada">
              🍁
            </Tooltip>
            <br />I like to share my
            <Highlight
              query={"passion"}
              styles={{
                color: props.colorMode == "light" ? "red.300" : "orange.400",
                fontWeight: "600",
                fontSize: "2xl",
                mx: "5px",
                fontFamily: "Montserrat Alternates",
              }}
            >
              passion
            </Highlight>
            on my blog,<br/>
            <Link
              color={props.colorMode == "light" ? "cyan.600" : "cyan.400"}
              textDecor="underline"
              _hover={{
                textDecor: "none",
                fontWeight: "600",
                color: props.colorMode == "light" ? "blue.500" : "blue.400",
              }}
              fontFamily="Montserrat "
              lineHeight={"1.5"}
              fontSize="2xl"
              fontWeight={"400"}
              href="https://duloops.com/"
              target="_blank"
            >
              DuLoops.com
            </Link>
          </Title>
        </motion.div>
      )}
    </Box>
  );
};

export default LandingDesktop;
