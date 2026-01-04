import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#111",
      color: "#fff"
    }}>
      

      <div>
        {!token ? (
          <>
            <Link to="/login" style={{ color: "#fff", marginRight: "15px" }}>
              Login
            </Link>
            <Link to="/signup" style={{ color: "#fff" }}>
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={{ color: "#fff", marginRight: "15px" }}>
              Dashboard
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
