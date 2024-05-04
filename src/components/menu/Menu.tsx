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
            <MenuList bg={Moder("#141121", "#ebebeb")} >
                <MenuItem  bg={Moder("#141121", "#ebebeb")}><Text className="transition w-[100%] hover:scale-[105%]"><Changer dark={"Dark mode"} light={"Ligth mode"}/></Text></MenuItem>
                <Divider />
                <MenuItem  bg={Moder("#141121", "#ebebeb")}><Text className="transition w-[100%] hover:scale-[105%]">Leaderboard</Text></MenuItem>
                <Divider />
                <MenuItem  bg={Moder("#141121", "#ebebeb")}><Text className="transition w-[100%] hover:scale-[105%]">@Rawgtheword</Text></MenuItem>
                <Divider />
                <MenuItem  bg={Moder("#141121", "#ebebeb")}><Text className="transition w-[100%] hover:scale-[105%]">@Rawgthepictures</Text></MenuItem>
                <Divider />
                <MenuItem  bg={Moder("#141121", "#ebebeb")}><Text className="transition w-[100%] hover:scale-[105%]">Sitemap</Text></MenuItem>
            </MenuList>
        </Menu>
    )
}