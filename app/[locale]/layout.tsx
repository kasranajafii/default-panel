import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ReactElement } from "react";
import ClientLayout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

type TLayoutProps = {
    params: {
        locale: "fa" | "en";
    };
    children: ReactElement;
};
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    params: { locale },
    children,
}: TLayoutProps) {
    return (
        <html
            dir={`${["ar", "fa"].includes(locale) ? "rtl" : "ltr"}`}
            lang={locale}
        >
            <body className={inter.className}>
                <ClientLayout locale={locale}>{children}</ClientLayout>
            </body>
        </html>
    );
}
