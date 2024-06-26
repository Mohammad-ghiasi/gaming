import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/ChackraProvider";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/themes/darkLigth";
import Navbar from "@/components/headers/navbar/Navbar";
import ReduxProvider from "@/providers/ReduxProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Video game",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Providers>
            <ColorModeScript initialColorMode={theme?.config.initialColorMode} />
            <ReactQueryProvider>
              <header>
                <Navbar />
              </header>
              <main>
                {children}
              </main>
            </ReactQueryProvider>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
