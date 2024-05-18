"use client"
import { useGetData } from '@/hooks/useGetData'
import { Button } from '@chakra-ui/react'
import CardSkelton from './CardSkelton'
import { game } from '@/types/gametType'
import GameCard from './GameCard'
import SimpleGridBox from './SimpleGridBox'


export default function GameList() {
    const { data, isPending, error, isError } = useGetData(`/games`)
    const skelton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    return (
        <SimpleGridBox>
            {(!data && isPending) && skelton?.map((item: number) =>
                <CardSkelton key={item} />
            )}
            {data?.map((item: game) =>
                <GameCard key={item?.id} game={item} />
            )}
            <Button width='100%' height='100%'>Load more...</Button>
        </SimpleGridBox>
    )
}