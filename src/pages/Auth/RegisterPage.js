import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { register, googleSignIn } from "../../firebase/authService";
import { useNavigate, Link } from "react-router-dom";
import { theme } from "../../utils/theme";
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
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        {err && <div className="error-msg">{err}</div>}
        <Button disabled={loading}>{loading ? "Creating..." : "Register"}</Button>
      </form>
      <div className="or-divider">— or —</div>
      <Button variant="google" onClick={handleGoogle} disabled={loading}>
        <FcGoogle /> Sign up with Google
      </Button>
      <div className="redirect-link">
        Already have an account? <Link to="/login" style={{ color: theme.deepOrange }}>Login</Link>
      </div>
    </div>
  );
}
