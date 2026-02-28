import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContactsContext } from '../../Context/ContactsContext'
import "./ChatsScreen.css"

export default function ChatsScreen() {
  const { contacts } = useContext(ContactsContext);

  return (
    <div className="chats-screen">
      <aside className='sidebar'>
        <h1>WhatsApp Business</h1>
        <div className="buttons">
          <button>Estados</button>
          <button>Llamadas</button>
          <button>Canales</button>
        </div>
        <div className="chat-list">
          {contacts.map((contact) => (
            <Link key={contact.id} to={`/chat/${contact.id}`} className="chat-link">
              <p>{contact.name}</p>
            </Link>
          ))}
        </div>
      </aside>
      <main className="chat-empty">
        <h2>Selecciona una conversación</h2>
      </main>
    </div>
  );
}
