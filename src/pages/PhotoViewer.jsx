import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react"

const PhotoViewer = () => { 
  let {photoID} = useParams();

  return(
    <Box>
      {photoID}
    </Box>
  )
}

export default PhotoViewer;