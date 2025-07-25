import React, { useState } from 'react';
import './Input.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = ({
  label = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  error = "",
  name = "",
  required = false,
  className = ""
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
  const inputId = name || label.replace(/\s+/g, '').toLowerCase();

  return (
    <div className="custom-input-wrapper">
      {label && (
        <label className="custom-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="custom-input-field">
        <input
          className={`custom-input ${className} ${error ? "input-error" : ""}`}
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
          autoComplete={isPassword ? "current-password" : undefined}
        />
        {isPassword && (
          <span
            className="custom-input-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      {error && <div className="custom-input-error">{error}</div>}
    </div>
  );
};

export default Input;
