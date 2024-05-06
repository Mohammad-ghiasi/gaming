"use client"
import React, { useRef } from 'react'
import { DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, useDisclosure, Input, Drawer, Button, Box, Text, Divider, Flex, Tooltip } from "@chakra-ui/react";
import Changer from '../switcherMode/Switch';
import { FaMoon, FaSun, FaBars, FaStar, FaThumbsUp } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";

import { Moder } from '@/moder/moder';
import Link from 'next/link';


export default function DrawerBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <IconButton
                ref={btnRef}
                onClick={onOpen}
                aria-label="Open drawer"
                icon={<FaBars />}
                variant="ghost"
            />


            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        R A W G
                        <Divider marginY="4" />
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex
                            justify="center"
                            wrap="wrap"
                            direction="row"
                        >
                            <Box flex='9' className="flex flex-col space-y-3 h-[100%] mt-2">
                                <Text className="text-lg font-bold transition hover:scale-110"><Link href='/'>Reviews</Link></Text>
                                <Text className="text-lg font-bold transition hover:scale-110"><Link href='/'></Link>API</Text>
                                <Text className="text-lg font-bold transition hover:scale-110"><Link href='/'></Link>Get an API Key</Text>
                                <Text className="text-lg font-bold transition hover:scale-110"><Link href='/'>Brows</Link></Text>
                                <Box className="flex flex-col space-y-2">
                                    <Text className="text-md font-light transition hover:scale-110"><Link href='/'>Reviews</Link></Text>
                                    <Text className="text-md font-light transition hover:scale-110"><Link href='/'>Collections</Link></Text>
                                    <Text className="text-md font-light transition hover:scale-110"><Link href='/'>Platforms</Link></Text>
                                    <Text className="text-md font-light transition hover:scale-110"><Link href='/'>Stores</Link></Text>
                                    <Text className="text-md font-light transition hover:scale-110"><Link href='/'>Creators</Link></Text>
                                    <Text className="text-md font-light transition hover:scale-110"><Link href='/'>Tags</Link></Text>
                                    <Text className="text-md font-light transition hover:scale-110"><Link href='/'>Developres</Link></Text>
                                    <Text className="text-md font-light transition hover:scale-110"><Link href='/'>Publishers</Link></Text>
                                </Box>
                            </Box>
                            <Box flex='3' className="flex  items-center flex-col space-y-3">
                                <Tooltip hasArrow label='Log in' placement='left'>
                                    <Box bg={Moder("#3e3e3e", "#ebebeb")} className="text-center p-3 rounded-full"><RiLoginBoxFill className='hover:scale-110 cursor-pointer transition-all' style={{ fontSize: '1.3rem' }} /></Box>
                                </Tooltip>
                                <Tooltip hasArrow label='Sign in' placement='left'>
                                    <Box bg={Moder("#3e3e3e", "#ebebeb")} className="text-center p-3 rounded-full"><IoPersonAdd className='hover:scale-110 cursor-pointer transition-all' style={{ fontSize: '1.3rem' }} /></Box>
                                </Tooltip>
                                <Tooltip hasArrow label='Rate Top games' placement='left'>
                                    <Box bg={Moder("#3e3e3e", "#ebebeb")} className="text-center p-3 rounded-full"><FaThumbsUp className='hover:scale-110 cursor-pointer transition-all' style={{ fontSize: '1.3rem' }} /></Box>
                                </Tooltip>
                                <Tooltip hasArrow label='Change Theme' placement='left'>
                                    <Box bg={Moder("#3e3e3e", "#ebebeb")} className="text-center p-3 rounded-full"><Changer dark={<FaMoon className='hover:scale-110 cursor-pointer transition-all' style={{ fontSize: '1.3rem' }} />} light={<FaSun className='hover:scale-110 cursor-pointer transition-all' style={{ fontSize: '1.5rem' }} />} /></Box>
                                </Tooltip>
                            </Box>

                        </Flex>
                    </DrawerBody>

                    <DrawerFooter  flexDirection='column'>
                        <Divider marginY="4" />
                        <Text  textAlign='center'>© 2024 Mohammad ghiasi</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </>
    )
}


// <Changer dark={<FaMoon />} light={<FaSun />}/>