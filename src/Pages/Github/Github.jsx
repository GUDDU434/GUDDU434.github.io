import React from "react";
import { Box, Text, Image, useColorModeValue } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
// import './Github.css'

const Github = () => {
  return (
    <>
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        margin={"80px auto 30px auto"}
      >
        <Box mb={"30px"}>
          <Text
            fontSize={{ base: "30px", md: "45px", lg: "50px" }}
            fontWeight={"500"}
            textAlign={"center"}
          >
            Github
          </Text>
        </Box>
        <Box w={{ base: "95%", md: "80%", lg: "80%" }} m={"auto"}>
          <Box
            w={{ base: "100%", md: "100%", lg: "100%" }}
            mb={"10px"}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap={"10px"}
          >
            <Image
              width="100%"
              height="100%"
              id="github-streak-stats"
              src="https://streak-stats.demolab.com/?user=GUDDU434&theme=react&hide_border=false"
              alt=""
            />

            <Image
              width="100%"
              height="100%"
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=GUDDU434&theme=react&hide_border=false&include_all_commits=true&count_private=false"
              alt=""
            />

            <Image
              width="100%"
              height="100%"
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=GUDDU434&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
              alt=""
            />
          </Box>

          <Box
            m={{ base: "20px auto", md: "30px auto", lg: "50px auto" }}
            w={{ base: "95%", md: "80%", lg: "80%" }}
          >
            <GitHubCalendar
              fontSize={14}
              blockRadius={1}
              blockMargin={6}
              blockSize={16}
              color={useColorModeValue("#4169el", "blue")}
              showWeekdayLabels
              className="react-activity-calendar"
              username="GUDDU434"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Github;
