import {
  Box,
  Button,
  Center,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineGithub, AiOutlineHtml5 } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
import { TbBrandJavascript, TbBrandReactNative } from "react-icons/tb";
import img1 from "../../images/kfc.jpg";
import img3 from "../../images/kimaye.png";
import img2 from "../../images/mamaEarth.jpg";
import img4 from "../../images/sjs.png";
import "./project.css";

const Project = () => {
  const handleclick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Box
      id="projects"
      pt={{ base: "70px", md: "70px", lg: "70px" }}
      name="project"
    >
      <Text
        fontWeight={"500"}
        fontSize={{ base: "30px", md: "30px", lg: "50px" }}
      >
        Projects
      </Text>
      <Box
        w={{ base: "90%", md: "90%", lg: "70%" }}
        m={"20px auto"}
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={"20px"}
      >
        <Box
          className="project-card"
          data-aos="fade-up"
          bg={useColorModeValue("blue.800", "blue.800")}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"10px"}
          borderRadius={"10px"}
        >
          <Image
            height={"250px"}
            width={"100%"}
            borderRadius={"10px"}
            src={img4}
            alt="pro1"
          />
          <Text
            className="project-title"
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
          >
            Sarkari Job Samachar
          </Text>
          <Text
            className="project-description"
            color={useColorModeValue("white", "")}
            mb={"5px"}
          >
            Sarkari Job Samachar is a platform that provides updates on the
            latest government job opportunities in India. We offer notifications
            on job openings, study material.
          </Text>

          <hr />
          <Text
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
          >
            Tech Stack
          </Text>
          <Center>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              mb={"5px"}
              fontSize={"30px"}
              className="project-tech-stack"
            >
              <TbBrandReactNative color="white" />
              <SiMongodb color="white" />
              <FaNodeJs color="white" />
            </Box>
          </Center>
          <hr />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            mt={"10px"}
          >
            <Button
              gap="5px"
              className="project-github-link"
              onClick={() =>
                handleclick(
                  "https://github.com/GUDDU434/sarkarijobsamachar-client"
                )
              }
            >
              Repo <AiOutlineGithub />
            </Button>
            <Button
              gap="5px"
              className="project-deployed-link"
              onClick={() => handleclick("https://www.sarkarijobsamachar.com/")}
            >
              Live <BsBoxArrowUpRight />
            </Button>
          </Box>
        </Box>
        <Box
          className="project-card"
          data-aos="fade-up"
          bg={useColorModeValue("blue.800", "blue.800")}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"10px"}
          borderRadius={"10px"}
        >
          <Image
            height={"250px"}
            width={"100%"}
            borderRadius={"10px"}
            src={img1}
            alt="pro1"
          />
          <Text
            className="project-title"
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
          >
            KFC
          </Text>
          <Text
            className="project-description"
            color={useColorModeValue("white", "")}
            mb={"5px"}
          >
            KFC (Kentucky Fried Chicken) is an American fast food resturant
            chain headquartered in Louisville,Kentucky, that specializes in
            fried chicken.
          </Text>

          <hr />
          <Text
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
          >
            Tech Stack
          </Text>
          <Center>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              mb={"5px"}
              fontSize={"30px"}
              className="project-tech-stack"
            >
              <AiOutlineHtml5 color="white" />
              <FaCss3Alt color="white" />
              <FaReact color="white" />
            </Box>
          </Center>
          <hr />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            mt={"10px"}
          >
            <Button
              gap="5px"
              className="project-github-link"
              onClick={() =>
                handleclick("https://github.com/GUDDU434/kfc-clone-react")
              }
            >
              Repo <AiOutlineGithub />
            </Button>
            <Button
              gap="5px"
              className="project-deployed-link"
              onClick={() =>
                handleclick("https://mellow-froyo-f88246.netlify.app/")
              }
            >
              Live <BsBoxArrowUpRight />
            </Button>
          </Box>
        </Box>
        {/* ------------------------------------------------------ */}
        <Box
          className="project-card"
          bg={useColorModeValue("blue.800", "blue.800")}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"10px"}
          borderRadius={"10px"}
        >
          <Image
            height={"250px"}
            width={"100%"}
            borderRadius={"10px"}
            src={img2}
            alt="pro1"
          />
          <Text
            className="project-title"
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
          >
            MamaEarth
          </Text>
          <Text
            color={useColorModeValue("white", "")}
            className="project-description"
          >
            In this project we have tried to manipulate dom elements, styling
            using css and tried to make a dynamic and responsive website. we
            were able to clone more or less the whole website with same looking
            and features.{" "}
          </Text>
          <hr />
          <Text
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
          >
            Tech Stack
          </Text>
          <Center>
            <Box
              className="project-tech-stack"
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              mb={"5px"}
              fontSize={"30px"}
            >
              <AiOutlineHtml5 color="white" />
              <FaCss3Alt color="white" />
              <TbBrandJavascript color="white" />
              <FaNodeJs color="white" />{" "}
            </Box>
          </Center>
          <hr />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            mt={"10px"}
          >
            <Button
              gap="5px"
              className="project-github-link"
              onClick={() =>
                handleclick("https://github.com/GUDDU434/MamaEarthclone")
              }
            >
              Repo <AiOutlineGithub />
            </Button>
            <Button
              gap="5px"
              className="project-deployed-link"
              onClick={() =>
                handleclick("https://calm-sawine-27b8ed.netlify.app")
              }
            >
              Live <BsBoxArrowUpRight />
            </Button>
          </Box>
        </Box>
        {/* ------------------- */}
        <Box
          className="project-card"
          bg={useColorModeValue("blue.800", "blue.800")}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"10px"}
          borderRadius={"10px"}
        >
          <Image
            borderRadius={"10px"}
            height={"250px"}
            width={"100%"}
            src={img3}
            alt="pro1"
          />
          <Text
            className="project-title"
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
          >
            Kimaye
          </Text>
          <Text
            className="project-description"
            color={useColorModeValue("white", "")}
          >
            Kimaye brand Growers of India's finest fruits, we want to make
            eating fruitr a worry- free and delightful experience for you.
          </Text>
          <hr />
          <Text
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
          >
            Tech Stack
          </Text>
          <Center>
            <Box
              className="project-tech-stack"
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              mb={"5px"}
              fontSize={"30px"}
            >
              <FaReact color="white" />
              <SiRedux color="white" />
              <FaCss3Alt color="white" />
              <SiMongodb color="white" />{" "}
            </Box>
          </Center>
          <hr />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            mt={"10px"}
          >
            <Button
              gap="5px"
              className="project-github-link"
              onClick={() =>
                handleclick("https://github.com/GUDDU434/Kimaye-Clone")
              }
            >
              Repo <AiOutlineGithub />
            </Button>
            <Button
              gap="5px"
              className="project-deployed-link"
              onClick={() =>
                handleclick("https://kimaye-clone-web16.netlify.app")
              }
            >
              Live <BsBoxArrowUpRight />
            </Button>
          </Box>
        </Box>
        {/* ------------------- */}
      </Box>
      {/* <Button>more Projects -></Button> */}
    </Box>
  );
};

export default Project;
