import { Box, Center, Image, useBoolean, useColorMode } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { Scrollbar, A11y, Parallax } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const PhotoSlider = (props) => {
  const [showIndex, setShowIndex] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  const [flag, setFlag] = useBoolean();
  const swiperRef = useRef();

  useEffect(() => {
    setFlag.on();
    setTimeout(() => {
      setFlag.off();
    }, 200);
  }, [showIndex]);

  const handleClick = (index) => {
    if(index < showIndex) {
      swiperRef.current.slidePrev();
    } else if (index == showIndex) {
      props.setLightBox(props.photos[index])
      props.openLightBox();
    } else {
      swiperRef.current.slideNext();
    }
  }

  return (
    <Box
      bg={"black"}
      overflow="hidden"
      mt="50px"
      onWheel={(e) => {
        if (!flag) {
          if (e.nativeEvent.deltaY > 0) {
            swiperRef.current.slideNext();
          } else {
            swiperRef.current.slidePrev();
          }
        }
      }}
    >
      <Center
        w={"150vw"}
        transform="translateX(-15%)"
        background={colorMode == "light" ? "white" : "dark.100"}
      >
        <Swiper
          modules={[ A11y]}
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={(e) => setShowIndex(e.activeIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide />
          {props.photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <Image
                src={photo.file}
                key={index}
                alt={photo.id}
                objectFit={"contain"}
                filter={index == showIndex ? "" : "brightness(20%)"}
                loading="lazy"
                onClick={()=> handleClick(index)}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide />
        </Swiper>
      </Center>
    </Box>
  );
};

export default PhotoSlider;
