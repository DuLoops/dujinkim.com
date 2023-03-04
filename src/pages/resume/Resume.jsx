import { Box, Flex, Link, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";
const Resume = () => {
  return (
    <Flex
      flexDir="column"
      m="auto"
      w={{ sm: "90vw", md: "80vw", lg: "70vw" }}
      mt="3rem"
    >
      <Box>
        <Box textAlign={"center"}>
          <Heading>Dujin Kim</Heading>
          <Link href="mailto:dujink2@gmail.com">dujink2@gmail.com</Link>
          <Button ml='1rem'><RouterLink to='/contact'>Contact</RouterLink></Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Resume;
