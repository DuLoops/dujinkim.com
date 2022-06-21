import { Link } from "react-router-dom";
import { Flex, Container, Heading } from "@chakra-ui/react";

import  "./home.scss";

import backgroundImg from "../resources/images/dev/SideCountry.jpg";
import backgroundImgDark from "../resources/images/dev/Dark_lum_clear-0356.jpg";


const Home = () => {
  return (
    <Flex 
      bgImage={backgroundImgDark} 
      height="100vh"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
      align="center"
      textAlign="center">
      <Container className="container">
        <Link to="/gallery"
          className="link">
          <Heading size='4xl'>Gallery</Heading>
        </Link>
      </Container>
      <Container className="home--about">
        <Link to="/about"
         className="link">
          <Heading size='4xl'>About</Heading>
        </Link>
      </Container>
      <Container className="home--blog">
        <Link to="/blog"
         className="link">
          <Heading size='4xl'
            className="heading"
            >Blog</Heading>
        </Link>
      </Container>
    </Flex>
  );
};

export default Home;
