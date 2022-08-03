import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import styled from "styled-components";
import { PhotographerMe, laptop } from "../../resources/images/dev/aboutPhoto";
import TextAnimation from "../UI/TextAnimation/WordWave";
// import Typing from "react-typing-animation";

const Name = styled(TextAnimation)`
  font-size: 7rem;
  color: "orange";
`;

const Landing = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Box
      position="relative"
      width="70vw"
      maxWidth={"1400px"}
      marginX="auto"
      paddingTop={"100px"}
      height="100vh"
    >
      <Text color={"black"} fontSize="2xl">
        Web developer / Photographer / Blogger
      </Text>
      <Image
        marginTop="50px"
        src={laptop}
        alt="laptop"
        w="60%"
        maxWidth="1400px"
        zIndex={"0"}
      />
      {/* <Text>
        <div>
        Hi. I’m Dujin
          <Typing loop="true">
            <Typing.Speed ms={50} />
            <span>Web Developer</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
            <span>Programmer</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
            <span>Snowboarder</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
        </div>
      </Text> */}

      <Box className="desc" marginY="100px">
        {/* <Typing speed={50}>
          This line will be typed at 50ms/character,
          <Typing.Speed ms={20} />
          then this will be typed at 20ms/character.
        </Typing> */}
        <Text></Text>
        <Text fontSize="xl">
          Hi. I’m Dujin, a passionate computer science graduate based in
          Vancouver. <br />I am eager to start my career as a web developer!
          <br />
          <br />I also like to photograph and blog.
        </Text>
      </Box>
    </Box>
  );
};

export default Landing;
