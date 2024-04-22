// layout.tsx
'use client';
import {Raleway} from "next/font/google";
import {MessageProvider} from "./MessageContext";
import MessageComponent from "./MessageComponent";
import "./globals.css";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import {usePathname} from "next/navigation";

const raleway = Raleway({subsets: ["latin"]});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

    const path = usePathname();

    const matchMessagesPath = /^\/messages(\/[a-fA-F0-9]+)?$/;
    const dynamicPasswordRegex = /^\/password\/.*$/;
    const isPasswordPath = dynamicPasswordRegex.test(path);

    return (
        <html lang="fr">
        <head>
            <title>Domi</title>
            <style jsx global>{`
                button,
                input,
                input::placeholder,
                select,
                div.react-input-emoji--placeholder{
                    font-family: ${raleway.style.fontFamily};
                }
            `}</style>
        </head>
        <body className={raleway.className}>
        <MessageProvider>
            <MessageComponent/>
            { path == '/connexion' || path == '/inscription' || path == '/mot-de-passe-oublie' || isPasswordPath ? <header></header> : <Header/> }
            {children}
            {matchMessagesPath.test(path) || path === '/connexion' || path === '/inscription' ? <footer></footer> : <Footer/>}
        </MessageProvider>
        </body>
        </html>
    );
}
