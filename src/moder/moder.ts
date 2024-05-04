import { useColorMode } from "@chakra-ui/react";

export function Moder (dark: string, light: string): string {
    const { colorMode } = useColorMode();
    // colorMode === "dark" ? "#141121" : "#ebebeb"
    if (colorMode === "dark") {
        return dark
    }else{
        return light
    }
}