
// import { Image } from '@chakra-ui/next-js';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Image, Img, VStack } from '@chakra-ui/react'
import NextImage from 'next/image';
export default function GameCard(props: { name: string, image: string, id: number }) {
    const { name, image, id } = props;
    return (
        <Card overflow="hidden" className='' height='auto'>
            <Img
                alt={name}
                src={image}
                // objectFit='cover'
                loading='lazy'
            />
            <CardBody className="mt-5 mx-5">
                <Text>{name}</Text>
            </CardBody>

            {/* <Divider />
            <CardFooter>
               
            </CardFooter> */}
        </Card>
    )
}
