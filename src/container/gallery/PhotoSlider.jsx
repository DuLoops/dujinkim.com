import PhotoViewerModal from "../../pages/PhotoViewerModal";

import { Box, Center, Image, useBoolean, useColorMode } from "@chakra-ui/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Scrollbar, A11y, Parallax } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  useLocation,
  useNavigate,
  Link,
  Routes,
  Route,
} from "react-router-dom";

const PhotoSlider = (props) => {
  const [showIndex, setShowIndex] = useState(0);
  const [flag, setFlag] = useBoolean();
  const { colorMode, toggleColorMode } = useColorMode();
  const swiperRef = useRef();
  let navigate = useNavigate();
  let location = useLocation();
  const [modal, setModal] = useBoolean(false);

  useEffect(() => {
    setFlag.on();
    setTimeout(() => {
      setFlag.off();
    }, 200);
  }, [showIndex]);

  const handleClick = (index, photoID) => {
    if (index < showIndex) {
      swiperRef.current.slidePrev();
    } else if (index == showIndex) {
      navigate(`/gallery/${photoID}`, {
        replace: false,
        state: { background: location },
      });
      setModal.on();
    } else {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Box overflow="hidden">
      <Center
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
        w={"150vw"}
        transform="translateX(-15%)"
        background={colorMode == "light" ? "white" : "dark.100"}
      >
        <Swiper
          modules={[A11y]}
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
                onClick={() => handleClick(index, photo.id)}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide />
        </Swiper>
      </Center>
      {modal && <PhotoViewerModal setModal={setModal} showIndex={showIndex} setShowIndex={setShowIndex} photos={props.photos}/>}
    </Box>
  );
};

export default PhotoSlider;
