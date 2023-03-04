import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";
import imgE from "../../resources/images/portfolio/duloops.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Lazy } from "swiper";

export default function ProjectCarousel(props) {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      lazy={true}
      modules={[Navigation, Pagination, Lazy]}
    >
      {props.images.map((image, index) => (
        <SwiperSlide key={index}>
          <Center>
            <Image src={image} alt={image} key={index} height="400px" />
          </Center>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
