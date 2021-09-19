import React, { useState } from "react";
import { Link } from "react-router-dom"; //client side routing

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form className="c-login" onSubmit={submitHandler}>
      <h2 className="c-login_header">Login</h2>
      {error != "" ? <div className="error">{error}</div> : ""}
      <div className="c-login_group">
        <label className="c-login_label" htmlFor="name">Username:</label>
        <input
          className="c-login_input"
          placeholder="Type your username"
          type="text"
          name="name"
          id="name"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
      <div className="c-login_group">
        <label className="c-login_label" htmlFor="email">Email:</label>
        <input
          className="c-login_input"
          placeholder="Type your email"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="c-login_group">
        <label className="c-login_label" htmlFor="password">Password:</label>
        <input
          className="c-login_input"
          placeholder="Type your password"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <div className="c-button--login">
        <input className="c-button_login" type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
