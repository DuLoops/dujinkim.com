import { Box, Heading, Highlight, Link, Tooltip } from "@chakra-ui/react";

const LandingMobileDesc = (props) => {
  return (
    <Box textAlign={'center'} mt='7rem' mb='13rem'>
      <Heading
        colorMode={props.colorMode}
        fontSize="xl"
        fontFamily="Montserrat "
        fontWeight="00"
      >
        I’m a software developer based in
        <br />
        <Highlight
          query={"Beautiful"}
          styles={{
            color: "green.400",
            m: "5px",
            fontSize: "2xl",
            fontWeight: "600",
            fontFamily: "Montserrat Alternates",
          }}
        >
          Beautiful
        </Highlight>
        British Columbia,
        <Tooltip hasArrow label="Canada">
          🍁
        </Tooltip>
        <br /><br/>I like to share my
        <Highlight
          query={"passion"}
          styles={{
            color: props.colorMode == "light" ? "red.300" : "orange.400",
            fontWeight: "600",
            fontSize: "2xl",
            mx: "5px",
            fontFamily: "Montserrat Alternates",
          }}
        >
          passion
        </Highlight>
        on my blog, 
        <Link
          color={props.colorMode == "light" ? "cyan.600" : "cyan.400"}
          backgroundColor='whiteAlpha.300'
          borderRadius={'5px'}
          m='5px'
          p='3px'
          fontFamily="Montserrat Alternates"
          lineHeight={"1.8"}
          fontSize="2xl"
          fontWeight={"400"}
          href="https://duloops.com/"
          target="_blank"
          boxShadow={'3px 3px 1px'}
        >
          DuLoops.com
        </Link>
      </Heading>
    </Box>
  );
};

export default LandingMobileDesc;
