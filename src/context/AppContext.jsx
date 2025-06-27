import React, { createContext, useState } from "react";

export const AppContext = createContext();

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

export function AppProvider({ children }) {
  // user login state
  const [user, setUser] = useState(null); // null = not logged in

  // events - linked to user by user.email
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Team Meeting",
      category: "Meeting",
      date: "2025-07-01",
      time: "10:00",
      location: "Zoom",
      description: "Discuss project roadmap",
      owner: "demo@example.com", // ← linked to user
    },
  ]);

  // add a new event
  function addEvent(eventData) {
    if (!user) return;
    const newEvent = {
      ...eventData,
      id: generateId(),
      owner: user.email, // associate with current user
    };
    setEvents((prev) => [...prev, newEvent]);
  }

  // edit existing event
  function editEvent(updatedEvent) {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === updatedEvent.id
          ? { ...updatedEvent, owner: event.owner }
          : event
      )
    );
  }

  function deleteEvent(id) {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  }

  function addEvent(eventData) {
    console.log("Adding event:", eventData);
    const newEvent = {
      ...eventData,
      id: generateId(), // unique ID for the event
    };
    setEvents((prev) => [...prev, newEvent]);
  }

  function editEvent(updatedEvent) {
    setEvents((prev) =>
      prev.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  }
  /*
  AppProvider is the central context provider for this app.
  - Holds the main shared state (like the list of events)
  - Provides functions to update this state (addEvent, editEvent, deleteEvent)
  - Shares this data and these functions with any component that uses AppContext
   Make sure to wrap your app with <AppProvider> in App.jsx to enable this shared state.
*/
  return (
    <AppContext.Provider value={{ events, deleteEvent, addEvent, editEvent }}>
      {children}
    </AppContext.Provider>
  );
}
