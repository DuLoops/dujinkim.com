import { Box, Heading } from "@chakra-ui/react";
import DeveloperProjects from "../components/about/DeveloperProjects";

const Projects = () => {
  return (
    <Box textAlign={"center"} mt='150px'>
      <Heading width={"70%"} margin="auto" borderBottom={"3px solid"} pb="5px">
        Projects
      </Heading>
      <DeveloperProjects />
    </Box>
  );
};

export default Projects;
