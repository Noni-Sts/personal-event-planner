import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { loginUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
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

    // Basic validation
    const { name, email, username, password } = formData;

    if (!name || !email || !username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const newUser = {
      name,
      email,
      username,
      password,
    };

    // When the user submits the registration form:
    // create a newUser object with their details (name, email, username, password).
    // call loginUser(newUser) to set this user as "logged in" in our app state.
    // redirect (navigate) to the dashboard page so the user sees their events.
    // This simulates signing up AND logging in immediately without a real backend.

    loginUser(newUser); // triggers login
    navigate("/"); // goes to dashboard

    // optionally clear form
    setFormData({
      name: "",
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "80px auto",
        backgroundColor: "#f9f9f9",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>Register</h2>

      <form onSubmit={handleSubmit}>
        <div style={formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroup}>
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

        <div style={formGroup}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroup}>
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
          Register
        </button>
      </form>
    </div>
  );
}

const formGroup = {
  marginBottom: "1rem",
};

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
