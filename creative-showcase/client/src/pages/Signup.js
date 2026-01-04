export default function Signup() {
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username.value,
        email: form.email.value,
        password: form.password.value,
      }),
    });

    alert("Registered Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="username" placeholder="Username" required />
      <input name="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button>Register</button>
    </form>
  );
}
