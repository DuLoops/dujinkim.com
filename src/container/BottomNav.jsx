import {
  Image,
  Flex,
  Text,
  Box,
  Center,
  Link,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const menus = [
  {
    name: "ABOUT",
    color: "blue.400",
    link: "/about",
  },
  {
    name: "PROJECTS",
    color: "green.400",
    link: "/projects",
  },
  {
    name: "CONTACT",
    color: "orange.400",
    link: "/contact",
  },
];

const Container = styled(motion.div)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  padding-bottom: 2rem;
`;

const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.5,
    },
  },
};

const itemVar = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
export default function BottomNav(props) {
  const navigate = useNavigate();
  return (
    <Container variants={containerVar} initial="hidden" animate="show">
      {menus.map((menu, index) => (
        <motion.div
          key={index}
          variants={itemVar}
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => {
            props.setCursor(menu.name);
          }}
          onMouseLeave={() => {
            props.setCursor("default");
          }}
          onClick={() => {
            props.setCursor("default");
            navigate(menu.link);
          }}
          style={{ zIndex: "1" }}
        >
          <Center
            w="30vw"
            h="20vh"
            bg="blackAlpha.800"
            borderRadius={"2xl"}
            border={"8px solid"}
            borderColor={"whiteAlpha.800"}
            _hover={{
              borderColor: menu.color,
              color: menu.color,
              bg: "black",
            }}
            // position='relative'
            // zIndex="1"
          >
            <Heading
              fontFamily={"Raleway"}
              fontWeight={"400"}
              fontSize={{ md: "2.5rem", lg: "3rem", xl: "4rem" }}
            >
              {menu.name}
            </Heading>
          </Center>
        </motion.div>
      ))}
    </Container>
  );
}
