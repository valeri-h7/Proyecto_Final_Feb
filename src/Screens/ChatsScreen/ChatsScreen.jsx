import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import "./ChatsScreen.css";

export default function ChatsScreen() {

  const location = useLocation();
  const chatOpen = location.pathname !== "/chats";

  return (
    <div className={`chats-screen-container ${chatOpen ? "chat-open" : ""}`}>

      <header>
        <div className="logo-wsp-header">
          <i className="bi bi-whatsapp"></i>
        </div>
        <span>WhatsApp</span>
      </header>

      <div className="screen">

        <aside className="icon-bar">
          <div className="icon-bar-top">
            <button><i className="bi bi-chat-left-text-fill"></i></button>
            <button><i className="bi bi-telephone-fill"></i></button>
            <button><i className="bi bi-emoji-laughing-fill"></i></button>
            <button><i className="bi bi-people-fill"></i></button>
            <button><i className="bi bi-house-door-fill"></i></button>
            <button><i className="bi bi-megaphone-fill"></i></button>
          </div>

          <div className="icon-bar-bottom">
            <button><i className="bi bi-pencil-square"></i></button>
            <button><i className="bi bi-collection-fill"></i></button>
            <button><i className="bi bi-gear-fill"></i></button>
            <button><i className="bi bi-person-fill"></i></button>
          </div>
        </aside>

        <aside className="chats-screen">
          <ContactSidebar />
        </aside>

        <main className="chat-panel">
          <Outlet />
        </main>

      </div>
    </div>
  );
}