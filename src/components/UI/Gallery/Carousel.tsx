import React from "react";
import { Box, IconButton, useBreakpointValue, Image } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import imgE from "../../../resources/images/portfolio/duloops.jpg";

const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface props {
  cards: string[];
}

export default function Carousel(props: props) {
  const filePath = "../../../resources/images/portfolio/";
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the images used in the slide
  return (
    <Box
      position={"relative"}
      // height={'600px'}
      pb="20px"
      // width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        colorScheme="blackAlpha"
        borderRadius="full"
        position="absolute"
        left={0}
        top={"50%"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="blackAlpha"
        borderRadius="full"
        position="absolute"
        right={0}
        top={"50%"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {props.cards.map((img, index) => {
          console.log(filePath + img);
          return (
            <Box
              key={index}
              // position="relative"
              // backgroundPosition="contain"
              // backgroundRepeat="no-repeat"
              // backgroundSize="auto"
              // backgroundImage={img}
            >
              <Image src={imgE} alt={img} maxH="60vh" m="auto" />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
