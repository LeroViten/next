import Layout from '../components/Layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
