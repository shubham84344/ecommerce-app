import React, { useState } from 'react';
import './LoginPage.scss';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { FcGoogle } from 'react-icons/fc'; // Google icon

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic here
  };

  const handleGoogleLogin = () => {
    alert("Google Login (add your logic here)");
  };

  return (
    <div className="login-page">
      <div className="main-heading">E Commerce Website</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='login-title'>Login</div>
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>

        <div className="login-separator"><span>or</span></div>

        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="google-icon" />
          Login with Google
        </button>

        <div className="login-signup-prompt">
          <span>New?</span>
          <a href="/register" className="signup-link">Want to sign up?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
