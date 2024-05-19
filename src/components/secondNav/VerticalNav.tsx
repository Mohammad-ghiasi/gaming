import React from 'react'
import ShowMore from './ShowMore'
import Link from 'next/link'
import GenresItem from './GenresItem'
import { Box } from '@chakra-ui/react'


export default function VerticalNav() {
    return (
        <Box className='hidden lg:flex flex-col space-y-7'>
            <Link href='/' className='font-bold text-xl transition hover:text-gray-400'>Genres</Link>
            <Box className='flex flex-col space-y-3'>
                <GenresItem />
            </Box>
        </Box>
    )
}