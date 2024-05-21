"use client"
import { useGetData } from '@/hooks/useGetData'
import { Button } from '@chakra-ui/react'
import CardSkelton from './CardSkelton'
import { game } from '@/types/gametType'
import GameCard from './GameCard'
import SimpleGridBox from './SimpleGridBox'
import { useSelector } from 'react-redux'


export default function GameList() {
    const genres = useSelector((state: {counter: {value: string|null}}) => state.counter.value)
    const platform = useSelector((state: {platform: {value: number|null}}) => state.platform.value)
    let address: string = ''

    if (genres !== null) {
        address = `?genres=${genres}`
    }else if (platform !== null) {
        address = `?platforms=${platform}`
    }

    const { data, isPending, error, isError } = useGetData(`/games${address}`)
    const skelton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    return (
        <SimpleGridBox>

            {(!data && isPending) && skelton?.map((item: number) =>
                <CardSkelton key={item} />
            )}
            {data?.map((item: game) =>
                <GameCard key={item?.id} game={item} />
            )}
            <Button width='100%' height='100%' paddingY='6px'>Load more...</Button>
        </SimpleGridBox>
    )
}