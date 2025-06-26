import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#222",
        color: "white",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // <-- allows wrapping at high zoom/small screens
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Event Planner
          </Link>
        </div>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link to="/" style={navLinkStyle}>
            Dashboard
          </Link>
          <Link to="/add" style={navLinkStyle}>
            Add Event
          </Link>
          <Link to="/help" style={navLinkStyle}>
            Help
          </Link>
        </nav>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Link to="/login" style={navLinkStyle}>
            Login
          </Link>
          <Link to="/register" style={navLinkStyle}>
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
};
