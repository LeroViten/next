import Head from 'next/head';
import Heading from '../../components/Heading';

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
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <strong>{name}</strong> ({email})
            </li>
          ))}
      </ul>
    </>
  );
}
