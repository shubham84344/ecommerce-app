import React from 'react';
import './Button.scss';

const Button = ({ children, ...rest }) => (
  <button className="custom-btn" {...rest}>{children}</button>
);

export default Button;
