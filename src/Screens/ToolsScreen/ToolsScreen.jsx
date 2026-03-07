import React from "react";
import { useNavigate } from "react-router-dom";
import "./ToolsScreen.css";

export default function ToolsScreen() {

  const navigate = useNavigate();

  return (
    <div className="tools-screen">
      <aside className="tools-left">

        <header className="tools-header">
          <button className="back-button" onClick={() => navigate("/chats")}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <h3>Herramientas para la empresa</h3>
        </header>

        <div className="tool-item">
          <i className="bi bi-shop"></i>
          <div>
            <h4>Perfil de empresa</h4>
            <p>Edita la dirección, los horarios y el sitio web.</p>
          </div>
        </div>

        <div className="tool-item">
          <i className="bi bi-grid"></i>
          <div>
            <h4>Catálogo</h4>
            <p>Muestra productos y servicios.</p>
          </div>
        </div>

        <div className="tool-item">
          <i className="bi bi-receipt"></i>
          <div>
            <h4>Pedidos</h4>
            <p>Administra pedidos y pagos.</p>
          </div>
        </div>

        <div className="tool-item-side">
          <i className="bi bi-tag-fill"></i>
          <div>
            <h4>Etiquetas</h4>
            <p>Administra etiquetas para organizar tu empresa.</p>
          </div>
        </div>

         <div className="quick-reply-side">
          <h4>Respuestas rápidas</h4>
          <input type="text" className="quick-input-side" defaultValue="¡Muchas gracias por preferirnos! Esperamos poder servirte nuevamente."/>
        </div>

      </aside>
      <main className="tools-right">

        <div className="labels-section">
          <h3>Etiquetas</h3>

          <div className="labels-grid">

            <div className="label-item">
              <i className="bi bi-tag-fill"></i>
              <span>Nuevo cliente</span>
            </div>

            <div className="label-item">
              <i className="bi bi-tag-fill"></i>
              <span>Pago pendiente</span>
            </div>

            <div className="label-item">
              <i className="bi bi-tag-fill"></i>
              <span>Nuevo pedido</span>
            </div>

            <div className="label-item">
              <i className="bi bi-tag-fill"></i>
              <span>Importante</span>
            </div>
          </div>
        </div>

        <div className="quick-reply">
          <h4>Respuestas rápidas</h4>
          <input type="text" className="quick-input" defaultValue="¡Muchas gracias por preferirnos! Esperamos poder servirte nuevamente."/>
          <p>Crea accesos directos en el teclado con los mensajes que envías frecuentemente.</p>
        </div>
      </main>
    </div>
  );
}
