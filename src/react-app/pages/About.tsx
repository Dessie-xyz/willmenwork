import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>About</h1>
        <p>This page has not been created yet</p>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>{" "}
    </div>
  );
};

export default Header;