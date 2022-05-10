import { useEffect } from 'react';
import { useRouter } from 'next/router';
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
      <Heading text="Error! Nothing here! 😟" />
      <Heading tag="h2" text="We'll forward you to the main page..." />
    </>
  );
}
