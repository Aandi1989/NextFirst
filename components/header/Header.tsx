import './header.scss'
import { Navigation } from "../Navigation/Navigation";

const navItems = [
  {label:"Home", href:'/'},
  {label:"Blog", href:'/blog'},
  {label:"About", href:'/about'},
  {label:"Sign In", href:'/signIn'}
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Navigation navLinks={navItems}/>
      </div>
    </header>
  );
};

export default Header;