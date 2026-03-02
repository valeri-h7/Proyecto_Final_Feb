import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ChatsScreen from "./Screens/ChatsScreen/ChatsScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./Screens/ErrorNotFoundScreen/ErrorNotFoundScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />

      <Route path="/chats" element={<ChatsScreen />}>
        <Route
          index
          element={
            <div className="chat-empty">
                <div className="logo-wsp-empty"><i class="bi bi-whatsapp"></i></div>
              <h1>WhatsApp para Windows</h1>
              <span>Organiza, administra y haz crecer tu cuenta de empresa.</span>
            </div>
          }
        />
        <Route path=":contact_id" element={<ContactScreen />} />
      </Route>

      <Route path="*" element={<ErrorNotFoundScreen />} />
    </Routes>
  );
}

export default App;