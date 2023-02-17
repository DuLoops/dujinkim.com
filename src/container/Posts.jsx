import { Box, Heading, Link, Button } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box textAlign={"center"} mt="100px">
      <Heading width={"70%"} margin="auto" borderBottom={"3px solid"} pb="5px">
        Posts
      </Heading>
      <Button colorScheme="teal" variant="outline" mt="10px">
        <Link href="https://duloops.com">View Blog</Link>
      </Button>
    </Box>
  );
};

export default Projects;
