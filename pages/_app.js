import { Layout } from "@layout/Layout";
import '../styles/global.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
