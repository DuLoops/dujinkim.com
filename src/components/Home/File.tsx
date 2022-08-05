import { Link } from "react-router-dom";
import {
  Container,
  Image,
  Flex,
  Text,
  Box,
  Center,
  AspectRatio,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface fileProps {
  title: string;
  img: any;
  alt: string;
  link: string;
  setViewAddress: Function;
}

const File = (props: fileProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(255,255,255, 0.3)",
        borderRadius: "1rem",
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Center
        textAlign="center"
        onMouseEnter={(event) => {
          props.setViewAddress(props.link);
        }}

        paddingX="1rem"
      >
        <Link to={props.link} className="link">
          <Image
            src={props.img}
            alt={props.alt}
            margin="auto"
            w={{ base: 150, xl: 200 }}
            height={{ base: 150, xl: 200 }}
            objectFit='scale-down'
          />
          <Text fontSize="4xl" color='white'>{props.title}</Text>
        </Link>
      </Center>
    </motion.div>
  );
};

export default File;
