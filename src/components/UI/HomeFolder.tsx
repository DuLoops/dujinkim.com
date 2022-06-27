import { Container, Image, Flex, Text, Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import File from "./File";

import {
  folder,
  folderGallery,
  folderBlog,
  PageMe,
} from "../../resources/images/icons";
import "./HomeFolder.scss"

const backgroundStyle = {
  backgroundColor:"rgba(171, 189, 154, 0.6)",
  borderRadius: '1rem'
}

interface HomeFolderProps {
  isHover: boolean,
  setViewAddress: Function
}

const HomeFolder = (props: HomeFolderProps) => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      align={{ base: "center", md: "end" }}
      justifyContent="center"
      px='1rem'
      style={!props.isHover ? backgroundStyle : {}}
    >
      <div
        onMouseEnter={(event) => {
          props.setViewAddress("gallery");
          
        }}
      >
        <File
          link="/gallery"
          desc="Visuals"
          img={folderGallery}
          alt="galleryIcon"
          
        />
      </div>
      <div
        onMouseEnter={() => {
          props.setViewAddress("blog");
        }}
      >
        <File link="/blog" desc="Blog" img={folderBlog} alt="folderBlog" />
      </div>
      <div
        onMouseEnter={() => {
          props.setViewAddress("about");
        }}
      >
        <File link="/about" desc="About.me" img={PageMe} alt="PageMe" />
      </div>
    </Flex>
  );
};

export default HomeFolder;
