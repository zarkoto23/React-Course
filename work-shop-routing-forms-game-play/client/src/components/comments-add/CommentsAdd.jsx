export default function CommentsAdd({ onCreate }) {
  const commentAction = (formData) => {
    const comment = formData.get("comment");
    onCreate(comment);
  };

  return (
    // {/* <!-- Bonus --> */}
    //   {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" action={commentAction}>
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
}
