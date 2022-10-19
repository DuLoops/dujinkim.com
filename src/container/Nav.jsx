import DarkmodeToggle from "../components/nav/DarkmodeToggle";
import Menu from "../components/nav/Menu";
import { Box, Image, Grid, useColorMode } from "@chakra-ui/react";
import { logo } from "../resources/images/logo";

const Nav = (props) => {
  return (
    <Grid
      width={"100%"}
      gridTemplateColumns="1fr 1fr 1fr"
      px={"10px"}
      position="absolute"
      zIndex={"1"}
      backgroundColor={
        props.colorMode == "light" ? "rgba(136, 164, 129, 0.9)" : "blackAlpha.900"
      }
      boxShadow={      
        props.colorMode == "light"
          ? "0px 5px 20px rgba(161, 189, 154, 0.7)"
          : "0px 5px 20px rgba(0,0,0,0.7)"
      }
    >
      {!props.isMobile && (
        <DarkmodeToggle
          colorMode={props.colorMode}
          toggleColorMode={props.toggleColorMode}
        />
      )}

      <Box justifySelf={"center"} gridColumnStart='2'>
        <Image src={logo} alt="logo" boxSize="60px" p="5px" />
      </Box>
      {!props.isMobile && <Menu />}
    </Grid>
  );
};

export default Nav;
