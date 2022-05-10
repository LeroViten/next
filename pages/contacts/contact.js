import Head from 'next/head';
import Heading from '../../components/Heading';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact View</title>
      </Head>
      <Heading text="This is just a page of one contact" />
      <p>My name is John Doe. Welcome to my info page</p>
    </>
  );
}
