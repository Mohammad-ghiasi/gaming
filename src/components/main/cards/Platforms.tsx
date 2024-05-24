import { platform } from '@/types/gametType'
import { HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa'

import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface Props {
    platforms: platform[]
}
export default function Platforms({ platforms }: Props) {
    const iconMap: { [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack >
            {platforms.map((platform: any) => <Icon key={platform.id} color='gray.400'  className="transition hover:text-orange-500" as={iconMap[platform.slug]} />)}
        </HStack>
    )
}
