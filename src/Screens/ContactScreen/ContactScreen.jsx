import React, { useContext, useEffect, useRef, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ContactsContext } from "../../Context/ContactsContext"
import "./ContactScreen.css"

export default function ContactScreen() {
  const { contact_id } = useParams();
  const navigate = useNavigate();
  const { contacts, setContactsState } = useContext(ContactsContext);

  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);


  const contact = contacts.find(c => c.id === parseInt(contact_id));
  if (!contact) return <p>El contacto seleccionado no existe</p>;


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [contact.messages]);

 
  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });

  
  useEffect(() => {
    const updatedContacts = contacts.map(c =>
      c.id === contact.id
        ? {
            ...c,
            messages: c.messages.map(m => {
              if (m.send_by_me && !m.status) return { ...m, status: "read" };
              if (!m.send_by_me && !m.status) return { ...m, status: "delivered" };
              return m;
            }),
          }
        : c
    );
    setContactsState(updatedContacts);
 
  }, []);


  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      send_by_me: true,
      created_at: new Date().toISOString(),
      status: "sent",
    };

    setContactsState(prev =>
      prev.map(c =>
        c.id === contact.id
          ? { ...c, messages: [...c.messages, newMessage] }
          : c
      )
    );

    setMessage("");


    setTimeout(() => {
      setContactsState(prev =>
        prev.map(c =>
          c.id === contact.id
            ? {
                ...c,
                messages: c.messages.map(m =>
                  m.id === newMessage.id ? { ...m, status: "delivered" } : m
                ),
              }
            : c
        )
      );
    }, 500);


    setTimeout(() => {
      setContactsState(prev =>
        prev.map(c =>
          c.id === contact.id
            ? {
                ...c,
                messages: c.messages.map(m =>
                  m.id === newMessage.id ? { ...m, status: "read" } : m
                ),
              }
            : c
        )
      );
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="contact-screen">
      
      <div className="chat-header">

        <div className="chat-header-left">
          <i className="bi bi-arrow-left-short back-button"onClick={() => navigate("/chats")}></i>
          <img src={contact.avatar} alt={contact.name} className="chat-header-avatar" />
          <h2>{contact.name}</h2>
        </div>

        <div className="chat-header-right">
          <i className="bi bi-telephone-fill"></i>
        <i className="bi bi-search"></i>
        <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>


      <div className="messages">
        {[...contact.messages]
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
          .map(msg => (
            <div key={msg.id} className={msg.send_by_me ? "sent" : "received"}>
              <div className="messageText">{msg.text}</div>
              <div className="messageFooter">
                <span className="messageTime">{formatTime(msg.created_at)}</span>


                {msg.send_by_me && (
                  <>
                    {msg.status === "sent" && <span>✔</span>}
                    {msg.status === "delivered" && <span>✔✔</span>}
                    {msg.status === "read" && <span className="read">✔✔</span>}
                  </>
                )}
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>


      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}