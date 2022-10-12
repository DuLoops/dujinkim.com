import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";

import GalleryPreview from "./preview/GalleryPreview";
import BlogPreview from "./preview/BlogPreview";
import AboutPreview from "./preview/AboutPreview";

interface props {
  isHover: boolean;
  previewAddress: String;
}

const animate = { gallery: true, blog: true, about: true };

const HomePreview = (props: props) => {
  const [currentPreview, setCurrentPreview] = useState(
    <></>
  );

  useEffect(() => {
    setCurrentPreview(selectPreview(props.previewAddress));
  }, [props.previewAddress]);

  useEffect(() => {
    animate.gallery = true;
    animate.blog = true;
    animate.about = true;
  }, [props.isHover])

  const selectPreview = (link: String) => {
    switch (link) {
      case "/gallery":
        if (animate.gallery) {
          animate.gallery = false;
          return <GalleryPreview play={true} />;
        }
        return <GalleryPreview play={false} />;
        break;
      case "/blog":
        if (animate.blog) {
          animate.blog = false;
          return <BlogPreview play={true} />;
        }
        return <BlogPreview play={false} />;
        break;
      case "/about":
        if (animate.about) {
          animate.about = false;
          return <AboutPreview play={true} />;
        }
        return <AboutPreview play={false} />;
        break;
      default:
        return <GalleryPreview play={false} />;
    }
  };

  return (
    <AnimatePresence>
      {props.isHover ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: "-5rem" }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <Box
            margin="10rem auto"
            width="60vw"
            // height="40vh"
            zIndex="1"
            backgroundColor="darkGlass.300"
            borderRadius="1rem"
            backdrop-filter="blur(5px)"
            padding="2rem"
          >
            {currentPreview}
          </Box>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default HomePreview;
