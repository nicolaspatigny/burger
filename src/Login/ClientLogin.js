import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ClientLogin.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // add logic for handling login
    // for example, you could send a request to your backend to authenticate the user
    // and set the isAuthenticated state to true
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    navigate("/Acceuilclient", { state: { username } });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button type="submit" className="ClientLogin">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
