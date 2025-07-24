import React from "react";
import "./Input.scss";

export default function Input({ label, type, ...props }) {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <input type={type} {...props} />
    </div>
  );
}
