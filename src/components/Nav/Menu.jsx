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
            textDecoration: "underline",
            color: colorMode == "light" ? "brandYellow.100" : "brandOrange.100",
          }}
          href={link[1]}
          color={colorMode == "light" ? "brandOrange.100" : "brandYellow.200"}
          fontSize={'lg'}
        >
          {link[0]}
        </Link>
      ))}

    </HStack>
  );
};

export default Menu;
