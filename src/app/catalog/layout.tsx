import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Каталог",
    description: "Каталог товаров",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
