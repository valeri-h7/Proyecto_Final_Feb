import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ChatsScreen from "./Screens/ChatsScreen/ChatsScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./Screens/ErrorNotFoundScreen/ErrorNotFoundScreen";
import Calls from "./Screens/CallsScreen/CallsScreen";
import Status from "./Screens/StatusScreen/StatusScreen";
import Communities from "./Screens/CommunitiesScreen/CommunitiesScreen";
import Tools from "./Screens/ToolsScreen/ToolsScreen";
import AnnouncementsScreen from "./Screens/AnnouncementsScreen/AnnouncementsScreen";
import SendComment from "./Screens/SendCommentScreen/SendCommentScreen";
import Multimedia from "./Screens/MultimediaScreen/MultimediaScreen";
import Settings from "./Screens/SettingsScreen/SettingsScreen";
import Profile from "./Screens/ProfileScreen/ProfileScreen";
import CallsScreen from "./Screens/CallsScreen/CallsScreen";

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

        <Route path="/status" element={<Status />} />

        <Route path="/communities" element={<Communities />} />

        <Route path="/tools" element={<Tools />} />

        <Route path="/announcements" element={<AnnouncementsScreen />} />

        <Route path="/send comment" element={<SendComment />} />

        <Route path="/multimedia" element={<Multimedia />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<ErrorNotFoundScreen />} />
    </Routes>
  );
}

export default App;