/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import {
  Drawer,
  Button,
  Box,
  Image,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import resume from "../Data/guddu_ali_resume.pdf";

import { AiOutlineHome, AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GrProjects, GrContact } from "react-icons/gr";

import { IoIosContact } from "react-icons/io";
import { MdLocalLibrary } from "react-icons/md";

function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleclick = () => {
    window.open(
      "https://drive.google.com/file/d/1hS-S2QO88mMXpQEb_9MUoo3BDbKjskEJ/view?usp=share_link"
    );
  };

  return (
    <>
      <Button onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} bg={"blur"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              src={""}
              // website
              w={{ base: "15%", md: "7%", lg: "5%" }}
              borderRadius={"40px"}
            />
          </DrawerHeader>
          <hr />

          <DrawerBody p={"20px 20px"}>
            <Link smooth={true} duration={1000} to="home">
              {" "}
              <Box
                onClick={onClose}
                fontWeight={"550"}
                fontSize={"22px"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
                cursor={"pointer"}
              >
                {" "}
                <AiOutlineHome /> Home{" "}
              </Box>
            </Link>
            <hr />
            <Link smooth={true} duration={1000} to="about">
              {" "}
              <Box
                onClick={onClose}
                fontSize={"22px"}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
                mt={"15px"}
                cursor={"pointer"}
              >
                <IoIosContact /> About{" "}
              </Box>
            </Link>
            <hr />
            <Link smooth={true} duration={1000} to="skills">
              {" "}
              <Box
                onClick={onClose}
                fontSize={"22px"}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
                mt={"15px"}
                cursor={"pointer"}
              >
                <MdLocalLibrary />
                Skills{" "}
              </Box>
            </Link>
            <hr />
            <Link smooth={true} duration={1000} to="project">
              <Box
                fontSize={"22px"}
                onClick={onClose}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
                mt={"15px"}
                cursor={"pointer"}
              >
                <GrProjects />
                Projects
              </Box>
            </Link>
            <hr />
            <Link smooth={true} duration={1000} to="contact">
              {" "}
              <Box
                onClick={onClose}
                fontSize={"22px"}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
                mt={"15px"}
                cursor={"pointer"}
              >
                <GrContact /> Contact{" "}
              </Box>
            </Link>
            <hr />
            <a href={resume} download="guddu-ali-resume">
              <Box
                fontSize={"22px"}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
                mt={"15px"}
                cursor={"pointer"}
                onClick={handleclick}
              >
                <AiOutlineArrowDown /> Resume
              </Box>{" "}
            </a>
            <hr />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default SideDrawer;
