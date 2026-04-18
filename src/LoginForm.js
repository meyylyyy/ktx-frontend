import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

function LoginForm({ onLogin }) {
  return (
    <div className="login-page">

      <div className="login-card">

        
        <div className="avatar">
          <FaUser />
        </div>

        
        <h2 className="login-title">ĐĂNG NHẬP HỆ THỐNG</h2>

        
        <div className="input-group">
          <FaUser />
          <input type="text" placeholder="User" />
        </div>

       
        <div className="input-group">
          <FaLock />
          <input type="password" placeholder="Password" />
        </div>

        
        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>

          <button className="forgot-btn">
            Forgot Password?
          </button>
        </div>

        
        <button className="login-btn" onClick={onLogin}>
          LOGIN
        </button>

      </div>

    </div>
  );
}

export default LoginForm;