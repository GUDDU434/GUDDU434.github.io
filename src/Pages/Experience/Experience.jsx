import {
    Box,
    Center,
    ListItem,
    Text,
    UnorderedList,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { DiPostgresql, DiRedis } from "react-icons/di";
import { FaAws, FaGitAlt, FaJenkins, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandGolang, TbBrandReactNative } from "react-icons/tb";
import "./experience.css";

const Experience = () => {
  return (
    <Box
      id="experience"
      pt={{ base: "70px", md: "70px", lg: "70px" }}
      name="experience"
    >
      <Text
        fontWeight={"500"}
        fontSize={{ base: "30px", md: "30px", lg: "50px" }}
      >
        Experiences
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
        {/* ------------------------------------------------------ */}
        <Box
          className="project-card"
          data-aos="fade-up"
          bg={useColorModeValue("blue.800", "blue.800")}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"10px"}
          borderRadius={"10px"}
        >
          <Text
            textAlign={"left"}
            className="project-title"
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "35px" }}
          >
            Thinklink
          </Text>
          <Text
            textAlign={"left"}
            className="project-title"
            color={useColorModeValue("#eeeeea", "")}
            fontSize={{ base: "15px", md: "15px", lg: "22px" }}
          >
            Associate Software Engineer (Oct 2022 - Oct 2023)
          </Text>
          <hr />
          <Text
            textAlign="left"
            className="project-description"
            color={useColorModeValue("white", "")}
            mt="10px"
          >
            Area Of Responsibility
            <UnorderedList mt="4">
              <ListItem>
                Research and implemented a robust scanning for sub-domain
                takeover vulnerability
              </ListItem>
              <ListItem>
                Worked on Peer data collection to show our client were your
                company lies, interms of external attack surface and other
                security vulnerability
              </ListItem>
              <ListItem>
                Design and developed APIs for creating and storing issue, from a
                thirdparty API response
              </ListItem>
              <ListItem>
                Owning and managing four development repos, releasing, reporting
                bugs etc
              </ListItem>
              <ListItem>
                Upgraded the utils fuction that will generate the extension
                query where clause dynamicaly.
              </ListItem>
            </UnorderedList>
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
              <TbBrandGolang color="white" />
              <DiPostgresql color="white" />
              <DiRedis color="white" />
              <FaGitAlt color="white" />
            </Box>
          </Center>
        </Box>

        {/* ------------------------------------------------------ */}

        <Box
          className="project-card"
          data-aos="fade-up"
          bg={useColorModeValue("blue.800", "blue.800")}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"10px"}
          borderRadius={"10px"}
        >
          {/* <Image borderRadius={"10px"} src={img1} alt="pro1" /> */}
          <Text
            textAlign={"left"}
            className="project-title"
            color={useColorModeValue("white", "")}
            fontSize={{ base: "20px", md: "20px", lg: "35px" }}
          >
            Advance Digital Solution
          </Text>

          <Text
            textAlign={"left"}
            className="project-title"
            color={useColorModeValue("#eeeeea", "")}
            fontSize={{ base: "15px", md: "15px", lg: "22px" }}
          >
            Full Stack Developer (Nov 2023 - Mar 2025)
          </Text>
          <hr />
          <Text
            textAlign="left"
            className="project-description"
            color={useColorModeValue("white", "")}
            mt="10px"
          >
            Area Of Responsibility
            <UnorderedList mt="4">
              <ListItem>
                Implemented a comprehensive CI/CD pipeline using Jenkins,
                automating the entire development lifecycle for seamless
                integration, testing, and deployment.
              </ListItem>
              <ListItem>
                Designed and developed APIs for a healthcare product, YORE-Care,
                facilitating efficient patient management and healthcare service
                delivery.
              </ListItem>
              <ListItem>
                Integrated multiple third-party APIs to offer a range of
                services. Streamlined the development process by separating
                environments for development, testing, and production, ensuring
                smooth transitions and reducing risks during deployment.
              </ListItem>
              <ListItem>
                Integrated ABDM (Ayushman Bharat Digital Mission) to contribute
                to India's Digital Bharat Mission, enhancing healthcare
                accessibility and interoperability.
              </ListItem>
            </UnorderedList>
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
              <FaAws color="white" />
              <FaNodeJs color="white" />
              <FaJenkins color="white" />
            </Box>
          </Center>
        </Box>
      </Box>
      {/* <Button>more Projects -></Button> */}
    </Box>
  );
};

export default Experience;
