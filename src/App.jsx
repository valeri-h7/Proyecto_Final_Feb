import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ChatsScreen from "./Screens/ChatsScreen/ChatsScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./Screens/ErrorNotFoundScreen/ErrorNotFoundScreen";
import AnnouncementsScreen from "./Screens/AnnouncementsScreen/AnnouncementsScreen";
import CallsScreen from "./Screens/CallsScreen/CallsScreen";
import StatusScreen from "./Screens/StatusScreen/StatusScreen";
import CommunitiesScreen from "./Screens/CommunitiesScreen/CommunitiesScreen";
import ToolsScreen from "./Screens/ToolsScreen/ToolsScreen";
import SendcommentScreen from "./Screens/SendcommentScreen/SendcommentScreen";
import MultimediaScreen from "./Screens/MultimediaScreen/MultimediaScreen";
import SettingsScreen from "./Screens/SettingsScreen/SettingsScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />

      <Route path="/chats" element={<ChatsScreen />}>
        <Route
          index
          element={
            <div className="chat-empty">
                <div className="logo-wsp-empty"><i className ="bi bi-whatsapp"></i></div>
              <h1>WhatsApp para Windows</h1>
              <span>Organiza, administra y haz crecer tu cuenta de empresa.</span>
            </div>
          }
        />
        <Route path=":contact_id" element={<ContactScreen />} />
        </Route>

        <Route path="/calls" element={<CallsScreen />} />

        <Route path="/status" element={<StatusScreen />} />

        <Route path="/communities" element={<CommunitiesScreen />} />

        <Route path="/tools" element={<ToolsScreen />} />

        <Route path="/announcements" element={<AnnouncementsScreen />} />

        <Route path="/send comment" element={<SendcommentScreen />} />

        <Route path="/multimedia" element={<MultimediaScreen />} />

        <Route path="/settings" element={<SettingsScreen />} />

        <Route path="/profile" element={<ProfileScreen />} />

      <Route path="*" element={<ErrorNotFoundScreen />} />
    </Routes>
  );
}

export default App;