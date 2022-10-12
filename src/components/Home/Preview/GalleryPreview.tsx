import { Box, Heading } from "@chakra-ui/react";
import WordWave from "../../UI/textAnimation/WordWave";

const GalleryPreview = (props: any) => {
  const desc = "Photo & Design";

  return (
    <Box>
      <Heading size="2xl" color={"white"}>
        Gallery
      </Heading>
      <Heading size="xl" mt="1rem" color={"light.100"}>
        {props.play ? (
          <WordWave isArray={false} text={desc} duration={0.2} delay={0.2} />
        ) : (
          <p>{ desc }</p>
        )}
      </Heading>
    </Box>
  );
};

export default GalleryPreview;
