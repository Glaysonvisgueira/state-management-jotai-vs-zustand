import "@/styles/globals.css";
import Layout from "../components/templates/Layout";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
