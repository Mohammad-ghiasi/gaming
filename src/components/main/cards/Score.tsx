import { game } from '@/types/gametType'
import { Badge } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
interface Props {
    score: number
}
export default function Score({ score }: Props) {
    let color = score > 75 ? "green": score > 60 ? "yellow" : ''
    return (
        <Badge colorScheme={color}  paddingX={2} borderRadius='4px' style={{ display: 'flex', alignItems: 'center' }}>
            <FaPlus style={{ marginRight: '4px' }} />
            {score}
        </Badge>
    )
}
