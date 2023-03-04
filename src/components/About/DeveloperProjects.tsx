import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import DeveloperProjectCard from "./DeveloperProjectCard";
import PortfolioCard from "./PortfolioCard";
import {
  pender,
  pender2,
  dnd,
  dnd2,
  WimHofTimer,
  
  TankGame,
  duloops,
  duloops2,
  duloops3,
  AudioMorpher
} from "../../resources/images/portfolio";

const cards = [
  {
    title: "Wim Hof Timer",
    desc: "Timer app for Wim Hof Breathing Method",
    tech: "React.js, Framer Motion",
    // image: 
    modal: {
      images: [WimHofTimer],
      detail:
        "Wim Hof Timer is a timer app for Wim Hof Breathing Method. It is a simple and intuitive timer app that helps you to keep track of your breathing.",
      tech: ["React.js"],
      link: "https://duloops.com/timer/wim-hof-timer",
    },
  },
  {
    title: "DuLoops.com",
    desc: "Blog & Photo Gallery",
    tech: "Next.js",
    image: duloops3,
    modal: {
      images: [duloops, duloops2, duloops3],
      detail:
        "DuLoops.com is my blog and photo gallery website. It is developed in React.js and uses Chakra UI for styling.",
      tech: ["Next.js", "React.js"],
      link: "https://duloops.com/",
    },
  },
  {
    title: "Website Redesign",
    desc: "Pender Harbour Tourism",
    tech: "Vue.js",
    image: pender,
    modal: {
      images: [pender, pender2],
      detail:
        "The website provides information and guide for the tourists vising the islands in Sunshine Coast. The newly designed & developed website is responsive and intuitive. ",
      tech: ["Vue.js "],
      link: "https://penderharbourdemo.web.app/",
      git: "https://github.com/DuLoops/PenderHarbourSpirit",
    },
  },
  {
    title: "Audio & Image Editor",
    desc: "Audio and Image editor utilizing various digital processing techniques.",
    tech: "C#, .NET, WPF",
    image: AudioMorpher,
    modal: {
      images: [AudioMorpher],
      detail:
        "Utilize Fourier Transformation, JPEG Compression, and image morphing.",
      tech: ["C#", ".NET", "WPF"],
      git: "https://github.com/DuLoops/Audio-Image_editor",
    },
  },
  {
    title: "Tank Game",
    desc: "1 VS 1 Tank Game",
    tech: "C++",
    image: TankGame,
    modal: {
      images: [TankGame],
      detail:
        "Tank Game is a 1 VS 1 tank game. The game is developed in C++ and uses OpenGL library for graphics. Developed in a team of 8 people.",
      tech: ["C++"],
      git: "https://github.com/DuLoops/GameEngineUI",
    },
  },
  {
    title: "Oculus Party Viewer",
    desc: "D&D game analytics",
    tech: "C#",
    image: dnd,
    modal: {
      images: [dnd, dnd2],
      detail:
        "Oculus Party Viewer for Dungeons and Dragons games helps to keep track of the game and generates boss statistics.",
      tech: ["C#", "WPF"],
      git: "https://github.com/DuLoops/Oculus-Party-Viewer",
    },
  },
];

export default function DeveloperProjects() {
  return (
    <Grid
      gridTemplateColumns={{lg: "repeat(3, 1fr)", md: "repeat(2,1fr)", sm: "1fr"}}
      justifyContent={"space-evenly"}
      gap="10px"
      p="10px"
      maxW="80vw"
      m="auto"
    >
      {/* {cards.map((card, index) => {
        return <PortfolioCard card={card} key={index} />;
      })} */}
    </Grid>
  );
}
