import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/code-snippets" activeClassName="active">
            Code Snippets
          </NavLink>
        </li>
        <li>
          <NavLink to="/submit-code" activeClassName="active">
            Submit Your Code Snippet
          </NavLink>
        </li>
        <li>
          <NavLink to="/read-article" activeClassName="active">
            Read Article
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
