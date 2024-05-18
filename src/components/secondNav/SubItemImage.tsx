import { Box, HStack, Img, Text } from '@chakra-ui/react'
import Link from 'next/link';


export default function SubItemImage(props: { text?: string, arm?: string }) {
    const { text, arm } = props;
    let address = arm?.replace("/media/", "/media/crop/200/200/");
    console.log(arm);
    
    return (
        <Link href='/' className='transition hover:translate-x-2'>
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
