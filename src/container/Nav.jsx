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
        props.colorMode == "light" ? "rgba(35, 83, 71,0.9)" : "blackAlpha.800"
      }
      boxShadow={
        props.colorMode == "light"
          ? "0px 5px 4px rgba(35, 83, 71,0.9)"
          : "0px 5px 5px rgba(0,0,0,0.8)"
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
