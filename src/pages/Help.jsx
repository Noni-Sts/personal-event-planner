import React from "react";
export default function Help() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "80px auto",
        backgroundColor: "#f9f9f9",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        lineHeight: "1.6",
        fontSize: "1rem",
        color: "#333",
      }}
    >
      <h1>Help & FAQs</h1>
      <p>
        Welcome to the Help section! Here you can find guidance on how to use
        the Event Planner app.
      </p>
      <section>
        <h3 style={{ marginTop: "1.5rem" }}>Creating Events</h3>
        <p>
          To add a new event, click the "Add Event" link in the header, fill in
          the details, and submit the inputs.
        </p>
      </section>
      <section>
        <h3 style={{ marginTop: "1.5rem" }}>Editing and Deleting Events</h3>
        <p>
          On your dashboard, you can edit or delete existing events by clicking
          the respective buttons on each event card.
        </p>
      </section>
      <section>
        <h3 style={{ marginTop: "1.5rem" }}>Account Management</h3>
        <p>
          You can register for a new account or log in using the links in the
          header. Once logged in, you’ll only see your own events.
        </p>
      </section>
      <section>
        <h3 style={{ marginTop: "1.5rem" }}>What if I forget my password?</h3>
        <p>
          This is a demo app, so password recovery isn't available. Just
          register again.
        </p>
      </section>
      <section>
        <h3 style={{ marginTop: "1.5rem" }}>Need More Help?</h3>
        <p>
          If you encounter issues or have questions, feel free to reach out to
          the project maintainer or check the project documentation.
        </p>
      </section>
    </div>
  );
}
