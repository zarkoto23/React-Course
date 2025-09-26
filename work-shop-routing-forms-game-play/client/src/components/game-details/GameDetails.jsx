import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import gameService from "../../services/gameService";
import { Link } from "react-router";

export default function GameDetails() {
  const [game, setGame] = useState({});
  const { gameId } = useParams();
  const nav=useNavigate()

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      setGame(result);
    });
  }, [gameId]);

  const onDeleteClickHandler=async ()=>{
    const hasConfirm= confirm(`Are you sure delete "${game.title}" ?`)
    if(!hasConfirm){
        return
    }

     await gameService.remove(gameId)

     nav('/games')

  }

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

        <p className="text">
          {game.summary}
        </p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* <!-- list all comments for current game (If any) --> */}
            <li className="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className="comment">
              <p>Content: The best game.</p>
            </li>
          </ul>
          {/* <!-- Display paragraph: If there are no games in the database --> */}
          <p className="no-comment">No comments.</p>
        </div>

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

      {/* <!-- Bonus --> */}
      {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
}
