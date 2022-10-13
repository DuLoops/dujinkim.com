import { Container, Image, Flex, Text, Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import File from "./File";

import {
  folder,
  folderGallery,
  folderBlog,
  PageMe,
} from "../../resources/images/icons";

interface HomeFolderProps {
  setPreviewAddress: Function;
}

const HomeFolder = (props: HomeFolderProps) => {
  return (
    <Box backgroundColor="darkGlass.100" p="1rem" borderRadius="1rem">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        align={{ base: "center", md: "end" }}
        justifyContent="center"
        px="1rem"
        gap="2rem"
      >
        <File
          link="/gallery"
          title="Gallery"
          img={folderGallery}
          alt="galleryIcon"
          setViewAddress={props.setPreviewAddress}
        />
        <File
          link="/blog"
          title="Blog"
          img={folderBlog}
          alt="folderBlog"
          setViewAddress={props.setPreviewAddress}
        />
        <File
          link="/about"
          title="About.me"
          img={PageMe}
          alt="PageMe"
          setViewAddress={props.setPreviewAddress}
        />
      </Flex>
    </Box>
  );
};

export default HomeFolder;
