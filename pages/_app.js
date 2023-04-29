import { Layout } from "../components/layout/Layout";
import '../global-styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}