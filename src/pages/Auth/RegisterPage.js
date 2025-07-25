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
    <div className="register-root">
      <div className="register-page">
      <div className="main-heading">E Commerce Website</div>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="register-title">Create Account</div>
          <p className="register-subtitle">Get started with your account</p>
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
          <Button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Register"}
          </Button>

          <div className="register-separator"><span>or</span></div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogle}
            disabled={loading}
          >
            <FcGoogle className="google-icon" />
            Continue with Google
          </button>

          <div className="register-login-prompt">
            Already have an account?
            <Link to="/login" className="login-link">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
