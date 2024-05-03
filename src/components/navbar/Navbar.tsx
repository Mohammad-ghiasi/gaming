import { Box, Flex, Spacer, HStack, Show } from "@chakra-ui/react";
import Link from "next/link";
import SearchInput from "../searchInput/SearchInput";
import MenuBar from "../menu/Menu";
import ModalSearch from "../modalSearch/modalSearch";
import DrawerBar from "../drawer/drawer";


export default function Navbar(): JSX.Element {


  return (
    <Flex
      className="p-3 md:px-10 md:pt-6"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      direction="row"
    >
      <Flex align="center" mr={5}>
        <Box fontSize="xl" transition="all .2s" _hover={{ color: "#cd7721" }} fontWeight="bold" className="letter-spacing-[30px] font-bold">
          <Link href='/'>R A W G</Link>
        </Box>
      </Flex>

      <Box flex='12'>
        <Show above="md"  >
          <SearchInput />
        </Show>
      </Box>
      <Spacer />

      <HStack spacing={4}>
        <Show above="md">
          <Link className="text-[14px] font-bold transition hover:scale-125" href='/'>LOG IN</Link>
          <Link className="text-[14px] font-bold transition hover:scale-125" href='/'>SING IN</Link>
          <Link className="text-[14px] font-bold transition hover:scale-125" href='/'>API</Link>
          <MenuBar />
        </Show>
        <Box className="md:hidden">
          <ModalSearch />
          <DrawerBar />
        </Box>
      </HStack>
    </Flex>
  );
};
