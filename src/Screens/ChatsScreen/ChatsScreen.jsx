import React from "react";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import "./ChatsScreen.css";

export default function ChatsScreen() {
  return (
  <div className="chats-screen-container">

      <header>
        <span>WhatsApp</span>
      </header>

      <div className="screen">

        <aside className="icon-bar">
          <button className="btn-chat">
          <i class="bi bi-chat-left-text-fill"></i>
          </button>

          <button className="btn-llamadas">
          <i class="bi bi-telephone-fill"></i>
          </button>

          <button className="btn-estados">
          <i class="bi bi-emoji-laughing-fill"></i>
          </button>

          <button className="btn-canales">
          <i class="bi bi-people-fill"></i>
          </button>

          <button className="btn-herramientas">
          <i class="bi bi-house-door-fill"></i>
          </button>

          <button className="btn-anunciar">
          <i class="bi bi-megaphone-fill"></i>
          </button>

          <button className="btn-comentario">
          <i class="bi bi-pencil-square"></i>
          </button>

          <button className="btn-multimedia">
          <i class="bi bi-collection-fill"></i>
          </button>

          <button className="btn-ajustes">
          <i class="bi bi-gear-fill"></i>
          </button>

          <button className="btn-perfil">
          <i class="bi bi-person-fill"></i>
          </button>
        </aside>

        <aside className="chats-screen">
          <ContactSidebar />
        </aside>
      
        <main className="chat-empty">
          <h1>WhatsApp para Windows</h1>
          <br />
          <span>Organiza, administra y haz crecer tu cuenta de empresa.</span>
        </main>
      </div>
    </div>
  );
}