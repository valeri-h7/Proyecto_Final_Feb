import React, { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ContactsContext } from "../../Context/ContactsContext"
import "./ContactSidebar.css"

export default function ContactSidebar() {
  const { contacts } = useContext(ContactsContext);
  const location = useLocation();
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Chats</h1>
        <div className="header-icons">
          <i className="bi bi-plus-circle-fill"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      <div className="chat-search">
        <i className="bi bi-search search-icon"></i>
        <input
          type="text"
          placeholder="Buscar o iniciar un chat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="chat-list">
        {filteredContacts.map((contact) => {
          const isActive = location.pathname === `/chats/${contact.id}`;
          const lastMessageObj = contact.messages[contact.messages.length - 1];
          const lastMessageText = lastMessageObj?.text || "";
          const lastMessageTime = lastMessageObj
            ? new Date(lastMessageObj.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "";

          return (
            <Link
              key={contact.id}
              to={`/chats/${contact.id}`}
              className={`chat-link ${isActive ? "active" : ""}`}
            >
              <div className="chat-item">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="chat-avatar"
                />
                <div className="chat-text">
                  <div className="chat-top">
                    <span className="chat-name">{contact.name}</span>
                    <span className="chat-time">{lastMessageTime}</span>
                  </div>
                  <div className="chat-bottom">
                    <span className="chat-last">{lastMessageText}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}