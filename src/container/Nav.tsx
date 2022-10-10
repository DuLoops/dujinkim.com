import Connect from "../components/nav/Connect";
import Hamberger from "../components/nav/Hamberger";
import Menu from "../components/nav/Menu";
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { logo } from "../resources/images/logo";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box>
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        color={"darkGlass.100"}
      >
        <Connect />
        <RouterLink to={"/"}>
          <Image src={logo} alt="logo" boxSize="55px" p="5px" />
        </RouterLink>
        <HStack spacing={8} alignItems={"center"}>
          {isOpen && <Menu />}
          <Hamberger isOpen={isOpen} setOpen={setOpen} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;
