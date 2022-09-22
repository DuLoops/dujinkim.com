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
import { Link as RouterLink } from "react-router-dom";

import { ReactNode, useState } from "react";
import { logo } from "../resources/images/logo";
const Links = ["Home", "Gallery", "Blog", "About"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box backgroundColor="white">
      <Flex alignItems={"center"} justifyContent="space-between">
        <Connect />
        <RouterLink to={"/"}>
          <Image
            src={logo}
            alt="logo"
            boxSize="50px"
            position={"absolute"}
            top="10px"
            left={"50%"}
            transform="translate(-50%, 0)"
          />
        </RouterLink>
        <HStack spacing={8} alignItems={"center"}>
          {isOpen && (
            <HStack
              as={"nav"}
              spacing={4}
              color="black"
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
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
