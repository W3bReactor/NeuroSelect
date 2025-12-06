import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Аккаунт",
    description: "Ваш Аккаунт",
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
