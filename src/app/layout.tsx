import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dashboard Boilerplate V2",
    description: "Dashboard Boilerplate V2",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader
                    color="rgb(129 140 248)"
                    showSpinner={false}
                    easing="ease"
                />
                {children}
            </body>
        </html>
    );
}
