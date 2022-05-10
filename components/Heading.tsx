import { FC } from 'react';
import { headingType } from '../types';

const Heading: FC<headingType> = ({ tag, text }) => {
  const Tag = tag || 'h2';
  return (
    <>
      <Tag>{text}</Tag>
    </>
  );
};

export default Heading;
