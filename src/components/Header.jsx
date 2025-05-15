import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-white.svg';

export default function Header() {
  return (
    <div className="header container">
      <header>
        <div className="logo">
          <img src={logo} alt="Nirmit's logo" height="60" />
        </div>
        <div className="menu-toggle" id="menu-toggle">&#9776;</div>
        <nav id="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
