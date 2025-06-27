import React from "react";
import getCategoryColor from "../utilities/getCategoryColor";

export default function EventCard({ event, onEdit, onDelete }) {
  const { bg, text } = getCategoryColor(event.category);

  return (
    <div
      className="event-card"
      style={{
        backgroundColor: bg,
        borderLeft: `6px solid ${text}`,
        padding: "1rem",
        borderRadius: "1rem",
        marginBottom: "1.5rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: text, marginBottom: "0.5rem" }}>
        {event.title} <small>({event.category})</small>
      </h3>
      <p>
        <strong>📍 Location:</strong> {event.location}
      </p>
      <p>
        <strong>📅 Date:</strong> {event.date} @ {event.time}
      </p>
      <p>
        <strong>📖 Description:</strong> {event.description}
      </p>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => onEdit(event)} style={btnStyle}>
          Edit
        </button>
        <button
          onClick={() => onDelete(event.id)}
          style={{
            ...btnStyle,
            marginLeft: "1rem",
            backgroundColor: "#ff6961",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  borderRadius: "0.5rem",
  padding: "0.5rem 1rem",
  cursor: "pointer",
};
