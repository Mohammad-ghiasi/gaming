import { Card, Box, CardBody, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react'


export default function CardSkelton() {
    return (
        <Card  width={{ base: "340px", md: "330px", lg: "320px", xl: "350px" }}  overflow="hidden" height="300px" cursor="pointer">
            <Skeleton startColor="gray.500" endColor="gray.500" height="300px" />
            <CardBody className="mt-5 mx-3">
                <SkeletonText startColor="gray.600" endColor="gray.500" height="80px" />
            </CardBody>
        </Card>
    )
}
