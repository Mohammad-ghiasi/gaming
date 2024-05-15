
// import { Image } from '@chakra-ui/next-js';
import { game, platform } from '@/types/gametType';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Image, Img, VStack, HStack } from '@chakra-ui/react'
import NextImage from 'next/image';
import Platforms from './Platforms';
import Score from './Score';
interface Props {
    game: game
}
export default function GameCard({ game }: Props) {
    const { id, name, background_image, parent_platforms, metacritic } = game;

    let address = background_image.replace("/media/", "/media/crop/600/400/");;

    return (
        <Card
            overflow='hidden'
            transition='all .3s'
            _hover={{
                boxShadow: '6px 10px 30px  #46424245',
                transform: 'scale(1.04)'
            }}
            cursor='pointer'
        >
            <Box overflow='hidden'>
                <Img
                    alt={name}
                    src={address}
                    // objectFit='cover'
                    loading='lazy'
                    _hover={{ transform: 'scale(1.1) rotate(4deg)'}}
                    transition='all .3s'
                />
            </Box>
            <CardBody className="mt-5 mx-3">
                <Text className='text-xl font-bold'>{name}</Text>
                <HStack justifyContent='space-between'>
                    <Platforms platforms={parent_platforms.map(p => p.platform)} />
                    <Score score={metacritic} />
                </HStack>
            </CardBody>

            {/* <Divider />
            <CardFooter>
               
            </CardFooter> */}
        </Card>
    )
}
