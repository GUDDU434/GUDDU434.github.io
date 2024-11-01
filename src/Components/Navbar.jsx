import { Box, Image, Button, useColorModeValue } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import img from "../Data/logo.png";
import { Link } from "react-scroll";
import React from "react";
import resume from "../Data/guddu_ali_resume.pdf";

import "./navbar.css";
import SideDrawer from "./SideDrawer";
const Navbar = () => {
  const handleclick = () => {
    window.open(
      "https://drive.google.com/file/d/1hS-S2QO88mMXpQEb_9MUoo3BDbKjskEJ/view?usp=share_link "
    );
  };

  return (
    <>
      <Box
        display={"flex"}
        id="nav-menu"
        bg={useColorModeValue("gray.100", "blue.800")}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        padding={"5px 30px"}
        position={"fixed"}
        top={"0"}
        zIndex={"3"}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <Box>
          <Link to="home" smooth={true} duration={700}>
            {" "}
            <Image
              cursor={"pointer"}
              src={img}
              w={{ base: "28%", md: "25%", lg: "35%" }}
              borderRadius={"40px"}
              margin={{ base: "2px", md: "1px", lg: "5px" }}
            />
          </Link>
        </Box>
        <Box gap={"20px"} display={"flex"}>
          <Box gap={"20px"} display={{ base: "none", md: "none", lg: "flex" }}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link home"
            >
              <Button>Home</Button>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link about"
            >
              <Button>About</Button>
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link skills"
            >
              <Button>Skills</Button>
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="nav-link experiences"
            >
              <Button>Experiences</Button>
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="nav-link projects"
            >
              <Button>Projects</Button>
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link contact"
            >
              <Button>Contact</Button>
            </Link>
            <Button id="resume-button-1" onClick={handleclick}>
              <a
                className="nav-link resume"
                id="resume-link-1"
                href={resume}
                download="guddu-ali-resume"
              >
                Resume
              </a>
            </Button>
          </Box>
          <Box>
            <ColorModeToggle />
          </Box>
          <Box display={{ base: "block", md: "block", lg: "none" }}>
            <SideDrawer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
