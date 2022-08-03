import Connect from "./Connect";
import Hamberger from "./Hamberger";

import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";

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
          <Hamberger isOpen={isOpen} setOpen={setOpen}/>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;
