"use client"
import { useGetData } from '@/hooks/useGetData';
import { Box } from '@chakra-ui/react';
import React from 'react'
import GenresSkelton from '../main/cards/GenresSkelton';
import { genresType } from '@/types/genresType';
import SubItemImage from './SubItemImage';

export default function GenresItem() {
    const { data, isPending, error, isError } = useGetData(`/genres`);
    const skelton: number[] = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {(!data && isPending) && skelton?.map((item: number) =>
                <GenresSkelton key={item} />
            )}
            {data?.map((item: genresType) =>
                <SubItemImage key={item.id} text={item.name} arm={item.image_background} />
            )}
        </>
    )
}
