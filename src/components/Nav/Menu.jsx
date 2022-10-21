import { HStack, Button, useColorMode, Link, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";


const Menu = (props) => {
  const { colorMode } = useColorMode();

  const links = [
    ["Projects", 5],
    ["Posts", 6],
    ["Contact", 7],
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
            color: colorMode == "light" ? "red.500" : "green.100",
          }}
          onClick={()=>{props.parallax.current.scrollTo(link[1])}}
          color={colorMode == "light" ? "red.300" : "brandGreen.400"}
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
