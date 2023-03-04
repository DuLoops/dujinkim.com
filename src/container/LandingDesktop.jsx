import { Box, Heading, Highlight, Text, Link, Tooltip } from "@chakra-ui/react";
import styled from "styled-components";
import { laptop } from "../resources/images/aboutPhoto";
import { motion } from "framer-motion";
import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";

const colors = {
  lightGlass: "rgba(255,255,255, .5)",
  lightGlass2: "rgba(255,255,255, .9)",
  darkGlass: "rgba(0,0,0, .5)",
  darkGlass2: "rgba(0,0,0, .9)",
};

const Title = styled(Heading)`
  position: absolute;
  top: 25%;
  right: 5%;
  transform: translatey(0px);
  animation: float 5s ease-in-out 3s;
  text-align: center;

  letter-spacing: 3px;
  background-color: ${colors.darkGlass2};
  padding: 25px;
  border-radius: 11px;
  box-shadow: 10px 10px 30px ${colors.darkGlass2};
  &:after {
    transform: translatey(0px);
    animation: float2 5s ease-in-out 3s;
    content: ".";
    font-weight: bold;
    -webkit-text-fill-color: ${colors.darkGlass};
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 30px;
    border-radius: 11px;
    background-color: ${colors.darkGlass2};
    position: absolute;
    display: block;
    bottom: -25px;
    left: -3px;
    z-index: -2;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
      box-shadow: 10px 10px 30px ${colors.darkGlass2};
    }
    50% {
      transform: translatey(-10px);
      box-shadow: 0px -10px 30px ${colors.darkGlass2};
    }
    100% {
      transform: translatey(0px);
      box-shadow: 10px 10px 30px ${colors.darkGlass2};
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

const LandingDesktop = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1, delay: 0.5 }}
      onMouseEnter={() => {
        props.setCursor("hi");
      }}
      onMouseLeave={() => {
        props.setCursor("default");
      }}
    >
      <Title
        zIndex="1"
        cursor="none"
        _hover={{ border: "solid 5px white" }}
        fontSize={{ base: "1rem", lg: "1.4rem", xl: "2rem" }}
        fontFamily="Montserrat "
        fontWeight="2rem"
        color="white"
      >
        <Highlight
          query={"Hi!"}
          styles={{
            color: "blue.400",
            fontWeight: "600",
            fontFamily: "Montserrat Alternates",
          }}
          fontSize={{ lg: "1.7rem", xl: "2.2rem" }}
        >
          Hi!
        </Highlight>{" "}
        I’m a software developer based in
        <br />
        <Highlight
          query={"Beautiful"}
          styles={{
            color: "green.400",
            fontWeight: "600",
            fontFamily: "Montserrat Alternates",
          }}
          fontSize={{ lg: "1.7rem", xl: "2.2rem" }}
        >
          Beautiful
        </Highlight>{" "}
        British Columbia,
        <Tooltip hasArrow label="Canada">
          🍁
        </Tooltip>
        <br />
        <Highlight
          query={"Welcome"}
          styles={{
            color: "orange.400",
            fontWeight: "600",
            fontFamily: "Montserrat Alternates",
          }}
          fontSize={{ lg: "1.7rem", xl: "2.2rem" }}
        >
          Welcome
        </Highlight>{" "}
        to my portfolio!
      </Title>
    </motion.div>
  );
};

export default LandingDesktop;
