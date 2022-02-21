import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MainContainer } from "../components/ui/MainContainer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <MainContainer>
                <Component {...pageProps} />
            </MainContainer>
        </SessionProvider>
    );
}

export default MyApp;
