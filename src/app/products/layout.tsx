import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Товары | Категории",
    description: "Товары",
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
