"use client"
import { Button, Menu, MenuButton, MenuList, MenuItem, Divider, Text } from "@chakra-ui/react";
import { MdMoreHoriz } from "react-icons/md";
import Changer from "../switcherMode/Switch";
import { Moder } from "@/moder/moder";

export default function MenuBar() {

    return (
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
            <MenuList bg={Moder()} >
                <MenuItem  bg={Moder()}><Text className="transition hover:scale-110"><Changer /></Text></MenuItem>
                <Divider />
                <MenuItem  bg={Moder()}><Text className="transition hover:scale-110">Create a Copy</Text></MenuItem>
                <Divider />
                <MenuItem  bg={Moder()}><Text className="transition hover:scale-110">Mark as Draft</Text></MenuItem>
                <Divider />
                <MenuItem  bg={Moder()}><Text className="transition hover:scale-110">Delete</Text></MenuItem>
                <Divider />
                <MenuItem  bg={Moder()}><Text className="transition hover:scale-110">Attend a Workshop</Text></MenuItem>
            </MenuList>
        </Menu>
    )
}