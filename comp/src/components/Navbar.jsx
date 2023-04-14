import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Logo Here</div>
      <button className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/code-snippets" activeClassName="active">
            Code Snippets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/submit-code" activeClassName="active">
            Submit Your Code Snippet
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/read-article" activeClassName="active">
            Read Article
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
