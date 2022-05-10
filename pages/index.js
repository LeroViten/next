import Head from 'next/head';
import Heading from '../components/Heading';
import s from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home Page</title>
      </Head>
      <Heading text="Hello from react NextJS" />
    </div>
  );
}
