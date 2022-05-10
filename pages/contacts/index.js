import Head from 'next/head';
import Link from 'next/link';
import Heading from '../../components/Heading';
import s from '../../styles/Home.module.scss';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

export default function Users({ contacts }) {
  return (
    <>
      <Head>
        <title>Contacts List:</title>
      </Head>
      <Heading text="This is a list of Contacts:" />
      <ul className={s.list}>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
