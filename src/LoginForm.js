import { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

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
    onLogin(); // test ก่อน
  };

  return (
    <div className="container">
      <div className="card">

        
        <div className="avatar">
          <FaUser />
        </div>

        
        <h2 className="title">ĐĂNG NHẬP HỆ THỐNG</h2>

        
        <div className="input-group">
          <span><FaUser /></span>
          <input
            name="username"
            placeholder="User"
            onChange={handleChange}
          />
        </div>

        
        <div className="input-group">
          <span><FaLock /></span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/">Forgot Password?</a>
        </div>

        
        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>

      </div>
    </div>
  );
}

export default LoginForm;