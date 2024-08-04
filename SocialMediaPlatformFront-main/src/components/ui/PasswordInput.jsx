import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form.Group className="mb-3" style={{ position: "relative" }}>
      <Form.Label>Password</Form.Label>
      <Form.Control
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          pattern: {
            value:
              /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/<>.,])(?!.*\s).*$/,
            message: "Password does not meet complexity requirements",
          },
        })}
        isInvalid={!!errors.password}
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          top: "50%",
          cursor: "pointer",
          right: "40px",
          transform: errors.password ? "translateY(-50%)" : "none",
        }}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
      <Form.Control.Feedback type="invalid">
        {errors.password?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default PasswordInput;
