import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { register, googleSignIn } from "../../firebase/authService";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./RegisterPage.scss";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await register(email, password);
      navigate("/login");
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
    <div className="simple-register-bg">
      <div className="simple-register-card">
        <h2>Create Account</h2>
        <p className="subtitle">Get started with your account</p>
        <form onSubmit={handleRegister} className="register-form">
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
          {err && <div className="error-msg">{err}</div>}
          <Button disabled={loading} fullWidth>
            {loading ? "Creating account..." : "Register"}
          </Button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <Button
          variant="outline"
          onClick={handleGoogle}
          disabled={loading}
          fullWidth
        >
          <FcGoogle className="google-icon" /> Continue with Google
        </Button>
        <div className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
