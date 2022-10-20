import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import WordWave from "../ui/textAnimation/WordWave";
import LetterWave from "../ui/textAnimation/LetterWave";
import { motion } from "framer-motion";

import {
  PhotographerMe,
  BloggerMe,
} from "../../resources/images/dev/aboutPhoto";

interface propType {
  isScroll: boolean;
}
const LandingDesc = (props: propType) => {
  return (
    <Box position={"relative"}>
      {/* <Grid templateColumns={"1fr 1fr"} templateRows="380px" height={'300px'} overflow='hidden'> */}
      <Box >
        <Image src={PhotographerMe} alt="PhotographerMe" width={'50%'} float='left' height='300px'/>
        <Image src={BloggerMe} alt="BloggerMe" width={'50%'} height='300px'/>
      </Box>
      {/* </Grid> */}
      <Box
        position={"absolute"}
        className='center'
        textAlign="center"
        backgroundColor="light.300"
        display={"block"}

      >
        <Text
          display={"inline-block"}
          fontSize="xl"
          color="brandYellow.200"
          padding={"10px"}
          borderRadius="3px"
        >
          I also like to <br />
          Photograph & Blog
        </Text>
      </Box>
    </Box>
  );
};

export default LandingDesc;
