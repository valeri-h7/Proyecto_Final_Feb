import React from "react";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import "./ChatsScreen.css";

export default function ChatsScreen() {
  return (
    <div className="chats-screen">
      <ContactSidebar />
      <main className="chat-empty">
        <h2>Selecciona una conversación</h2>
      </main>
    </div>
  );
}