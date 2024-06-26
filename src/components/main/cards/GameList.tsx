"use client"
import { useGetData } from '@/hooks/useGetData'
import { Button } from '@chakra-ui/react'
import CardSkelton from './CardSkelton'
import { game } from '@/types/gametType'
import GameCard from './GameCard'
import SimpleGridBox from './SimpleGridBox'
import { useSelector } from 'react-redux'
import { useState } from 'react'


export default function GameList() {
    const genres = useSelector((state: {counter: {value: string|null}}) => state.counter.value)
    const platform = useSelector((state: {platform: {value: number|null}}) => state.platform.value)
    const search = useSelector((state: {search: {value: string|null}}) => state.search.value)
    const [page, setPage] = useState<number>(1)

    let address: string = '';

    if (genres !== null) {
        address = `?genres=${genres}`;
    }else if (platform !== null) {
        address = `?platforms=${platform}`;
    }else if (search !== null) {
        address = `?search=${search}`;
    };

    const { data, isPending, error, isError, next, previous } = useGetData(`/games${address}`);
    console.log(next);
    
    const skelton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <SimpleGridBox>
            {(!data && isPending) && skelton?.map((item: number) =>
                <CardSkelton key={item} />
            )}
            {data?.map((item: game) =>
                <GameCard key={item?.id} game={item} />
            )}
            <Button onClick={(): void => setPage(page+1)} width='100%' height='100%' paddingY='6px'>Load more...</Button>
        </SimpleGridBox>
    )
}