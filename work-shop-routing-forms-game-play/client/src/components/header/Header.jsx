import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { email, isAuth } = useAuth();
  return (
    <header>
      {/* <!-- Navigation --> */}
      <h1>
        <Link className="home" to="/">
          GamesPlay
        </Link>
      </h1>
      <nav>
        <Link to="/games">All games</Link>
        <Link to="/admin">adminPanel</Link>

        {/* <!-- Logged-in users --> */}
        {isAuth ? (
          <div id="user">
            <Link to="/games/create">Create Game</Link>
            <Link to="/logout">Logout</Link>
            {email}
          </div>
        ) : (
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
