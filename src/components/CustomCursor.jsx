import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RiContactsFill } from "react-icons/ri";
import { Center, Text } from "@chakra-ui/react";
import { SiCodesandbox } from "react-icons/si";
import { MdEmojiPeople } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { useContext } from "react";
import { CustomCursorContext } from "../hooks/CustomCursorContext";
import { BsLink45Deg } from "react-icons/bs";

const cursorData = {
  default: {
    variants: "default",
    style: "default",
    color: "white",
    icon: null,
  },
  hi: {
    variants: "bigger",
    style: "border",
    color: "white",
    icon: <MdEmojiPeople />,
  },
  ABOUT: {
    variants: "bigger",
    style: "border",
    color: "deepskyblue",
    icon: <RiContactsFill />,
  },
  PROJECTS: {
    variants: "bigger",
    style: "border",
    color: "green",
    icon: <SiCodesandbox />,
  },
  CONTACT: {
    variants: "bigger",
    style: "border",
    color: "orange",
    icon: <MdOutlineEmail />,
  },
  intro: {
    variants: "text",
    style: "text",
    color: "white",
    icon: null,
  },
  contactLink: {
    variants: "iconOnly",
    style: { backgroundColor: "transparent" },
    color: "white",
    icon: <BsLink45Deg />,
  },
  project: {
    variants: "bigger",
    style: "default",
    color: "white",
    icon: null,
  },
  none: {
    variants: "none",
    style: { display: "none", backgroundColor: "transparent" },
    color: "white",
    icon: null,
  },
};

export default function CustomCursor() {
  const { cursor } = useContext(CustomCursorContext);
  console.log(cursor);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorInfo = cursorData[cursor];
  useEffect(() => {
    const setFromEvent = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    smaller: {
      width: 10,
      height: 10,
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
    bigger: {
      width: 50,
      height: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
    },
    text: {
      width: 100,
      height: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
    none: {
      display: "none",
    },
  };

  const styles = {
    default: {
      backgroundColor: "white",
    },
    border: {
      backgroundColor: "transparent",
      border: `3px solid ${cursorInfo.color}`,
    },
    text: {
      backgroundColor: cursorInfo.color,
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorInfo.variants}
      style={styles[cursorInfo.style]}
    >
      {cursorInfo.icon && (
        <Center color={cursorInfo.color} w="100%" h="100%" fontSize={30}>
          {cursorInfo.icon}
        </Center>
      )}
    </motion.div>
  );
}
