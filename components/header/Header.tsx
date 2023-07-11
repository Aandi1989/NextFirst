import Link from "next/link";
import styles from './header.module.scss'


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;