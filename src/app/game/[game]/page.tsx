"use client"
import Platforms from '@/components/main/cards/Platforms'
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
          filter: 'brightness(40%) blur(13px)',
        }}
        className='fixed  top-0 start-0 z-[-100] bg-fixed bg-center bg-cover h-screen w-[100%] bg-black '
      />
      <Box>
        <Box className="">
          <Box className='flex flex-row space-x-3 '>
            <Box className='flex flex-row space-x-1 '>
              <Platforms platforms={data?.parent_platforms.map((p: any) => p.platform)} />
            </Box>
            {!isPending && (
              <Text>AVERAGE PLAYTIME: {data?.suggestions_count} HOURS</Text>
            )}
          </Box>
        </Box>
        <Text className='mt-12 text-3xl'>{data?.name}</Text>

        {!isPending && (
          <Box className="flex flex-col space-y-2 mt-5">

            <Text className='text-md'>id: {data?.id}</Text>
            <Text className='text-md'>slug: {data?.slug}</Text>
            <Text className='text-md'>achievements_count: {data?.achievements_count}</Text>
            <Text className='text-md'>added: {data?.added}</Text>
            <Text className='text-md'>ratings_count: {data?.ratings_count}</Text>
            <Text className='text-md'>dominant_color: {data?.dominant_color}</Text>
            <Text className='text-md'>metacritic_url: {data?.metacritic_url}</Text>
            <Text className='text-md'>updated: {data?.updated}</Text>
            <Text className='text-md'>metacritic_url: {data?.metacritic_url}</Text>
            <Text className='text-md'>youtube_count: {data?.youtube_count}</Text>
          </Box>
        )}
      </Box>
    </>
  )
}
