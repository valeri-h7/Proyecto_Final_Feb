import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CommunitiesScreen.css"

export default function CommunitiesScreen() {

  const navigate = useNavigate();

  return (
    <div className="communities-screen">
      <header className="communities-header">
        <button className="back-button" onClick={() => navigate("/chats")}>
          <i className="bi bi-arrow-left"></i>
        </button>
        <h2>Comunidades</h2>
      </header>

      <div className="communities-content">
        <aside className="communities-info">
          <img className="communities-image" src="https://www.educarchile.cl/sites/default/files/styles/style_image_slider_multimedia/public/2023-10/colaboracion_0.png?itok=eOdT-h0g" alt="comunidad"
          />
          <h2>Crea una comunidad para mantenerte en contacto</h2>
          <p>Las comunidades reúnen a los miembros en grupos por temas y facilitan la recepción de avisos de los administradores. Cualquier comunidad a la que te añadan aparecerá aquí.</p>
        </aside>

        <main className="communities-create">
          <i className="bi bi-people-fill"></i>
          <h2>Crea comunidades</h2>
          <p>Crea grupos para reunir a los miembros en función de temas y envíales fácilmente avisos del administrador.</p>
        </main>
      </div>
    </div>
  )
}
