import GalleryDev from "../container/gallery/GalleryDev";
import { Box, Heading } from "@chakra-ui/react";
const Admin = () => {
  return (
    <Box p='2rem'>
      <Heading>Gallery Dev</Heading>
      <GalleryDev />
    </Box>
  );
};

export default Admin;
