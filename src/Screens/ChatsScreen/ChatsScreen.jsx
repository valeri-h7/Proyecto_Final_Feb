import React from "react";
import { Outlet } from "react-router-dom";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import "./ChatsScreen.css";

export default function ChatsScreen() {
  return (
    <div className="chats-screen-container">

      <header>
        <div className="logo-wsp-header"><i className="bi bi-whatsapp"></i></div>
        <span>WhatsApp</span>
      </header>

      <div className="screen">

        <aside className="icon-bar">
          <div className="icon-bar-top">
            <button className="btn-chat"><i className="bi bi-chat-left-text-fill"></i></button>
            <button className="btn-llamadas"><i className="bi bi-telephone-fill"></i></button>
            <button className="btn-estados"><i className="bi bi-emoji-laughing-fill"></i></button>
            <button className="btn-canales"><i className="bi bi-people-fill"></i></button>
            <button className="btn-herramientas"><i className="bi bi-house-door-fill"></i></button>
            <button className="btn-anunciar"><i className="bi bi-megaphone-fill"></i></button>
          </div>
          
          <div className="icon-bar-bottom">
            <button className="btn-comentario"><i className="bi bi-pencil-square"></i></button>
            <button className="btn-multimedia"><i className="bi bi-collection-fill"></i></button>
            <button className="btn-ajustes"><i className="bi bi-gear-fill"></i></button>
            <button className="btn-perfil"><i className="bi bi-person-fill"></i></button>
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