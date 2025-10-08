import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import CommentsShow from "../comments-show/CommentsShow";
import CommentsAdd from "../comments-add/CommentsAdd";
import commentService from "../../services/commentService";
import { UserContext } from "../../contexts/UserContext";
import { useDeleteGame, useGame } from "../../api/gamesApi";

export default function GameDetails() {
  const { email } = useContext(UserContext);

  const [comments, setComments] = useState([]);
  const { gameId } = useParams();
  const nav = useNavigate();
  const {game}=useGame(gameId)

  const {deleteGame}=useDeleteGame()

  useEffect(() => {
      commentService.getAll(gameId).then(setComments);
    
  }, [gameId]);

  const onDeleteClickHandler = async () => {
    

    const hasConfirm = confirm(`Are you sure delete "${game.title}" ?`);
    if (!hasConfirm) {
      return;
    }

    await deleteGame(gameId)

    nav("/games");
  };

  const commentCreateHandler = (newComment) => {
    setComments((state) => [...state, newComment]);
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <CommentsShow comments={comments} />

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
          <Link to={`/games/${gameId}/edit`} className="button">
            Edit
          </Link>
          <button onClick={onDeleteClickHandler} className="button">
            Delete
          </button>
        </div>
      </div>

      <CommentsAdd
        onCreate={commentCreateHandler}
        email={email}
        gameId={gameId}
      />
    </section>
  );
}
