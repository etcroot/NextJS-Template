import { Layout } from "../components/Layout";
import "../styles/globals.css";

function TemplateApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default TemplateApp;
