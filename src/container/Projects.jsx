import {Box, Heading} from '@chakra-ui/react'
import DeveloperProjects from '../components/about/DeveloperProjects';

const Projects = () => {
  return (
    <Box mt="100px" textAlign={"center"}>
      <Heading
        width={"70%"}
        margin="auto"
        borderBottom={"3px solid"}
        pb="5px"
      >
        Projects
      </Heading>
      <DeveloperProjects />
    </Box>
  );
};


export default Projects;