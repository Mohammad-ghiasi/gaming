import { Flex, Box } from '@chakra-ui/react';
import VerticalNav from '../secondNav/VerticalNav';
import GameList from './cards/GameList';
import PlatformSelector from './cards/PlatformSelector';

export default function Body() {

    return (
        <Flex>
            <Flex flex={{ base: "0", lg: "2" }}>
                <VerticalNav />
            </Flex>
            <Flex flex={{ base: "12", lg: "10" }} justifyContent='center' flexDirection='column'>
                <Box className="mb-6 ">
                    <PlatformSelector />
                </Box>
                <GameList />
            </Flex>
        </Flex>
    )
}
