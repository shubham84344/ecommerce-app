import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { login, googleSignIn } from "../../firebase/authService";
import { useNavigate, Link } from "react-router-dom";
import { theme } from "../../utils/theme";
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
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        {err && <div className="error-msg">{err}</div>}
        <Button disabled={loading}>{loading ? "Logging in..." : "Login"}</Button>
      </form>
      <div className="or-divider">— or —</div>
      <Button variant="google" onClick={handleGoogle} disabled={loading}>
        <FcGoogle /> Sign in with Google
      </Button>
      <div className="redirect-link">
        New user? <Link to="/register" style={{ color: theme.deepOrange }}>Register</Link>
      </div>
      <div className="forgot-link">
        <Link to="/forgot" style={{ color: theme.yellow }}>Forgot Password?</Link>
      </div>
    </div>
  );
}
