import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";
import GameEdit from "./components/game-edit/GameEdit";
import { UserContext } from "./contexts/UserContext";
import Logout from "./components/logout/Logout";
import usePersistedState from "./hooks/usePersistedState";

function App() {
  const [authData, setAuthData] = usePersistedState("auth", {});

  const userLoginHandler = (result) => {
    setAuthData(result);
  };

  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider
      value={{ ...authData, userLoginHandler, userLogoutHandler }}
    >
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/games" element={<GameCatalog />} />
            <Route path="/games/create" element={<GameCreate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/games/:gameId/details" element={<GameDetails />} />
            <Route path="/games/:gameId/edit" element={<GameEdit />} />
            <Route path="/logout" element={<Logout />} />

            {/* <Route path="/games" element={<GameCatalog />} /> */}
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
