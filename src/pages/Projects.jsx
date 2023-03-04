import { Box, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import SideNav from "../container/projects/SideNav";
import ProjectField from "../container/projects/ProjectField";
import Nav from "../container/Nav";
import { projectData } from "../resources/projectData";
import { CustomCursorContext } from "../hooks/CustomCursorContext";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState();
  const { setCursor } = useContext(CustomCursorContext);

  useEffect(() => {
    setCursor("project");
  }, []);
  return (
    <Box>
      <Nav />
      <Grid height="100vh" w="100vw" gridTemplateColumns="1fr 1fr" pt="60px">
        <SideNav
          projects={projectData}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        {selectedProject && <ProjectField project={selectedProject} />}
        {!selectedProject && (
          <Box>
            <Heading mt="10%" textAlign={"center"}>
              Select a project
            </Heading>
            <Spinner size="xl" mt="20%  " mx="auto" display={'block'} />
          </Box>
        )}
      </Grid>
    </Box>
  );
}
