"use client"
import { useGetGame } from '@/hooks/useGetGame'
import { Box, Img, Text } from '@chakra-ui/react'
interface Params {
  params: {
    game: string
  }
};

export default function Game({ params }: Params) {

  const { data, isPending, error, isError } = useGetGame('/games', `${params?.game}`)
  console.log(data);
  let address = data?.background_image.replace("/media/", "/media/crop/600/400/");
  return (
    <>
    <Img
          alt={data?.name}
          src={address}
          style={{
            backgroundImage: `url(${address})`,
            filter: 'brightness(20%) blur(6px)',
          }}
          className='fixed  top-0 start-0 z-[-100] bg-fixed bg-center bg-cover h-screen w-[100%] '
        />
      <Box className='relative'>
        

        <Box className="absolute top-0 start-0" style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Text>The spetuall game route for each game...</Text>
          <Text>The game of {params?.game}</Text>
        </Box>
      </Box>
    </>
  )
}
