"use client"
import React from 'react'
import { Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";

export default function ModalSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        aria-label="Search"
        icon={<FaSearch />}
        variant="none"
        colorScheme="none"
        onClick={onOpen}
      />

      <Modal
        
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Games</ModalHeader>
          <ModalBody >
            <FormControl>
              <Input placeholder='Game Name...' />   
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="flex-start">
            <Button variant='outline'>
              Search
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}