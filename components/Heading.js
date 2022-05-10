export default function Heading({ tag, text }) {
  const Tag = tag || 'h2';
  return (
    <>
      <Tag>{text}</Tag>
    </>
  );
}
