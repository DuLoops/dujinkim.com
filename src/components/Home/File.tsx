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
        scale: 1.2,
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
        marginX="1rem"
        w="150px"
        h={"180px"}
        position='relative'
      >
        <Link to={props.link} className="link">
          <Image
            src={props.img}
            alt={props.alt}
            margin="auto"
            marginY="auto"
            objectFit="fill"
            maxW="150px"
            maxH={"130px"}
          />{" "}
          <Text fontSize="2xl" color={"white"} position='absolute' left='50%' bottom='-5px' transform={'translate(-50%, 0)'}>
            {props.title}
          </Text>
        </Link>
      </Center>
    </motion.div>
  );
};

export default File;
