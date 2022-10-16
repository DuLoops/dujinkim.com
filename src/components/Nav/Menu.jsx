import { HStack, Button, useColorMode, Link, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import sun from "../../resources/svg/sun.svg";
import moon from "../../resources/svg/moon.svg";
import moon2 from "../../resources/svg/moon2.svg";

const DarkmodeLabel = styled.label`
  width: 60px;
  height: 25px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.3s;
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
`;

const DarkmodeInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  
  &:checked + label {
    background: #242424;
  }
  &:checked + label:after {
    left: 55px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
  }
`;

const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = useLocation().pathname;

  const links = [
    ["Home", "/"],
    ["Gallery", "/gallery"],
    ["Blog", "/blog"],
    ["About", "/about"],
  ];

  return (
    <HStack
      as={"nav"}
      spacing={5}
      color="black"
      display={{ base: "none", md: "flex" }}
      justifySelf='right'
    >
      {links.map((link, index) => (
        <Link
          key={index}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            color: colorMode == "light" ? "gray.400" : "white",
          }}
          style={pathname == link[1] ? { textDecoration: "underline" } : {}}
          href={link[1]}
          color={colorMode == "light" ? "black" : "gray.400"}
        >
          {link[0]}
        </Link>
      ))}

      <DarkmodeInput
        type="checkbox"
        id="darkmode-toggle"
        checked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default Menu;
