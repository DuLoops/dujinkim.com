import { Button, useColorMode, Image, requiredChakraThemeKeys} from "@chakra-ui/react";

import LogoLight from "../resources/images/logo/DuJin-green-light.png"
import LogoDark from "../resources/images/logo/DuJin-orange.png"

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <Button onClick={toggleColorMode} bg="brandGreen.400" color="brandGreen.100">
      Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Image 
        src={colorMode === "light" ? LogoLight : LogoDark} 
        alt="Logo"
        boxSize='100px'/>
    </nav>
  );
};

export default Nav;
