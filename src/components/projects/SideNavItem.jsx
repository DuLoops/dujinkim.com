import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  StackDivider,
  Grid,
  Tag,
  Center,
} from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";
import { CustomCursorContext } from "../../hooks/CustomCursorContext";
export default function SideNavItem(props) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { setCursor } = React.useContext(CustomCursorContext);

  const handleHover = () => {
    if (!props.isSet) {
      setIsHovered(true);
      props.setSelectedProject(props.project);
    }
  };

  const handleLeave = () => {
    if (!props.isSet) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    if (props.isSet && props.selectedProject !== props.project) {
      setIsHovered(false);
    }
  }, [props.selectedProject]);

  const handleClick = () => {
    if (props.isSet && props.selectedProject === props.project) {
      setCursor("project");
      props.setIsSet(false);
      setIsHovered(false);
    } else if (props.isSet && props.selectedProject !== props.project) {
      props.setSelectedProject(props.project);
      setIsHovered(true);
    } else {
      setCursor("default");
      props.setIsSet(true);
    }
  };

  const titleVariants = {
    default: {
      fontSize: "3.5vw",
      fontWeight: "400",
      width: "75%",
      whiteSpace: "nowrap",
      textAlign: "left",
      float: "right",
    },
    hover: {
      fontSize: "5vw",
      fontWeight: "500",
      width: "100%",
      whiteSpace: "normal",
      textAlign: "center",
      float: "none",
    },
  };
  return (
    <Center
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      p="1rem 0.5rem"
      w="100%"
    >
      <motion.div
        animate={{
          display: isHovered ? "none" : "block",
        }}
        transition={{ duration: 0.1 }}
        style={{ width: "20%", float: "left", marginRight: "1rem" }}
        layout
      >
        <Flex flexWrap="wrap" justifyContent={"center"} gap="8px">
          {props.project.tech.map((item, index) => (
            <Tag key={index} colorScheme={item.color} size="md">
              {item.name}
            </Tag>
          ))}
        </Flex>
      </motion.div>

      <motion.div
        style={
          ({
            paddingLeft: "1rem",
          },
          isHovered && {
            background: props.project.background,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          })
        }
        variants={titleVariants}
        animate={isHovered ? "hover" : "default"}
        transition={{ type: "linear" }}
      >
        {props.project.title}
      </motion.div>
    </Center>
  );
}
