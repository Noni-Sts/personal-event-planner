import React, { useState } from "react";

const initialForm = {
  title: "",
  date: "",
  time: "",
  location: "",
  description: "",
  category: "personal",
};

export default function EventForm({ onSubmit, initialData = null, onCancel }) {
  // Use initialData in edit or start with empty form
  const [formData, setFormData] = useState(initialData || initialForm);

  const handleChange = (e) => {
    // changes in inputs/selects + updates form data state
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time) {
      alert("Title, date, and time are required.");
      return;
    }

    onSubmit(formData);
    // Reset form if adding new event (not editing)
    if (!initialData) {
      setFormData(initialForm);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#f4f4f4",
        padding: "1.5rem",
        borderRadius: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "2rem auto",
      }}
    >
      <h2>{initialData ? "Edit Event" : "Add New Event"}</h2>

      {["title", "location", "description"].map((field) => (
        <div key={field} style={{ marginBottom: "1rem" }}>
          <label>
            {field.charAt(0).toUpperCase() + field.slice(1)}:
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={field === "title"}
              style={inputStyle}
            />
          </label>
        </div>
      ))}

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="social">Social</option>
            <option value="meeting">Meeting</option>
          </select>
        </label>
      </div>

      <button type="submit" style={buttonStyle}>
        {initialData ? "Update Event" : "Add Event"}
      </button>

      {initialData && typeof onCancel === "function" && (
        <button type="button" onClick={onCancel} style={cancelButtonStyle}>
          Cancel
        </button>
      )}
    </form>
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

const cancelButtonStyle = {
  backgroundColor: "#aaa",
  color: "#222",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
};
