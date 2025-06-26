import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

export default function Dashboard() {
  // local state to keep track of the event currently being edited
  const [editingEvent, setEditingEvent] = useState(null);

  // get editEvent from context, alongside events and deleteEvent - update
  const { events, deleteEvent, editEvent } = useContext(AppContext);

  // edit handler replaced with this function to open edit form
  const startEdit = (event) => {
    setEditingEvent(event);
  };

  // cancel editing, close the form
  const cancelEdit = () => {
    setEditingEvent(null);
  };

  // submission of edited event from the for
  const handleEditSubmit = (updatedEvent) => {
    editEvent(updatedEvent); // update the event globally
    setEditingEvent(null); // close the edit form
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "80px auto 2rem",
        padding: "0 1rem",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Upcoming Events</h2>
      {editingEvent ? (
        // Show edit form when editing event is set
        <EventForm
          initialData={editingEvent} // pre-fill form with current data
          onSubmit={handleEditSubmit} // form submit
          onCancel={cancelEdit} // cancel edit allowed
        />
      ) : events.length === 0 ? (
        // no events message
        <p>No events yet. Add some!</p>
      ) : (
        // otherwise show list of events with edit and delete buttons
        events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onEdit={startEdit} // clicking edit opens the form
            onDelete={deleteEvent} // clicking delete removes event
          />
        ))
      )}
    </main>
  );
}
