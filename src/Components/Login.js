import React, { useState } from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="loginLogo"
        />
      </Link>

      <div className="loginContainer">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="loginSignInButton">
            Sign In
          </button>
        </form>

        <p>
          By Signing-in you agree to the Amazon Clone Terms and conditions.
          Please see our privacy policy and other guidelines for further
          Information.
        </p>
        <button onClick={register} className="loginRegisterButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
