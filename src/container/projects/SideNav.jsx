import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  StackDivider,
  Grid,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import SideNavItem from "../../components/projects/SideNavItem";
export default function SideNav(props) {
  const [isSet, setIsSet] = React.useState(false);
  return (
    <VStack
      flexDir={"column"}
      h="100%"
      overflow={"scroll"}
      className="hideScrollbar"
      alignItems={"right"}
      textAlign={"right"}
      borderRight="1px solid white"
      divider={<StackDivider borderColor="gray.200" />}
    >
      {props.projects.map((project, index) => {
        return (
          <SideNavItem
            key={index}
            project={project}
            selectedProject={props.selectedProject}
            setSelectedProject={props.setSelectedProject}
            isSet={isSet}
            setIsSet={setIsSet}
          />
        );
      })}
    </VStack>
  );
}
