"use client"
import React from 'react'
import { useGetData } from "@/hooks/useGetData";
import { Text, Box, Flex, SimpleGrid, Button } from '@chakra-ui/react';
import VerticalNav from '../secondNav/VerticalNav';
import { game } from '@/types/gametType';
import GameCard from './cards/GameCard';
import { log } from 'console';
import Image from 'next/image';
import CardSkelton from './cards/CardSkelton';

export default function Body() {
    const { data, isPending, error, isError } = useGetData("/games")
    const skelton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (
        <>
            <Flex>
                <Flex flex={{ base: "0", lg: "2" }}>
                    <VerticalNav />
                </Flex>
                <Flex flex={{ base: "12", lg: "10" }} justifyContent='center'>
                    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={18}>
                        {isPending && skelton.map((item: number) =>
                            <CardSkelton key={item} />
                        )}
                        {data?.map((item: game) =>
                            <GameCard key={item?.id} game={item} />
                        )}
                        <Button  width='100%' height='100%'>Load more...</Button>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    )
}
