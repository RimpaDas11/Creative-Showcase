
import { Link } from "react-router-dom";

export default function Header() {
  const token = localStorage.getItem("token");

  return (
    <header
      style={{
        padding: "18px 30px",
        background: "#111",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}></h2>

      <nav>
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
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
