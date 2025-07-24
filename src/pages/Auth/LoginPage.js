import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { login, googleSignIn } from "../../firebase/authService";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./LoginPage.scss";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setErr("");
    setLoading(true);
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="simple-login-bg">
      <div className="simple-login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your dashboard</p>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="forgot-link">
            <Link to="/forgot">Forgot Password?</Link>
          </div>
          {err && <div className="error-msg">{err}</div>}
          <Button disabled={loading} fullWidth variant="primary">
            {loading ? (<span className="spinner"></span>) : "Login"}
          </Button>
        </form>
        <div className="divider"><span>OR</span></div>
        <Button
          variant="outline"
          onClick={handleGoogle}
          disabled={loading}
          fullWidth
        >
          <FcGoogle className="google-icon" /> Continue with Google
        </Button>
        <div className="signup-link">
          New user? <Link to="/register">Create account</Link>
        </div>
      </div>
    </div>
  );
}
