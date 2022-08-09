import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import DeveloperProjectCard from "./DeveloperProjectCard";

import { pender, pender2, dnd, dnd2 } from "../../resources/images/dev/portfolio";


const cards = [
  {
    title: "Pender Harbour Tourism Website Redesign",
    desc: "My team and I redesigned the Pender Harbour Tourism website. We've implemented mobile-first & responsive design and organized navigation and layout to suit the client needs.",
    link: {website: "https://penderharbourdemo.web.app/#/", github: "https://github.com/DuLoops/PenderHarbourSpirit"},
    images: [pender, pender2],
  },
  {
    title: "D&D game analytics",
    desc: "D6D game analizer developed in C#.",
    link: {website: "https://penderharbourdemo.web.app/#/", github: "https://github.com/DuLoops/PenderHarbourSpirit"},
    images: [dnd, dnd2],
  },
];

export default function DeveloperProjects() {
  return (
    <Flex flexDir="column">
      {cards.map((card) => {
        return (<DeveloperProjectCard card={card}/>)
      })}
    </Flex>
  );
}
