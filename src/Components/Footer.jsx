import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";
import { MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        color={"white"}
        bg={useColorModeValue("gray.800", "blue.800")}
        mt={"10px"}
      >
        <br />
        <Text color={"white"} p={"30px auto"}>
          Designed and build by Guddu Ali, {new Date().getFullYear()} All rights
          reserved.
        </Text>

        <Box
          w={{ lg: "20%", base: "64%", md: "40%" }}
          m="auto"
          textAlign={"center"}
          pl={{ base: "5px", md: "40px" }}
        >
          <Text
            display={"flex"}
            alignItems={"center"}
            id="contact-phone"
            label="8271766683"
          >
            <MdPhone />: +91 8169269136
          </Text>
        </Box>

        <br />
      </Box>
    </>
  );
};

export default Footer;
