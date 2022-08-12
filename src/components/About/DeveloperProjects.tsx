import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import DeveloperProjectCard from "./DeveloperProjectCard";
import PortfolioCard from "./PortfolioCard";
import {
  pender,
  pender2,
  dnd,
  dnd2,
} from "../../resources/images/dev/portfolio";

const cards = [
  {
    title: "Website Redesign",
    desc: "Pender Harbour Tourism",
    tech: "Vue.js",
    image: pender,
  },
  {
    title: "D&D game analytics",
    tech: "C#",
    image: dnd,
  },
];

export default function DeveloperProjects() {
  return (
    <Flex flexDir="row" justifyContent={'space-around'}>
      {/* {cards.map((card) => {
        return (<DeveloperProjectCard card={card}/>)
      })} */}
      {/* <PortfolioCard /> */}
      {cards.map((card) => {
        return <PortfolioCard card={card} />;
      })}
    </Flex>
  );
}
