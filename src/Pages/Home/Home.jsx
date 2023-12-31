import { Box, Button, Text, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
import { DownloadIcon } from "@chakra-ui/icons";
import img from "../../Data/gudduAli.jpg";
import resume from "../../Data/guddu_ali_resume.pdf";

const Home = () => {
  const handleclick = () => {
    window.open(
      "https://drive.google.com/file/d/1hS-S2QO88mMXpQEb_9MUoo3BDbKjskEJ/view?usp=share_link"
    );
  };
  return (
    <>
      <Box
        id="home"
        name="home"
        pt={{ base: "70px",sm:"130px", md: "70px", lg: "110px" }}
        bg={useColorModeValue("blue.800", "gray.700")}
        display={{ base: "grid", md: "grid", lg: "grid" }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        alignItems={"center"}
      >
        <Box w={{ base: "100%", md: "100%", lg: "100%" }}>
          <Text
            color={useColorModeValue("white")}
            fontSize={{ base: "30px", md: "40px", lg: "50px" }}
          >
            Hey, My Name is
          </Text>
          <Text
            id="user-detail-name"
            color={useColorModeValue("white")}
            fontSize={{ base: "35px", md: "45px", lg: "60px" }}
          >
            Guddu Ali
          </Text>
          <Text
            color={useColorModeValue("white")}
            fontSize={{ base: "14px", md: "20px", lg: "22px" }}
          >
            I enjoy coding and devloping user centeric web application!
          </Text>
          <Text
            color={useColorModeValue("white")}
            fontSize={{ base: "15px", md: "20px", lg: "20px" }}
          >
            {" "}
            I am{" "}
            <Typewriter
              words={[" Full Stack Web Developer", " Specialized In MERN Stack"]}
              loop
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Text>
          <Button
            id="resume-button-2"
            color={useColorModeValue("", "black")}
            bg={"white"}
            m={"10px"}
            onClick={handleclick}
          >
            <a
              href={resume}
              download="guddu-ali-resume"
              id="resume-link-2"
            >
              Resume <DownloadIcon />
            </a>
          </Button>
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "100%" }}>
          <Box
            borderWidth={"5px"}
            w={{ base: "70%", md: "60%", lg: "35%" }}
            borderRadius={"90%"}
            m={{ base: "15px auto",sm:"15px auto", md: "30px auto", lg: "95px auto" }}
          >
            <Image
              className="home-img"
              src={img}
              w={"100%"}
              cursor={"pointer"}
              borderRadius={"90%"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
