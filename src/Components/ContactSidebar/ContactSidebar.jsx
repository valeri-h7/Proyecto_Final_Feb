import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContactsContext } from "../../Context/ContactsContext";
import "./ContactSidebar.css";

export default function ContactSidebar() {
  const { contacts } = useContext(ContactsContext);
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h1>Chats</h1>

      <div className="chat-list">
        {contacts.map((contact) => {
          const isActive = location.pathname === `/chat/${contact.id}`;

          return (
            <Link
              key={contact.id}
              to={`/chat/${contact.id}`}
              className={`chat-link ${isActive ? "active" : ""}`}
            >
              <p>{contact.name}</p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
