import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.scss";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  disabled = false,
  placeholder = "",
  error = "",
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Show/hide password logic
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className={`input-field${error ? " error" : ""}`}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={0}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && <div className="input-error">{error}</div>}
    </div>
  );
}
