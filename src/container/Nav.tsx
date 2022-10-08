import Connect from "../components/nav/Connect";
import Hamberger from "../components/nav/Hamberger";

import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { ReactNode, useState } from "react";
import { logo } from "../resources/images/logo";
const Links = [
  ["Home", "/"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
  ["About", "/about"],
];

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = useLocation().pathname;

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
          {isOpen && (
            <HStack
              as={"nav"}
              spacing={4}
              color="black"
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <Link
                  key={index}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  style={
                    pathname == link[1] ? { textDecoration: "underline" } : {}
                  }
                  href={link[1]}
                  color="gray.400"
                >
                  {link[0]}
                </Link>
              ))}
            </HStack>
          )}
          <Hamberger isOpen={isOpen} setOpen={setOpen} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;
