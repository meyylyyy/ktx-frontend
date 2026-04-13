import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          onLogin();
        } else {
          alert("Sai tài khoản hoặc mật khẩu");
        }
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>ĐĂNG NHẬP HỆ THỐNG</h2>

        <div className="form-group">
          <label>USER :</label>
          <input name="username" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Password :</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <div className="button-group">
          <button className="login-btn" onClick={handleLogin}>
            🔓 Đăng nhập
          </button>

          <button className="exit-btn" onClick={() => window.close()}>
            ⛔ Thoát
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;