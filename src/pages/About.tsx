import Nav from "../components/Nav/Nav"
import Landing from "../components/About/Landing";
import Developer from "../components/About/Developer";
import { Box } from "@chakra-ui/react";


const About = () => {
  return (
    <Box backgroundColor={'white'} >
      <Nav />
      <Landing />
      <Developer />
    </Box>
  )
};

export default About;