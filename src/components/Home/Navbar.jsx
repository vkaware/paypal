import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <Flex
      alignItems={"center"}
      bg="#fff0b8"
      color="white"
      position="fixed"
      zIndex={10}
      top={0}
      className={color ? "navbar navbar-bg" : "navbar"}
      w="100%"
      p="5"
      justifyContent="space-around"
      display={{ base: "none", md: "flex" }}
    >
      <HStack w="20%" justifyContent={"space-around"}></HStack>

      <HStack w="50%" justifyContent={"space-around"}>
        <Box cursor={"pointer"}>
          <Text color={"black"}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text
                    fontSize={"25px"}
                    p={0}
                    fontWeight={500}
                    color={"blue"}
                    _hover={{ color: "blue" }}
                  >
                    Welcome To Task Management System
                  </Text>
                </Flex>
              </PopoverTrigger>
            </Popover>
          </Text>
        </Box>

        <Text color={"black"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Flex alignItems={"center"} justifyContent={"center"}></Flex>
            </PopoverTrigger>
            <PopoverContent
              border={0}
              w={"100vw"}
              padding="50px"
              TextShadow={"xl"}
              bg={popoverContentBgColor}
              p={0}
              rounded={"xl"}
            ></PopoverContent>
          </Popover>
        </Text>
      </HStack>

      <HStack w="20%" justifyContent={"center"} gap="5">
        <Link to="/login">
          <Box
            as="button"
            color="black"
            fontSize={"17px"}
            border="none"
            cursor={"pointer"}
            _hover={{ color: "blue" }}
          >
            Log In
          </Box>
        </Link>
        <Link to="/signup">
          <Button
            fontSize={"17px"}
            bg={"blue"}
            border={"1px solid blue"}
            borderRadius={"md"}
            cursor={"pointer"}
            _hover={{ bg: "blue", color: " white" }}
          >
            Sign Up
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
