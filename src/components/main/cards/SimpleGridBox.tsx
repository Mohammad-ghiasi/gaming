import { SimpleGrid } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function SimpleGridBox({children}: {children: ReactNode}) {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={18} placeItems='center' >
        {children}
    </SimpleGrid>
  )
}
