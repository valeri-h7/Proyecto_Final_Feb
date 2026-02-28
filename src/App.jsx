import React from "react"
import { Routes, Route } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import ChatsScreen from "./Screens/ChatsScreen/ChatsScreen"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import ErrorNotFoundScreen from "./Screens/ErrorNotFoundScreen/ErrorNotFoundScreen"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/chats" element={<ChatsScreen />} />
      <Route path="/chat/:contact_id" element={<ContactScreen />} />
      <Route path="*" element={<ErrorNotFoundScreen />} />
    </Routes>
  );
}

export default App;