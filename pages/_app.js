import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
