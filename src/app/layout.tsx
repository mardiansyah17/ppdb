import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/libs/materialTailwind";
import theme from "@/libs/theme";
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({subsets: ['latin'], weight: "300"});

export const metadata: Metadata = {
    title: "PPDB",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${poppins.className} bg-[#F1F3F5]`}>
        <NextTopLoader showSpinner={false} color={'#00955B'}/>
        <ThemeProvider value={theme}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
