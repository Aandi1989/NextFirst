import Link from "next/link";
import styles from './header.module.scss'
import { Navigation } from "../Navigation/Navigation";

const navItems = [
  {label:"Home", href:'/'},
  {label:"Blog", href:'/blog'},
  {label:"About", href:'/about'},
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Navigation navLinks={navItems}/>
      </div>
    </header>
  );
};

export default Header;