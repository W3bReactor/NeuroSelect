import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Авторизация",
    description: "Авторизация модератора",
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
