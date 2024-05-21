"use client"
import { useGetData } from "@/hooks/useGetData"
import { setplatform } from "@/redux/slices/platforemSlice";
import { platfromType } from "@/types/platfomType";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs"
import { useDispatch } from "react-redux";

export default function PlatformSelector() {
    const dispatch = useDispatch()
    const [selectedPlatform, setSelectedPlatform] = useState<string | "Platforms">("Platforms")
    const { data, isPending, error, isError } = useGetData(`/platforms`);
    console.log(data)
    
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform}</MenuButton>
            <MenuList>
                {data?.slice(0, 15).map((item: platfromType, index: number) => (
                    <MenuItem key={index} onClick={() => {
                        setSelectedPlatform(item.name)
                        dispatch(setplatform(item.id))
                    }}>{item.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}
