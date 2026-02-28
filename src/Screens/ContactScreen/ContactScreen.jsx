import React, { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ContactsContext } from "../../Context/ContactsContext";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import "./ContactScreen.css";

export default function ContactScreen() {
  const { contact_id } = useParams();
  const { contacts, setContactsState } = useContext(ContactsContext);

  const contact = contacts.find(
    (c) => c.id === parseInt(contact_id)
  );

  const messagesEndRef = useRef(null);

  // Scroll automático cuando cambian los mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [contact?.messages]);

  if (!contact) {
    return (
      <div className="chats-screen">
        <ContactSidebar />
        <div className="contact-screen">
          <p>El contacto seleccionado no existe</p>
        </div>
      </div>
    );
  }

  const handleSend = (e) => {
    e.preventDefault();
    const input = e.target.elements.message;

    if (!input.value.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input.value,
      send_by_me: true,
    };

    setContactsState((prev) =>
      prev.map((c) =>
        c.id === contact.id
          ? { ...c, messages: [...c.messages, newMessage] }
          : c
      )
    );

    input.value = "";
  };

  return (
    <div className="chats-screen">
      <ContactSidebar />

      <div className="contact-screen">
        <div className="chat-header">
          <h2>{contact.name}</h2>
        </div>

        <div className="messages">
          {contact.messages.map((msg) => (
            <p
              key={msg.id}
              className={msg.send_by_me ? "sent" : "received"}
            >
              {msg.text}
            </p>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input" onSubmit={handleSend}>
          <input
            type="text"
            name="message"
            placeholder="Escribe un mensaje..."
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
