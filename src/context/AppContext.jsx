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

  //add new event - user association handling for multi-user behavior
  function addEvent(eventData) {
    if (!user) return; // don't add if no user logged in
    const newEvent = {
      ...eventData,
      id: generateId(),
      owner: user.email, // link event to logged-in user
    };
    setEvents((prev) => [...prev, newEvent]);
  }
  // edit exisiting event
  function editEvent(updatedEvent) {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === updatedEvent.id
          ? { ...updatedEvent, owner: event.owner } // keep owner intact when editing event
          : event
      )
    );
  }

  function deleteEvent(id) {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  }

  function loginUser(userData) {
    setUser(userData); // set the logged-in user object, e.g. { email, name, ... }
  }

  function logoutUser() {
    setUser(null);
  }

  const userEvents = user
    ? events.filter((event) => event.owner === user.email)
    : [];

  /*
  AppProvider is the central context provider for this app.
  - Holds the main shared state (like the list of events)
  - Provides functions to update this state (addEvent, editEvent, deleteEvent)
  - Shares this data and these functions with any component that uses AppContext
   Make sure to wrap your app with <AppProvider> in App.jsx to enable this shared state.
*/
  return (
    <AppContext.Provider
      value={{
        events: userEvents, // pass filtered events
        deleteEvent,
        addEvent,
        editEvent,
        user,
        setUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
