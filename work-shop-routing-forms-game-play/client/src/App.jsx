import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";
import GameEdit from "./components/game-edit/GameEdit";
import Logout from "./components/logout/Logout";
import UserProvider from "./providers/UserProvider";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";

// import Admin from "./components/admin/Admin";
import { lazy, Suspense } from "react";
const Admin = lazy(() => import('./components/admin/Admin'))


function App() {
  return (
    <UserProvider>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/games" element={<GameCatalog />} />

            <Route element={<AuthGuard />}>
              <Route path="/games/create" element={<GameCreate />} />
              <Route path="/games/:gameId/edit" element={<GameEdit />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/games/:gameId/details" element={<GameDetails />} />

            <Route path="/admin" element={<Suspense fallback={<p>Loading...</p>}><Admin /></Suspense>} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
