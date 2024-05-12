import { Box, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image';
import Link from 'next/link';


export default function SubItemImage(props: { text: string, arm: string }) {
    const { text, arm } = props
    return (
        <Link href='/'>
            <HStack alignItems='center' transition='all .2s' _hover={{ color: "#7f7f7f" }}>
                <Box className='relative w-[35px] h-[35px] rounded-md overflow-hidden'>
                    <Image
                        alt='image'
                        src={arm}
                        fill
                        loading='lazy'
                    />
                </Box>
                <Box>
                    <Text fontSize='15px'>{text}</Text>
                </Box>
            </HStack>
        </Link>
    )
}
