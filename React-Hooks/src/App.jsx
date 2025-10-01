import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";

import ChatPage from "./components/ChatPage";
import Home from "./components/Home";
import Send from "./components/Send";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route index element={<Home />} />

        <Route path="/chat" element={<ChatPage />} />
        <Route path="/send" element={<Send />} />

      </Routes>
    </>
  );
}

export default App;
