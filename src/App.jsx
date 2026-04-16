import React, { useState } from "react";
import "./App.css";
import icone from "./assets/icone.png";


function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();
    alert("Email: " + email + "\nSenha: " + senha);
  }

  return (
    <div className="login-container">
      <div className="profile-pic"></div>
      <form onSubmit={entrar} className="login-form">
        <input
          type="email"
          placeholder="Email Adress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Login</button>
        <div className="links">
          <a href="#">Singup</a>
          <a href="#">Forgot Password</a>
        </div>
      </form>
    </div>
  );
}

export default App;
