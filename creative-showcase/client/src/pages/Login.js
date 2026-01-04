export default function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      if (!res.ok) {
        alert("Login failed");
        return;
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);

      // go to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Backend not reachable");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}
