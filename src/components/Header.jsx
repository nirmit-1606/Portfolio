import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo-white.svg';
import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');

    const handleClick = () => {
      menu.classList.toggle('open');
      setMenuOpen(prev => !prev);
    };

    if (toggle && menu) {
      toggle.addEventListener('click', handleClick);
    }

    return () => {
      if (toggle && menu) {
        toggle.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div className="header container">
      <header>
        <div className="logo">
          <img src={logo} alt="Nirmit's logo" height="60" />
        </div>
        <div className="menu-toggle" id="menu-toggle">
          {menuOpen ? '✕' : '☰'}
        </div>
        <nav id="nav-menu">
          <ul>
            <li>
              <Link
                to="/"
                style={{ textDecoration: location.pathname === '/' ? 'underline' : 'none' }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: location.pathname === '/about' ? 'underline' : 'none' }}
              >
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
