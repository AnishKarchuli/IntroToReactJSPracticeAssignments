import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container">
        <h1 className="py-3">Todos</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/todos" className="nav-link">Todos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
