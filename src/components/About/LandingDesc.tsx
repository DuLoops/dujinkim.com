import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import WordWave from "../UI/TextAnimation/WordWave";
import LetterWave from "../UI/TextAnimation/LetterWave";
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
    <Box position={"relative"} filter='blur(5px)'>
      <Grid templateColumns={"1fr 1fr"} templateRows="380px">
        <Image src={PhotographerMe} alt="PhotographerMe" />
        <Image src={BloggerMe} alt="BloggerMe" />
      </Grid>
      <Box
        position={"absolute"}
        top={"50%"}
        left='50%'
        textAlign='center'
        backgroundColor="light.300" 
        display={'block'}
        transform='translate(-50%, -50%)'
        
      >
        <Text display={'inline-block'} fontSize="xl" color="brandYellow.200" padding={'10px'} borderRadius='3px'>
          I also like to Photograpg & Blog
        </Text>
      </Box>
    </Box>
  );
};

export default LandingDesc;
