import Heading from '../components/Heading';
import s from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={s.wrapper}>
      <Heading text="Hello from react NextJS" />
    </div>
  );
}
