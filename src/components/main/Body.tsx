"use client"
import React from 'react'
import { useGetData } from "@/hooks/useGetData";
import { Text, Box, Flex, SimpleGrid } from '@chakra-ui/react';
import VerticalNav from '../secondNav/VerticalNav';
import { game } from '@/types/gametType';
import GameCard from './cards/GameCard';
import { log } from 'console';
import Image from 'next/image';

export default function Body() {
    const { data, isPending, error, isError } = useGetData("/games")
    

    return (
        <>
            <Flex>
                <Flex flex={{ base: "0", lg: "2" }}>
                    <VerticalNav />
                </Flex>
                <Flex flex={{ base: "12", lg: "10" }}>
                    {(!data && isPending) && <Text>Loading</Text>}
                    <SimpleGrid columns={{sm: 1, md: 2, xl: 3}} spacing={18}>
                        {data?.map((item: game) =>  <GameCard key={item?.id} game={item} />
                        )}
                        {/* <GameCard key={item?.id} id={item?.id} name={item?.name} image={item?.background_image} /> */}
                        {/* <GameCard id={item.id} name={item.name} image={item.background_image} /> */}
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    )
}
