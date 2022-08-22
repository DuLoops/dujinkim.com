import { Box, Heading } from "@chakra-ui/react";
import WordWave from "../../UI/textAnimation/WordWave";

const GalleryPreview = (props: any) => {
  return (
    <Box>
      <Heading size="4xl" color={'white'}>Gallery</Heading>
      <Heading size="2xl" mt='1rem' color={'light.100'}>
        {props.play ? (
          <WordWave
            isArray={false}
            text={"PHOTO + VIDEO + DESIGN"}
            duration={0.2}
            delay={0}
          />
        ) : (
          "PHOTO + VIDEO + DESIGN"
        )}
      </Heading>
    </Box>
  );
};

export default GalleryPreview;
