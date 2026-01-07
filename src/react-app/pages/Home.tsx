// src/Components/Header.jsx

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Weak Submissive Men</h1>
        <p>The most pathetic, weak, and submissive men we could find.</p>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
                <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
      </div>{" "}
    </div>
  );
};

export default Header;