import React from "react";
import { Outlet, useLocation, Link, } from "react-router-dom";
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
            
            <Link to="/chats" className="bar-button">
              <i className="bi bi-chat-left-text-fill"></i>
              <span>Chats</span>
            </Link>

            <Link to="/calls" className="bar-button">
              <i className="bi bi-telephone-fill"></i>
              <span>Llamadas</span>
            </Link>

            <Link to="/status" className="bar-button">
              <i className="bi bi-emoji-laughing-fill"></i>
              <span>Estados</span>
            </Link>

            <Link to="/communities" className="bar-button">
              <i className="bi bi-people-fill"></i>
              <span>Comunidades</span>
              </Link>

            <Link to="/tools" className="bar-button">
              <i className="bi bi-house-door-fill"></i>
              <span>Herramientas</span>
            </Link>

            <Link to="/announcements" className="bar-button">
              <i className="bi bi-megaphone-fill"></i>
              <span>Anunciar en Facebook</span>
            </Link>
          </div>

          <div className="icon-bar-bottom">

            <Link to="/send-comment" className="bar-button">
              <i className="bi bi-pencil-square"></i>
              <span>Enviar Comentarios</span>
            </Link>

            <Link to="/multimedia" className="bar-button">
              <i className="bi bi-collection-fill"></i>
              <span>Multimedia</span>

            </Link>
            <Link to="/settings" className="bar-button">
              <i className="bi bi-gear-fill"></i>
              <span>Ajustes</span>
            </Link>

            <Link to="/profile" className="bar-button">
              <i className="bi bi-person-fill"></i>
              <span>Perfil</span>
            </Link>
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