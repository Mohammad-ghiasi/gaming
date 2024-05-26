"use client"
import { game } from '@/types/gametType';
import { Card, CardBody, Text, Box, Img, HStack, CardFooter, IconButton, Divider, Button, Icon } from '@chakra-ui/react'
import NextImage from 'next/image';
import Platforms from './Platforms';
import Score from './Score';
import { useState } from 'react';
import { LuGift } from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";
import { MdArrowForward } from 'react-icons/md';
import Link from 'next/link';

interface Props {
    game: game;
}

export default function GameCard({ game }: Props): JSX.Element {
    const { id, name, background_image, parent_platforms, genres, ratings_count, released, slug } = game;
    let address = background_image?.replace("/media/", "/media/crop/600/400/");
    const [isHovered, setIsHovered] = useState(false);


    return (
        <Link href={`/game/${slug}`}>
            <Card
                bg={isHovered ? 'rgba(140, 133, 133, 0.48)' : ''}
                onMouseLeave={() => setIsHovered(false)}
                overflow='hidden'
                transition='all .3s'
                height='340px'
                _hover={{
                    boxShadow: '6px 10px 30px  #46424245',
                    transform: 'scale(1.04)',
                }}
                cursor='pointer'
            >
                <Box overflow='hidden'>
                    <Img
                        alt={name}
                        src={address}
                        objectFit='cover'
                        loading='lazy'
                        _hover={{ transform: 'scale(1.1) rotate(4deg)' }}
                        transition='all .3s'
                    />
                </Box>

                <CardBody
                    className="flex flex-col items-start my-2 mx-3"
                    onMouseEnter={() => setIsHovered(true)}
                >
                    <Box className="flex flex-col space-y-3">
                        <Box>
                            <Platforms platforms={parent_platforms.map(p => p.platform)} />
                        </Box>
                        <Text className='text-xl font-bold'>{name}</Text>
                        <HStack spacing={3}>
                            <Score score={ratings_count} />

                            <IconButton
                                transition="all .5s"
                                opacity={isHovered ? 1 : 0}
                                aria-label="Gift"
                                icon={<LuGift size='16px' />} // Use the gift icon
                                size='13px'
                                bg="transparent"
                                _hover={{ color: '#827e7e' }}
                            />


                            <IconButton
                                transition="all .5s"
                                opacity={isHovered ? 1 : 0}
                                aria-label="Gift"
                                icon={<TfiMoreAlt size='16px' />} // Use the gift icon
                                size='13px'
                                bg="transparent"
                                _hover={{ color: '#827e7e' }}
                            />

                        </HStack>
                    </Box>

                    <Box
                        transition="opacity 0.3s, transform 0.5s"
                        opacity={isHovered ? 1 : 0}
                        transform={isHovered ? 'translateY(0)' : 'translateY(20px)'}
                        bottom={0}
                        width="100%"

                    >
                        {isHovered && (
                            <Box marginTop='20px' marginBottom='6px'>
                                <Box className='flex flex-row justify-between my-2'>
                                    <Text className="text-[14px] text-gray-400">Release date:</Text>
                                    <Text className="text-[14px] font-bold ">{released}</Text>
                                </Box>
                                <Divider />
                                <Box className='flex flex-row justify-between my-2'>
                                    <Text className="text-[14px] text-gray-400">Genres:</Text>
                                    <Box className="text-[13px] ">
                                        {genres.map((item: any) => <span className='ms-1 underline' key={item?.id}>{item?.name},</span>)}
                                    </Box>
                                </Box>
                                <Link href='/'>
                                    <Box className="w-[100%] flex flex-row justify-between items-center bg-gray-500 rounded-lg mt-4 py-1 px-3 hover:bg-slate-600 transition ">
                                        <Text>show more like this</Text>
                                        <Icon as={MdArrowForward} boxSize={5} />
                                    </Box>
                                </Link>
                            </Box>
                        )}
                    </Box>

                </CardBody>

            </Card>
        </Link>
    )
}
