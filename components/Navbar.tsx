import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import s from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <Image
          src="/fragment_logo.png"
          width="40px"
          height="40px"
          alt="My logo"
        />
      </div>
      <div className={s.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? s.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
