import { HStack, Button, useColorMode, Link, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";


const Menu = () => {
  const { colorMode } = useColorMode();

  const links = [
    ["Projects", "/"],
    ["Posts", "/gallery"],
    ["Contact", "/blog"],
  ];

  return (
    <HStack
      as={"nav"}
      spacing={5}
      color="black"
      display={{ base: "none", md: "flex" }}
      justifySelf="right"
    >
      {links.map((link, index) => (
        <Link
          key={index}
          rounded={"md"}
          _hover={{
            textDecor:'underline',
            color: colorMode == "light" ? "red.500" : "brandOrange.100",
          }}
          href={link[1]}
          color={colorMode == "light" ? "red.300" : "brandYellow.200"}
          fontSize={'lg'}
          fontWeight='500'
        >
          {link[0]}
        </Link>
      ))}

    </HStack>
  );
};

export default Menu;
