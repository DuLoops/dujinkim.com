import Connect from "../components/nav/Connect";
import Menu from "../components/nav/Menu";
import { Box, Image, Grid } from "@chakra-ui/react";
import { logo } from "../resources/images/logo";

const Nav = () => {
  return (
    <Box>
      <Grid width={"100%"} gridTemplateColumns="1fr 1fr 1fr">
        <Connect />
        <Box justifySelf={"center"}>
            <Image src={logo} alt="logo" boxSize="55px" p="5px" />
        </Box>
        <Menu />
      </Grid>
    </Box>
  );
};

export default Nav;
