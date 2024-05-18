import { Moder } from "@/moder/moder";
import { AccordionIcon, Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { MdMoreHoriz } from "react-icons/md";


export default function ShowMore() {
  return (
    <HStack alignItems='center' transition='all .2s' _hover={{ color: "#7f7f7f" }}>
      <Box>
        <IconButton
          bg='#887f7f25'
          aria-label="Open drawer"
          icon={<AccordionIcon fontSize='30px' />}
          variant="ghost"
          size="sm"
        />
      </Box>
      <Box>
        <Text fontSize='17px'><MdMoreHoriz size='25px' /></Text>
      </Box>
    </HStack>
  )
}
