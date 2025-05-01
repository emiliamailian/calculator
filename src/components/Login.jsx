import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const token = await res.text(); // ← API:t returnerar token som ren text
      console.log("TOKEN FRÅN API:", token);

      if (res.ok && token) {
        localStorage.setItem("token", token);
        setMessage("Inloggad!");
      } else {
        setMessage("Inloggningen misslyckades.");
      }
    } catch (err) {
      console.error("FEL VID FETCH:", err);
      setMessage("Nätverksfel");
    }
  };

  return (
    <div>
      <h2>Logga in</h2>
      <input
        type="text"
        placeholder="Användarnamn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Logga in</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
