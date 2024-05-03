"use client"
import { Box, Flex, Spacer, Input, InputGroup, InputLeftElement, IconButton, Button, HStack, Show, useColorMode, InputRightElement, Text, Icon, Kbd, Menu, MenuButton, MenuList, MenuItem, Divider } from "@chakra-ui/react";
import { FaInfoCircle, FaSearch } from "react-icons/fa";
import { MdMoreHoriz, MdStarRate } from "react-icons/md";
import Changer from "../switcherMode/Switch";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar(): JSX.Element {

  const inputRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.altKey && event.key === "i") {
        // Focus on the input when  Alt + I is pressed
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const { colorMode } = useColorMode();
  return (
    <Flex
      className="p-3 md:px-10 md:pt-6"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      direction="row"
    >
      <Flex align="center" mr={5}>
        <Box fontSize="xl" transition="all .2s" _hover={{ color: "#cd7721" }} fontWeight="bold" className="letter-spacing-[30px] font-bold">
          <Link href='/'>R A W G</Link>
        </Box>
      </Flex>

      <Box flex='12'>
        <Show above="md"  >
          <HStack className="ml-7">
            <Show above="xl">
              <Button
                aria-label='Send email'
                size="sm"
                bg={colorMode === "dark" ? "#141121" : "#ebebeb"}
                leftIcon={<MdStarRate size='17px' />}
                // textColor='black'
                paddingRight='26px'
                paddingLeft='20px'
                marginRight='15px'
                onClick={() => {
                  window.location.href = "https://www.rawg.io/games";
                }}
              >
                Rate Top Games
              </Button>
            </Show>
            <InputGroup className="w-[30%]" size={{ md: "md", lg: "lg" }}>
              <InputLeftElement
                onKeyDown={() => console.log('hi')}
                cursor="pointer"
                pointerEvents="none"
                children={<FaSearch color="gray.300" />}
              />
              <Input
                w="100%"
                ref={inputRef}
                bg={colorMode === "dark" ? "#141121" : "#ebebeb"}
                type="text"
                _hover={{ bg: colorMode === "dark" ? "gray.700" : "gray.200" }} // Change background color of input on hover based on color mode
                rounded="full"
                placeholder="Search 866,602 games"
              />
              <InputRightElement>
                <Box
                  as="button"
                  cursor="pointer"
                  aria-label="Shortcut info"
                  bg="transparent"
                  border="none"
                  outline="none"
                  marginRight='50px'
                >

                  <kbd className="flex">
                    <abbr className="text-sm text-[#939393] bg-['#939393] px-1 py-0">
                      Ctrl
                    </abbr>
                    <abbr className="text-sm text-[#939393] bg-['#939393] px-1 py-0">
                      +
                    </abbr>
                    <abbr className="text-sm text-[#939393] bg-['#939393] px-1 py-0">
                      I
                    </abbr>
                  </kbd>
                </Box>
              </InputRightElement>
            </InputGroup>
          </HStack>
        </Show>
      </Box>
      <Spacer />

      <HStack spacing={4}>
        <Show above="md">
          <Link className="text-[14px] font-bold transition hover:scale-125" href='/'>LOG IN</Link>
          <Link className="text-[14px] font-bold transition hover:scale-125" href='/'>SING IN</Link>
          <Link className="text-[14px] font-bold transition hover:scale-125" href='/'>API</Link>
          <Menu>
            <MenuButton
              className="hover:scale-125"
              transition="all .3s"
              _hover={{ transform: "scale(1.25)" }}
              as={Button}
              variant="unstyled"
            >
              <MdMoreHoriz size='25px' />
            </MenuButton>
            <MenuList bg={colorMode === "dark" ? "#141121" : "#ebebeb"} >
              <MenuItem bg={colorMode === "dark" ? "#141121" : "#ebebeb"}><Changer /></MenuItem>
              <Divider />
              <MenuItem bg={colorMode === "dark" ? "#141121" : "#ebebeb"}>Create a Copy</MenuItem>
              <Divider />
              <MenuItem bg={colorMode === "dark" ? "#141121" : "#ebebeb"}>Mark as Draft</MenuItem>
              <Divider />
              <MenuItem bg={colorMode === "dark" ? "#141121" : "#ebebeb"}>Delete</MenuItem>
              <Divider />
              <MenuItem bg={colorMode === "dark" ? "#141121" : "#ebebeb"}>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Show>
      </HStack>
    </Flex>
  );
};
