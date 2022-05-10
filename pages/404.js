import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Heading from '../components/Heading';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Not Found Page</title>
      </Head>
      <Heading text="Error! Nothing here! 😟" />
      <Heading tag="h2" text="We'll forward you to the main page..." />
    </>
  );
}
