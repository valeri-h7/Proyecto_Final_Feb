import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnnouncementsScreen.css";


export default function AnnouncementsScreen() {

  const navigate = useNavigate();
  return (
    <div className="announcement-overlay">
      <div className="announcement-card">
        <h2>Consigue nuevos clientes con anuncios</h2>
        <p>Crea anuncios que se muestran en Facebook e Instagram y haz que
          las personas se comuniquen contigo a través de WhatsApp.</p>
        <ul>
          <li>Llega al público local</li>
          <li>Controla tu presupuesto</li>
          <li>Pon en pausa los anuncios cuando quieras</li>
        </ul>

        <div className="announcement-buttons">

          <button className="cancel-btn" onClick={() => navigate("/chats")}>Cerrar</button>

          <button className="continue-btn">Continuar en Facebook</button>

        </div>
      </div>
    </div>
  );
}