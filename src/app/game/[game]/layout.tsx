import type { Metadata } from "next";
import { Box, Flex } from "@chakra-ui/react";
import VerticalNav from "@/components/secondNav/VerticalNav";


export const metadata: Metadata = {
    title: "game",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box className="p-smallSC-P md:px-largSC-P md:py-10">
            <Flex>
                <Flex flex={{ base: "0", lg: "2" }}>
                    <VerticalNav />
                </Flex>
                <Box flex={{ base: "12", lg: "10" }}>
                    <Box className="mb-6">
                        {children}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}