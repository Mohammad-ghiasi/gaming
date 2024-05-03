"use client"
import React from 'react'
import { Button, useColorMode, IconButton, Text } from '@chakra-ui/react'
import {FaMoon, FaSun } from "react-icons/fa";

const Changer = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        // <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        // <Button colorScheme='blue' onClick={toggleColorMode}>
        //     {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
        // </Button>
        <Text
          onClick={toggleColorMode}
          aria-label="Toggle dark mode"
          variant="ghost"
        >{colorMode === "light" ? "Dark mode" : "Ligth mode"}</Text>
    )
}

export default Changer


// https://rawg.io/