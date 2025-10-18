import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import CommentsShow from "../comments-show/CommentsShow";
import CommentsAdd from "../comments-add/CommentsAdd";
import { useDeleteGame, useGame } from "../../api/gamesApi";
import useAuth from "../../hooks/useAuth";
import { useComments, useCreate } from "../../api/commentsApi";

export default function GameDetails() {
  const { email, _id } = useAuth();

  const { gameId } = useParams();
  const nav = useNavigate();
  const { game } = useGame(gameId);
  const { deleteGame } = useDeleteGame();
  
  const { comments, setComments } = useComments(gameId);
  const { create } = useCreate(setComments);
  
  const onDeleteClickHandler = async () => {
    const hasConfirm = confirm(`Are you sure delete "${game.title}" ?`);
    if (!hasConfirm) {
      return;
    }
    
    await deleteGame(gameId);
    
    nav("/games");
  };
  
  const commentCreateHandler = (comment) => {
    create(gameId, comment);
  };
  
  const isOwner = game?._ownerId == _id;

  
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

        {isOwner && (
          <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">
              Edit
            </Link>
            <button onClick={onDeleteClickHandler} className="button">
              Delete
            </button>
          </div>
        )}
      </div>

      <CommentsAdd
        onCreate={commentCreateHandler}
        email={email}
        gameId={gameId}
      />
    </section>
  );
}
