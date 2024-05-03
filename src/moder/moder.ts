import { useColorMode } from "@chakra-ui/react";

export function Moder (): "#141121" | "#ebebeb" {
    const { colorMode } = useColorMode();
    // colorMode === "dark" ? "#141121" : "#ebebeb"
    if (colorMode === "dark") {
        return "#141121"
    }else{
        return "#ebebeb"
    }
}