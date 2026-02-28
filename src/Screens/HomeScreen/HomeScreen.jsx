import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./HomeScreen.css"

export default function HomeScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/chats");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-screen">
      {loading ? (
        <>
          <img
            src="/logo-wsp.png"
            alt="WhatsApp Business Logo"
            className="home-logo"
          />
          <p>Cargando...</p>
          <div className="loading-bar">
            <div className="progress"></div>
          </div>
        </>
      ) : null}
    </div>
  );
}