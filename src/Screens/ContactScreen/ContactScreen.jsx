import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactsContext } from "../../Context/ContactsContext";
import "./ContactScreen.css";

export default function ContactScreen() {
  const { contact_id } = useParams();
  const { contacts, setContactsState } = useContext(ContactsContext);

  const contact = contacts.find(c => c.id === parseInt(contact_id));

  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll automático al final
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [contact?.messages]);

  if (!contact) return <p>El contacto seleccionado no existe</p>;

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      send_by_me: true,
      created_at: new Date().toISOString(),
      is_read: true,
    };

    setContactsState(prev =>
      prev.map(c =>
        c.id === contact.id
          ? { ...c, messages: [...c.messages, newMessage] }
          : c
      )
    );

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // evitar salto de línea
      sendMessage();
    }
  };

  return (
    <div className="contact-screen">
      <div className="chat-header">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="chat-header-avatar"
        />
        <h2>{contact.name}</h2>
        <i className="bi bi-telephone-fill"></i>
        <i className="bi bi-search search-icon"></i>
        <i className="bi bi-three-dots-vertical"></i>
     </div>

      <div className="messages">
        {contact.messages.map(msg => (
          <p key={msg.id} className={msg.send_by_me ? "sent" : "received"}>
            {msg.text}
          </p>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} // Enter envía
        />
        <button type="button" onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}