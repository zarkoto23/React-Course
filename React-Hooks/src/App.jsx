import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";

import ChatPage from "./components/ChatPage";
import Home from "./components/Home";
import Send from "./components/Send";
import Login from "./components/Login";
import { useState } from "react";

import { userContext } from "./components/contexts/UserContext";

function App() {
  const [user, setUser] = useState("");

  const userLoginHandler = (username) => {
    setUser(username);
  };

  return (
    <userContext.Provider value={{ userLoginHandler, user }}>
      <Navigation />

      <Routes>
        <Route index element={<Home />} />

        <Route path="/chat" element={<ChatPage />} />
        <Route path="/send" element={<Send />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
