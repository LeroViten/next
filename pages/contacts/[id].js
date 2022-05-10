import Head from 'next/head';
import Heading from '../../components/Heading';
import ContactInfo from '../../components/ContactInfo';

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

export default function Contact({ contact }) {
  return (
    <>
      <Head>
        <title>Contact View</title>
      </Head>
      <Heading text="One contact info:" />
      <ContactInfo contact={contact} />
    </>
  );
}
