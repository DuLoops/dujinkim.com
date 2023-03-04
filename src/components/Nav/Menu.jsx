import { HStack, useColorMode, Link as ChakraLink } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Menu = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  return (
    <HStack
      as={"nav"}
      spacing={5}
      color="black"
      display={{ base: "none", md: "flex" }}
      justifySelf="right"
    >
      {props.links.map((link, index) => (
        <ChakraLink
          key={index}
          to={link[1]}
          rounded={"md"}
          _hover={{
            textDecor: "underline",
            color: colorMode == "light" ? "red.500" : "green.100",
          }}
          color={colorMode == "light" ? "red.300" : "brandGreen.400"}
          fontSize={"lg"}
          fontWeight="500"
          textDecor={location.pathname == link[1] ? "underline" : "none"}
          onClick={() => {
            navigate(link[1]);
          }}
        >
          {link[0]}
        </ChakraLink>
      ))}
    </HStack>
  );
};

export default Menu;
