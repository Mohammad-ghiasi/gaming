"use client"
import React from 'react'
import { Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { setsearch } from '@/redux/slices/searchSlice';

interface input {
  searchWord: string
}

export default function ModalSearch() {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
    setValue
  } = useForm<input>()

  const onSubmit: SubmitHandler<input> = (data: { searchWord: string }) => {
    const modifiedSearchWord = data.searchWord.replace(/ /g, '-');
    dispatch(setsearch(modifiedSearchWord))
    setValue('searchWord', '');
    onClose()
  }
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
        <ModalOverlay
          bg="rgba(0, 0, 0, 0.6)"
          backdropFilter="blur(6px)"
        />
        <ModalContent bg="rgba(229, 229, 229, 0.032)" backdropFilter="blur(10px)" color="black">
          <ModalBody >
            <form className='w-[100%] my-2 p-0' onSubmit={handleSubmit(onSubmit)}>
              <Input {...register('searchWord', { required: true })} placeholder='Game Name...' />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}