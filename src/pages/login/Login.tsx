import "./login.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
interface LoginPageProps {
  onLogin: () => void;
}

const Login: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === "admin@admin.com" && password === "password") {
      onLogin();
    } else {
      alert("Invalid username or password");
    }
    };
    
  return (
    <div className="login">
      <div className="left">
        <div className="top__image">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="mid__image">
          <img src="/images/signin.png" alt="sign in" />
        </div>
      </div>
      <div className="right">
        <div className="form__container">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form onSubmit={handleLogin}>
            <div className="input__wrapper">
              <input
                type="email"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input__wrapper">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small onClick={() => setShow(!show)}>Show</small>
            </div>
            <Link to="/forgot">
              <p className="forgot">FORGOT PASSWORD?</p>
            </Link>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
