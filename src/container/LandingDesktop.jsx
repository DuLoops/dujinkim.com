import { Box, Text, Image, useMediaQuery, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { laptop } from "../resources/images/dev/aboutPhoto";
import { motion } from "framer-motion";
const colors = {
  neutralGreen: "#a1bd9a",
  brandGreen: "#163832",
  brandGreen2: "#235347",
  brandYellow: "#E19820",
  brandOrange: "#F7893B",
};

const Title = styled(Heading)`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 15px;
  color: ${(props) =>
    props.colorMode == "dark" ? colors.brandYellow : colors.brandOrange};
  background-color: ${(props) =>
    props.colorMode == "dark" ? colors.brandGreen : colors.neutralGreen};
  padding: 50px;
  border-radius: 11px;
  box-shadow: 20px 20px
    ${(props) =>
      props.colorMode == "dark" ? colors.neutralGreen : colors.brandGreen};
  &:after {
    transform: translatey(0px);
    animation: float2 5s ease-in-out infinite;
    content: ".";
    font-weight: bold;
    -webkit-text-fill-color: ${(props) =>
      props.colorMode == "dark" ? colors.brandGreen : colors.neutralGreen};
    text-shadow: 22px 22px
      ${(props) =>
        props.colorMode == "dark" ? colors.neutralGreen : colors.brandGreen};
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 30px;
    border-radius: 11px;
    background-color: ${(props) =>
      props.colorMode == "dark" ? colors.brandGreen : colors.neutralGreen};
    position: absolute;
    display: block;
    bottom: -30px;
    left: 0;
    box-shadow: 22px 22px
      ${(props) =>
        props.colorMode == "dark" ? colors.neutralGreen : colors.brandGreen};
    z-index: -2;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @keyframes float2 {
    0% {
      line-height: 30px;
      transform: translatey(0px);
    }
    55% {
      transform: translatey(-20px);
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
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Title colorMode={props.colorMode}>-"MOUTAIN NERD"</Title>
        </motion.div>
      )}
    </Box>
  );
};

export default LandingDesktop;
