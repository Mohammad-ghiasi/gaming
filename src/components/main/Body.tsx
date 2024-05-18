import { Flex } from '@chakra-ui/react';
import VerticalNav from '../secondNav/VerticalNav';
import GameList from './cards/GameList';

export default function Body() {

    return (
        <Flex>
            <Flex flex={{ base: "0", lg: "2" }}>
                <VerticalNav />
            </Flex>
            <Flex flex={{ base: "12", lg: "10" }} justifyContent='center'>
                <GameList />
            </Flex>
        </Flex>
    )
}
