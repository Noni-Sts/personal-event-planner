import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
// In src/main.jsx or src/App.jsx (at the top)
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <main style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddEvent />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
