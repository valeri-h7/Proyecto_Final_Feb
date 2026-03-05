import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StatusScreen.css";

export default function StatusScreen() {

  const navigate = useNavigate();

  const status = [
    {
      id: 1,
      name: "Sofía - Cuadrilla Centro",
      avatar: "https://st5.depositphotos.com/22341038/68727/i/450/depositphotos_687271764-stock-photo-png-young-attractive-girl-isolated.jpg",
      image: "https://nataliasuarez.com/wp-content/uploads/2022/08/foto-con-buena-resolucion-y-detalles.jpg",
      time: "Hace 20 min"
    },
    {
      id: 2,
      name: "Tony Stark",
      avatar: "https://www.pngkey.com/png/detail/201-2019866_icons-de-tony-stark-.png",
      image: "https://m.media-amazon.com/images/M/MV5BMjI3NDY5NjYxMl5BMl5BanBnXkFtZTcwOTU2OTY3Nw@@._V1_.jpg",
      time: "Hace 1 hora"
    },
    {
      id: 3,
      name: "Steve Rogers",
      avatar: "https://toppng.com/uploads/preview/free-icons-captain-america-11553541790llhrflvlzz.png",
      image: "https://m.media-amazon.com/images/M/MV5BMjA0NjY1MDM1M15BMl5BanBnXkFtZTcwODgwOTY3Nw@@._V1_.jpg",
      time: "Hace 2 horas"
    }
  ];

  const [active, setActive] = useState(null);

  const openStatus = (index) => {
    setActive(index);
  };

  useEffect(() => {

    if (active === null) return;

    const timer = setTimeout(() => {
      setActive(null);
    }, 2000);

    return () => clearTimeout(timer);

  }, [active]);

  return (
    <div className="status-screen">


      <div className="status-header">

        <button
          className="back-button"
          onClick={() => navigate("/chats")}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        <h2>Estados</h2>

      </div>


      {active === null && (

        <div className="status-list">

          {status.map((s, index) => (

            <div
              key={s.id}
              className="status-item"
              onClick={() => openStatus(index)}
            >

              <img
                src={s.avatar}
                className="status-avatar"
              />

              <div className="status-info">

                <span>{s.name}</span>

                <p>{s.time}</p>

              </div>

            </div>

          ))}

        </div>

      )}

      {active !== null && (

        <div className="status-viewer">

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="status-top">

            <img
              src={status[active].avatar}
              className="viewer-avatar"
            />

            <div>

              <span>{status[active].name}</span>

              <p>{status[active].time}</p>

            </div>

          </div>

          <img
            src={status[active].image}
            className="status-image"
          />

        </div>

      )}

    </div>
  );
}
