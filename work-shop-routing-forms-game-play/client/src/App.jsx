import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router";
import Login from "./components/login/login";
import Register from "./components/register/register";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameCreate from "./components/game-create/GameCreate";

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/games" element={<GameCatalog />} />
          <Route path="/games/create" element={<GameCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/games" element={<GameCatalog />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
