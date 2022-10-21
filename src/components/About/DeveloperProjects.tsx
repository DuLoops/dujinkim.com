import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import DeveloperProjectCard from "./DeveloperProjectCard";
import PortfolioCard from "./PortfolioCard";
import {
  pender,
  pender2,
  dnd,
  dnd2,
} from "../../resources/images/portfolio";

const cards = [
  {
    title: "Website Redesign",
    desc: "Pender Harbour Tourism",
    tech: "Vue.js",
    image: pender,
    modal: {
      images: [pender, pender2],
      detail: "The website provides information and guide for the tourists vising the islands in Sunshine Coast. The newly designed & developed website is responsive and intuitive. ",
      tech: ['Vue.js '],
      link: "https://penderharbourdemo.web.app/",
      git: "https://github.com/DuLoops/PenderHarbourSpirit"
    }
  },
  {
    title: "Oculus Party Viewer",
    desc: "D&D game analytics",
    tech: "C#",
    image: dnd,
    modal: {
      images: [dnd, dnd2],
      detail: "Oculus Party Viewer for Dungeons and Dragons games helps to keep track of the game and generates boss statistics.",
      tech: ['C#', 'WPF'],
      git: "https://github.com/DuLoops/Oculus-Party-Viewer"
    }
  },
];

export default function DeveloperProjects() {
  return (
    <Flex flexDir={{sm: 'column', md:'row'}} justifyContent={'space-evenly'} gap='10px' p='10px' maxW='80vw' m='auto'>
      {cards.map((card,index) => {
        return <PortfolioCard card={card} key={index}/>;
      })}
    </Flex>
  );
}
