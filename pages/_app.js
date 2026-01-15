import { Layout } from "../components/Layout/Layout";
import '../styles/global.css';
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}