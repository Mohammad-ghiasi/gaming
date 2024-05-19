"use client"
import { setgenres } from '@/redux/slices/firstSclice';
import { Box, HStack, Img, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';


export default function SubItemImage(props: { text?: string, genre: string, arm?: string }) {
    const { text, genre,  arm } = props;
    // let address = arm?.replace("/media/", "/media/crop/200/200/");
    // console.log(arm);
    const genres = useSelector((state: {counter: {value: string|null}}) => state.counter.value)
    const dispatch = useDispatch()
    // console.log(genres);
    //
    
    return (
        <Link href='/' onClick={() => dispatch(setgenres(genre))} className='transition hover:translate-x-2'>
            <HStack alignItems='center' transition='all .2s' _hover={{ color: "#7f7f7f" }}>
                <Box className='rounded-md overflow-hidden'>
                    <Img
                        alt='image'
                        src={arm}
                        loading='lazy'
                        boxSize='37px'
                    />
                </Box>
                <Box>
                    <Text fontSize='15px'>{text}</Text>
                </Box>
            </HStack>
        </Link>
    )
}
