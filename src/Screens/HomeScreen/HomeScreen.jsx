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
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-screen">
      {loading ? (
        <>
        <div className="logo-wsp"><i class="bi bi-whatsapp"></i></div>
          <h2>WhatsApp</h2>
          <div className="loading-bar">
            <div className="progress">
            </div>
          </div>
        </>
      ) : null}
      <span> 🔒Cifrado de extremo a extremo</span>
    </div>
  );
}