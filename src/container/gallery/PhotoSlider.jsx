
import {
  Box,
  Center,
  Image,
  useBoolean,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";

const PhotoSlider = (props) => {
  const [flag, setFlag] = useBoolean();
  const swiperRef = useRef();

  useEffect(() => {
    setFlag.on();
    setTimeout(() => {
      setFlag.off();
    }, 100);
  }, [props.showIndex]);

  const handleWheel = (e) => {
    if (!flag) {
      if (e.nativeEvent.deltaY > 0) {
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slidePrev();
      }
    }
  };
  return (
    <Box overflow="hidden">
      <Center
        onWheel={handleWheel}
     description ui design   position='relative'
      >
        <Swiper
          modules={[A11y]}
          slidesPerView={1}
          onSlideChange={(e) => 
            props.setShowIndex(e.activeIndex )
          }
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          initialSlide={props.showIndex}
        >
          {props.photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <Image
                src={photo.file}
                key={index}
                alt={photo.id}
                objectFit={"contain"}
                loading="lazy"
                m="auto"
                draggable="true"
                h={props.showDetail ? '85vh' : '100vh'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Icon
          as={MdNavigateBefore}
          position="absolute"
          left="0"
          top='0'
          zIndex="1"
          h="100px"
          mt='50vh'
          transform='translate(0%, -50%)'
          w="40px"
          color="gray"
          _hover={{color:'white'}}
          onClick={() => swiperRef.current.slidePrev()}
        />
        <Icon
          as={MdNavigateNext}
          position="absolute"
          right='0'
          top='0'
          zIndex="1"
          h="100px"
          mt='50vh'
          transform='translate(0%, -50%)'
          w="40px"
          color={"gray"}
          _hover={{color:'white'}}
          onClick={() => swiperRef.current.slideNext()}

        />
      </Center>

    </Box>
  );
};

export default PhotoSlider;
