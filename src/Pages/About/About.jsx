import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <Box
        id="about"
        className="about section"
        name="about"
        pt={{ base: "70px", md: "70px", lg: "100px" }}
      >
        <Text
          fontSize={{ base: "30px", md: "30px", lg: "50px" }}
          fontWeight={"500"}
        >
          About Me
        </Text>
        <Box
          w={{ base: "90%", md: "90%", lg: "75%" }}
          m={{ base: "20px auto", md: " 20px auto", lg: "20px auto" }}
          display={"grid"}
          gap={"24px"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }} // alignItems={'center'}
        >
          <Box>
            <Image
              src={
                "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1914164533-1652959735.jpg&w=900&height=601"
              }
              borderRadius={"20px"}
            />
          </Box>
          <Box>
            {" "}
            <Text
              textAlign={"justify"}
              fontSize={{ base: "15px", md: "20px", lg: "23px" }}
              id="user-detail-intro"
            >
              Dynamic Full Stack Software Developer with 2+ years of hands-on
              experience, ready to make an impact! Specializing in a diverse
              tech stack, including Golang, MySQL, Node.js, Express.js,
              React.js, MongoDB, AWS-EC2, , and CI/CD with Jenkins, I thrive on
              tackling challenges and delivering innovative solutions. As a
              collaborative team player and adept problem solver, I’m passionate
              about enhancing my skills and contributing to a forward-thinking
              tech organization.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
// https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1914164533-1652959735.jpg&w=900&height=601
