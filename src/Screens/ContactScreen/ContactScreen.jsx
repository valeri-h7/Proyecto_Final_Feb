import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { ContactsContext } from "../../Context/ContactsContext"
import "./ContactScreen.css"


export default function ContactScreen() {
  const { contact_id } = useParams();
  const { contacts } = useContext(ContactsContext);

  const contact = contacts.find(c => c.id === parseInt(contact_id));

  if (!contact) return <p>El contacto seleccionado no existe</p>;

  return (
    <div className="contact-screen">
      <h2>Chat con {contact.name}</h2>
      <div className="messages">
        {contact.messages.map((msg) => (
          <p key={msg.id} className={msg.send_by_me ? "sent" : "received"}>
            {msg.text}
          </p>
        ))}
      </div>
      <form>
        <input type="text" placeholder="Escribe un mensaje..." />
        <button>Enviar</button>
      </form>
    </div>
  )
}
