import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, useMediaQuery, Flex, Center } from "@chakra-ui/react";

import "./home.scss";
import HomeFolder from "../components/UI/HomeFolder";

import backgroundImg from "../resources/images/dev/SideCountry.jpg";
import backgroundGreen from "../resources/images/dev/background.jpg";
import backgroundImgDark from "../resources/images/dev/Dark_lum_clear-0356.jpg";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 1280px)");
  const [isHover, setIsHover] = useState(false);
  const [viewAddress, setViewAddress] = useState("");

  return (
    <Box
      className="home"
      bgImage={backgroundGreen}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
      position="relative"
    >
      {isHover ? (
        <Box>
          <h1>{viewAddress}</h1>
        </Box>
      ) : null}
      <Box

        position= 'fixed'
        bottom= '80px'
        left= '50%'
        transform= 'translate(-50%, 0%)'
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <HomeFolder isHover={isHover} setViewAddress={setViewAddress} />
      </Box>
    </Box>
  );
};

export default Home;

// <div className="home--flex">
//   <div className="home--container home--gallery">
//     <Link to="/gallery" className="link">
//       <Heading size="4xl">Gallery</Heading>
//     </Link>
//   </div>
//   <div className="home--container home--about">
//     <Link to="/about" className="link">
//       <Heading size="4xl">About</Heading>
//     </Link>
//   </div>
//   <div className="home--container home--blog">
//     <Link to="/blog" className="link">
//       <Heading size="4xl" className="heading">
//         Blog
//       </Heading>
//     </Link>
//   </div>
//   </div>
{
  /* <Flex
bgImage={backgroundImgDark}
height="100vh"
bgPosition="center"
bgRepeat="no-repeat"
bgSize="cover"
h="100vh"
align="center"
textAlign="center"
gap="0"
>
<Container className="container">
  <Link to="/gallery" className="link">
    <Heading size="4xl">Gallery</Heading>
  </Link>
</Container>
<Container className="container home--about">
  <Link to="/about" className="link">
    <Heading size="4xl">About</Heading>
  </Link>
</Container>
<Container className="container home--blog">
  <Link to="/blog" className="link">
    <Heading size="4xl" className="heading">
      Blog
    </Heading>
  </Link>
</Container>
</Flex> */
}
