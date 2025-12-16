import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/user/login", {
        email,
        password,
      });

      const user = res.data.user;

      // 🔐 Save login data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", user._id);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("role", user.role); // 🔥 MAIN POINT

      // 🔀 Redirect based on role
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

    } catch (error) {
      setOutput("Invalid Email or Password ❌");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {output && <div className="login-alert">{output}</div>}

        <h2 className="login-heading">Login</h2>
        <p className="login-sub">Welcome back to HappySoul 💚</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              className="input-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              className="input-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="register-link">
            Not registered?
            <span onClick={() => navigate("/register")}> Create Account</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
