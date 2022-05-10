import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import Heading from '../../components/Heading';
import { postType } from '../../types';
import s from '../../styles/Home.module.scss';

type postsPropsTypes = {
  posts: [postType];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts: FC<postsPropsTypes> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id} className={s.post_item}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
