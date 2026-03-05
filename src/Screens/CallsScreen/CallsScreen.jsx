import React from "react";
import "./CallsScreen.css";

export default function CallsScreen() {

  const calls = [
    {
      id: 1,
      name: "Sofía - Cuadrilla Centro",
      avatar: "https://st5.depositphotos.com/22341038/68727/i/450/depositphotos_687271764-stock-photo-png-young-attractive-girl-isolated.jpg",
      type: "outgoing",
      time: "20 min ago",
      video: true
    },
    {
      id: 2,
      name: "Tony Stark",
      avatar: "https://www.pngkey.com/png/detail/201-2019866_icons-de-tony-stark-.png",
      type: "outgoing",
      time: "2 hours ago",
      video: false
    },
    {
      id: 3,
      name: "Natasha",
      avatar: "https://i.pinimg.com/736x/00/d9/ee/00d9ee8d4c975611c429889aab654593.jpg",
      type: "incoming",
      time: "1 day ago",
      video: true
    },
    {
      id: 1,
      name: "Sofía - Cuadrilla Centro",
      avatar: "https://st5.depositphotos.com/22341038/68727/i/450/depositphotos_687271764-stock-photo-png-young-attractive-girl-isolated.jpg",
      type: "missed",
      time: "2 days ago",
      video: false
    }
  ];

  const getCallIcon = (type) => {
    if (type === "outgoing") return "bi-arrow-up-right";
    if (type === "incoming") return "bi-arrow-down-left";
    if (type === "missed") return "bi-x-circle";
  };

  return (
    <div className="calls-screen">
      <div className="calls-header">
        <h2>Llamadas</h2>
      </div>

      <div className="calls-list">
        {calls.map(call => (
          <div key={call.id} className="call-item">

            <img src={call.avatar} alt={call.name} className="call-avatar"/>

            <div className="call-info">

              <span className={`call-name ${call.type === "missed" ? "missed" : ""}`}>
                {call.name}
              </span>

              <div className="call-details">
                <i className={`bi ${getCallIcon(call.type)}`}></i>
                <span>{call.time}</span>
              </div>

            </div>

            <div className="call-action">
              {call.video ? (
                <i className="bi bi-camera-video-fill"></i>
              ) : (
                <i className="bi bi-telephone-fill"></i>
              )}
            </div>

          </div>
        ))}
      </div>

      <button className="new-call">
        <i className="bi bi-telephone-plus"></i>
      </button>

    </div>
  );
}