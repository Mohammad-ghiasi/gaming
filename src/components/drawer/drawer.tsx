"use client"
import React, { useRef } from 'react'
import { DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, useDisclosure, Input, Drawer, Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import Changer from '../switcherMode/Switch';

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
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                        <Changer />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
