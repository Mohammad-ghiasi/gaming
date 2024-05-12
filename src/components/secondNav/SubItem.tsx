import { Moder } from '@/moder/moder'
import { Box, HStack, IconButton, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { FaFire, FaCalendarAlt, FaHashtag, FaCode } from 'react-icons/fa'
import { IoGiftOutline, IoLibraryOutline, IoChatboxOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { TbPlayerTrackNext } from "react-icons/tb"
import { TfiCup } from "react-icons/tfi";
import { PiRankingBold, PiGameControllerBold } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { HiCollection } from "react-icons/hi";
import { MdOutlineFolderCopy, MdOutlinePersonOutline  } from "react-icons/md";
import { RiSnapchatLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { LiaWindows } from "react-icons/lia";
import { RiXboxLine } from "react-icons/ri";
import { RiAppleLine } from "react-icons/ri";
import { TbBrandNetflix } from "react-icons/tb";
import { FaPlaystation } from "react-icons/fa";
import { TbBrandAndroid } from "react-icons/tb";

export default function SubItem(props: any) {
    const { text, arm } = props
    return (
        <Link href='/'>
            <HStack alignItems='center' transition='all .2s' _hover={{color:"#7f7f7f"}}>
                <Box>
                    <IconButton
                        bg={Moder("#6a6a6a", "#dcdcdc")}
                        aria-label="Open drawer"
                        icon={arm}
                        variant="ghost"
                        size="sm"
                    />
                </Box>
                <Box>
                    <Text fontSize='17px'>{text}</Text>
                </Box>
            </HStack>
        </Link>
    )
}
