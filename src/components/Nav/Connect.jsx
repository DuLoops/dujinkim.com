import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flex, Text, useBoolean, useColorMode } from "@chakra-ui/react";



const ConnectIcon = styled(motion.div)`
height: 2px;
background-color: ${props=>props.colormode == 'light' ? 'black' : '#A0AEC0'};
width: 40px;
`;

const Connect = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const [connectHover, setConnectHover] = useBoolean();


  return (
    <Link
    to={"/contact"}
    onMouseEnter={setConnectHover.on}
    onMouseLeave={setConnectHover.off}
  >
    <Flex alignItems={"center"}>
      <ConnectIcon
        layout
        animate={{ width: connectHover ? "60px" : "40px" }}
        transition={{ type: "Inertia" }}
        colormode={colorMode}
      />
      <Text fontSize={"2xl"} ml="3" color={colorMode == 'light' ? 'black' : 'gray.400'}>
        CONNECT
      </Text>
    </Flex>
  </Link>
  )
}

export default Connect;