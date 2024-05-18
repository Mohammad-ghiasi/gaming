import { HStack, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function GenresSkelton() {
  return (
    <>
        <HStack>
            <SkeletonCircle startColor="gray.600" endColor="gray.500" />
            <SkeletonText width='110px' startColor="gray.500" endColor="gray.500" />
        </HStack>
    </>
  )
}
