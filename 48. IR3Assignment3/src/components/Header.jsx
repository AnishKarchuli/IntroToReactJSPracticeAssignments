import { NavLink } from "react-router-dom";

export default function () {
  return (
    <header>
      <div className="bg-dark text-white">
        <div className="container">
          <h1 className="pt-3 pb-2">My Social Media</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            </ul>   
          </nav>
        </div>
      </div>
    </header>
  );
}
