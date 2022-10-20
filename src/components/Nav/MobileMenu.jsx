import {
  Flex,
  Icon,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/react";
import { RiNavigationFill, RiNavigationLine } from "react-icons/ri";
import {FaPaperPlane} from 'react-icons/fa'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import { useState } from "react";
const MobileMenu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex alignItems={"center"} justifySelf="right" mr="8px">
      <Icon
        as={IoPaperPlaneOutline}
        transform='rotateY(180deg)'
        boxSize="30px"
        onClick={onOpen}
        color='gray.300'
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background='blackAlpha.800'>
        <DrawerHeader textAlign={'center'}>MENU</DrawerHeader>
          <DrawerCloseButton size='lg'/>
          <DrawerBody textAlign={'right'} pt='30%'>hello</DrawerBody>

          <DrawerFooter><i>- Created by DuJin</i></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MobileMenu;
