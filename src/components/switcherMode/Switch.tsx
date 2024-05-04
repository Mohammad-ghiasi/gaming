"use client"
import React, { ReactNode } from 'react'
import { Button, useColorMode, IconButton, Text } from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";

type ChangerProps = {
  dark: string | ReactNode; // Type can be string or ReactNode
  light: string | ReactNode; // Type can be string or ReactNode
};
const Changer = (props: ChangerProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    // <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    // <Button colorScheme='blue' onClick={toggleColorMode}>
    //     {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
    // </Button>
    <Text
      cursor="pointer"
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
      variant="ghost"
    >{colorMode === "light" ? (props?.dark) : (props?.light)}</Text>
  )
}

export default Changer


// https://rawg.io/