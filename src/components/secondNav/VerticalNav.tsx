import React from 'react'
import ShowMore from './ShowMore'
import Link from 'next/link'
import SubItem from './SubItem'
import GenresItem from './GenresItem'
import {
    Box, Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
import { FaFire, FaCode, FaHashtag } from 'react-icons/fa'
import { IoGiftOutline, IoLibraryOutline } from 'react-icons/io5'
import { LuUsers } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { TbPlayerTrackNext } from "react-icons/tb"
import { TfiCup } from "react-icons/tfi";
import { PiRankingBold } from "react-icons/pi";
import { LuCrown } from "react-icons/lu";
import { PiGameControllerBold } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { HiCollection } from "react-icons/hi";
import { MdOutlineFolderCopy, MdOutlinePersonOutline } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { RiSnapchatLine } from "react-icons/ri";
import { LiaWindows } from "react-icons/lia";
import { RiXboxLine } from "react-icons/ri";
import { RiAppleLine } from "react-icons/ri";
import { TbBrandNetflix } from "react-icons/tb";
import { FaPlaystation } from "react-icons/fa";
import { TbBrandAndroid } from "react-icons/tb";

export default function VerticalNav() {
    return (
        <Box className='hidden lg:flex flex-col space-y-7'>
            <Link href='/' className='font-bold text-xl transition hover:text-gray-400'>Genres</Link>
            <Box className='flex flex-col space-y-3'>
                <GenresItem />
            </Box>

            <Link href='/' className='font-bold text-xl transition hover:text-gray-400'>Home</Link>
            <Link href='/' className='font-bold text-xl transition hover:text-gray-400'>Reviews</Link>
            <Link href='/' className='font-bold text-xl transition hover:text-gray-400'>All Games</Link>
            <Box className='flex flex-col space-y-3'>
                <SubItem text='WishList' arm={<IoGiftOutline size='26px' />} />
                <SubItem text='My Library' arm={<IoLibraryOutline size='26px' />} />
                <SubItem text='People you follow' arm={<LuUsers size='26px' />} />
            </Box>
            <Text className='font-bold text-xl'>New Releases</Text>
            <Box className='flex flex-col space-y-3'>
                <SubItem text='Last 30 day' arm={<FaStar size='26px' />} />
                <SubItem text='This week' arm={<FaFire size='26px' />} />
                <SubItem text='Next week' arm={<TbPlayerTrackNext size='26px' />} />
                <SubItem text='Releas calender' arm={<HiCollection size='26px' />} />
            </Box>
            <Text className='font-bold text-xl'>Top</Text>
            <Box className='flex flex-col space-y-3'>
                <SubItem text='Best of year' arm={<TfiCup size='26px' />} />
                <SubItem text='Popular in 2023' arm={<PiRankingBold size='26px' />} />
                <SubItem text='All time top 250' arm={<LuCrown size='26px' />} />
            </Box>
            <Link href='/' className='font-bold text-xl transition hover:text-gray-400'>Browse</Link>
            <Box className='flex flex-col space-y-3'>
                <SubItem text='Platform' arm={<PiGameControllerBold size='26px' />} />
                <SubItem text='Stores' arm={<FiDownload size='26px' />} />
                <SubItem text='Collections' arm={<MdOutlineFolderCopy size='26px' />} />
                <Accordion allowToggle border="none">
                    <AccordionItem border="none">

                        <AccordionPanel>
                            <Box className='flex flex-col space-y-3 mb-3'>
                                <SubItem text='Review' arm={<MdChatBubbleOutline size='26px' />} />
                                <SubItem text='Genres' arm={<RiSnapchatLine size='26px' />} />
                                <SubItem text='Creators' arm={<MdOutlinePersonOutline size='26px' />} />
                                <SubItem text='Tags' arm={<FaHashtag size='26px' />} />
                                <SubItem text='Developer' arm={<FaCode size='26px' />} />
                            </Box>
                        </AccordionPanel>

                        <AccordionButton as='div'>
                            <ShowMore />
                        </AccordionButton>
                    </AccordionItem>
                </Accordion>
            </Box>
            <Link href='/' className='font-bold text-xl transition hover:text-gray-400'>Platforms</Link>
            <Box className='flex flex-col space-y-3'>
                <SubItem text='PC' arm={<LiaWindows size='26px' />} />
                <SubItem text='XBox' arm={<RiXboxLine size='26px' />} />
                <SubItem text='Nintendo switch' arm={<TbBrandNetflix size='26px' />} />

                <Accordion allowToggle border="none">
                    <AccordionItem border="none">

                        <AccordionPanel>
                            <Box className='flex flex-col space-y-3 mb-3'>
                                <SubItem text='IOS' arm={<RiAppleLine size='26px' />} />
                                <SubItem text='Playstation' arm={<FaPlaystation size='26px' />} />
                                <SubItem text='Android' arm={<TbBrandAndroid size='26px' />} />
                            </Box>
                        </AccordionPanel>

                        <AccordionButton as='div'>
                            <ShowMore />
                        </AccordionButton>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    )
}