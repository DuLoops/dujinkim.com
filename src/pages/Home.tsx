import { Link } from "react-router-dom";
import {
  Flex,
  Container,
  Heading,
  Grid,
  GridItem,
  Image,
  Box,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import "./home.scss";
import File from "../components/UI/File";

import backgroundImg from "../resources/images/dev/SideCountry.jpg";
import backgroundGreen from "../resources/images/dev/background.jpg";
import backgroundImgDark from "../resources/images/dev/Dark_lum_clear-0356.jpg";

import {
  folder,
  folderGallery,
  folderBlog,
  PageMe,
} from "../resources/images/icons";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 1280px)");

  return (
    <Box
      className="home"
      bgImage={backgroundGreen}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
    >
      <Flex
        flexDir={{ base: "column", md: "row" }}
        width="100vw"
        h="100vh"
        align={{ base: "center", md: "end" }}
        justifyContent="space-around"
        pb={{ base: 0, md: 50, xl: "80px" }}
      >
        <File
          link="/gallery"
          desc="Visuals"
          img={folderGallery}
          alt="galleryIcon"
          isMobile={isMobile}
        />
        <File link="/blog" desc="Blog" img={folderBlog} alt="folderBlog"           isMobile={isMobile}
/>
        <File link="/about" desc="About.me" img={PageMe} alt="PageMe"          isMobile={isMobile}
 />
      </Flex>
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
