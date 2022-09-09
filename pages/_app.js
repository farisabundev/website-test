import Layout from "../components/layout";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/about.scss";
import "../styles/contact.scss";
import "../styles/globals.scss";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
