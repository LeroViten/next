import Head from 'next/head';
import Heading from '../components/Heading';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Heading text="These are the posts:" />
    </>
  );
}
