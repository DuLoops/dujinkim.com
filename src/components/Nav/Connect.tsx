import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flex, Text, useBoolean } from "@chakra-ui/react";


const ConnectIcon = styled(motion.div)`
  height: 2px;
  background-color: black;
  width: 40px;
`;

const Connect = () => {
  const [connectHover, setConnectHover] = useBoolean();


  return (
    <Link
    to={"/connect"}
    onMouseEnter={setConnectHover.on}
    onMouseLeave={setConnectHover.off}
  >
    <Flex alignItems={"center"}>
      <ConnectIcon
        layout
        animate={{ width: connectHover ? "60px" : "40px" }}
        transition={{ type: "Inertia" }}
      />
      <Text fontSize={"2xl"} color={"black"} ml="3">
        CONNECT
      </Text>
    </Flex>
  </Link>
  )
}

export default Connect;