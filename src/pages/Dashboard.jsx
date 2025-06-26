import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import EventCard from "../components/EventCard";

export default function Dashboard() {
  const { events, deleteEvent } = useContext(AppContext);

  const handleEdit = (event) => {
    alert("Edit: " + event.title);
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "80px auto 2rem", // margin-top to clear fixed header (~60-80px)
        padding: "0 1rem",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Upcoming Events</h2>

      {events.length === 0 ? (
        <p>No events yet. Add some!</p>
      ) : (
        events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onEdit={handleEdit}
            onDelete={deleteEvent}
          />
        ))
      )}
    </main>
  );
}
