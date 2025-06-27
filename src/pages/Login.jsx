import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Login() {
  const { loginUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.email || !formData.password) {
      alert("Please fill in both fields.");
      return;
    }

    // basic email format check
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    //call loginUser from context to set the logged-in user
    loginUser({ email: formData.email, name: "User" });

    // redirect to dashboard
    navigate("/");

    // Clear form (optional addition)
    setFormData({ email: "", password: "" });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        backgroundColor: "#f9f9f9",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>Login</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Log In
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  marginTop: "0.25rem",
  borderRadius: "0.5rem",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
};
