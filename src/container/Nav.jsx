import DarkmodeToggle from "../components/nav/DarkmodeToggle";
import Menu from "../components/nav/Menu";
import {
  Box,
  Image,
  Grid,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../resources/images/logo.png";
import MobileMenu from "../components/nav/MobileMenu";
import { Link } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const Nav = () => {
  const [isMobile] = useMediaQuery("(max-width: 980px)");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      width={"100%"}
      gridTemplateColumns="1fr 1fr 1fr"
      px={{ md: "10px" }}
      position="absolute"
      zIndex={"1"}
      backgroundColor={{
        sm: "whiteAlpha.300",
        md: colorMode == "light" ? "rgba(87, 109, 81, 0.9)" : "blackAlpha.900",
      }}
      boxShadow={{
        sm: "dark-lg",
        md:
          colorMode == "light"
            ? "0px 5px 20px rgba(161, 189, 154, 0.7)"
            : "0px 5px 20px rgba(0,0,0,0.7)",
      }}
    >
      {/* {!isMobile && (
        <DarkmodeToggle
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
      )} */}

      <Box justifySelf={"center"} gridColumnStart="2">
        <Link to="/">
          <Image src={logo} alt="logo" boxSize="60px" p="5px" />
        </Link>
      </Box>
      {isMobile ? <MobileMenu links={links} /> : <Menu links={links} />}
    </Grid>
  );
};

export default Nav;
