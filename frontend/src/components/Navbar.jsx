import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#222",
      }}
    >
      <Link to="/" style={{ color: "white", margin: 10 }}>
        Home
      </Link>

      <Link
        to="/register"
        style={{ color: "white", margin: 10 }}
      >
        Register Complaint
      </Link>

      <Link
        to="/complaints"
        style={{ color: "white", margin: 10 }}
      >
        Complaints
      </Link>

      <Link
        to="/login"
        style={{ color: "white", margin: 10 }}
      >
        Login
      </Link>

      <Link
        to="/signup"
        style={{ color: "white", margin: 10 }}
      >
        Signup
      </Link>
    </nav>
  );
}

export default Navbar;