"use client"
import React from 'react'
import { Box, Input, InputGroup, InputLeftElement, Button, HStack, Show, InputRightElement, useColorMode } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { useEffect, useRef } from "react";
import { Moder } from '@/moder/moder';
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { setsearch } from '@/redux/slices/searchSlice';

interface input {
    searchWord: string
}

const SearchInput = () => {
    const dispatch = useDispatch()
    const { colorMode } = useColorMode();
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.altKey && event.key === "i") {
                // Focus on the input when  Alt + I is pressed
                inputRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const {
        register,
        handleSubmit,
        setValue 
    } = useForm<input>()

    const onSubmit: SubmitHandler<input> = (data: {searchWord: string}) => {
        const modifiedSearchWord = data.searchWord.replace(/ /g, '-');
        // console.log(modifiedSearchWord);
        dispatch(setsearch(modifiedSearchWord))
        setValue('searchWord', '');
    }

    return (
        <HStack className="ml-7">
            <Show above="xl">
                <Button
                    aria-label='Send email'
                    size="sm"
                    bg={Moder("#141121", "#ebebeb")}
                    leftIcon={<MdStarRate size='17px' />}
                    // textColor='black'
                    paddingRight='26px'
                    paddingLeft='20px'
                    marginRight='15px'
                    onClick={() => {
                        window.location.href = "https://www.rawg.io/games";
                    }}
                >
                    Rate Top Games
                </Button>
            </Show>
            <form className='w-[100%]' onSubmit={handleSubmit(onSubmit)}>
                <InputGroup className="w-[30%]" size={{ md: 'md', lg: 'lg' }}>
                    <InputLeftElement pointerEvents="none">
                        <FaSearch color="gray.300" />
                    </InputLeftElement>
                    <Input
                        w="100%"
                        {...register('searchWord', { required: true })}
                        bg={Moder('#141121', '#ebebeb')}
                        type="text"
                        _hover={{ bg: colorMode === 'dark' ? 'gray.700' : 'gray.200' }} // Change background color of input on hover based on color mode
                        rounded="full"
                        placeholder="Search 866,602 games"
                    />
                    <InputRightElement>
                        <Box
                            as="button"
                            cursor="pointer"
                            aria-label="Shortcut info"
                            bg="transparent"
                            border="none"
                            outline="none"
                            marginRight="50px"
                        >
                            <kbd className="flex">
                                <abbr className="text-sm text-[#939393] bg-['#939393'] px-1 py-0">
                                    Alt
                                </abbr>
                                <abbr className="text-sm text-[#939393] bg-['#939393'] px-1 py-0">
                                    +
                                </abbr>
                                <abbr className="text-sm text-[#939393] bg-['#939393'] px-1 py-0">
                                    I
                                </abbr>
                            </kbd>
                        </Box>
                    </InputRightElement>
                </InputGroup>
            </form>
        </HStack>
    )
}

export default SearchInput