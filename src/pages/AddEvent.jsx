import React, { useContext } from "react";
import EventForm from "../components/EventForm";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function AddEvent() {
  const { addEvent } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAdd = (eventData) => {
    addEvent(eventData);
    navigate("/"); // back to dashboard
  };

  return (
    <div>
      <h2>Add New Event</h2>
      <EventForm onSubmit={handleAdd} />
    </div>
  );
}
