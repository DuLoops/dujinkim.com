import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  useMediaQuery,
  Flex,
  Center,
  ColorModeScript,
  transition,
} from "@chakra-ui/react";
import { wrap } from "popmotion";


import backgroundImg from "../../resources/images/dev/background/SideCountry.jpg";
import backgroundGreen from "../../resources/images/dev/background/background.jpg";
import backgroundImgDark from "../../resources/images/dev/background/Dark_lum_clear-0356.jpg";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100vw' : -2000,
      opacity: 0.5
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '100vw' : '-100vw',
    };
  }
};
const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ScrollableBackground = () => {
  const [scrollIndex, setScrollindex] = useState(0);
  let loading = false;
  const [backgroundPictures, setBackgroundPictures] = useState([
    backgroundImg,
    backgroundGreen,
    backgroundImgDark,
  ]);


  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, backgroundPictures.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    loading  = true;
    setTimeout(() => {
      loading = false;
    }, 600);
  }, [page]);

  return (
    <Box
      width='100vw'
      height='100vh'
      overflow='hidden'
      position='absolute'
      onWheel={(e) => {
        if (!loading) {
          if (e.nativeEvent.deltaY > 0) {
            paginate(1);
          } else {
            paginate(-1);
          }
        }
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={backgroundPictures[imageIndex]}
          custom={direction}
          variants={variants}

          animate="center"
          exit="exit"
          style={{height: '100vh', width:'100vw', objectFit:'cover'}}

          transition={{
            // x: { type: "spring", stiffness: 300},
            opacity: {type: 'ease-in', duration: 900}
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </Box>
  );
};

export default ScrollableBackground;
