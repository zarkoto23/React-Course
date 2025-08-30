import styles from "./Item.module.css";

export default function Item(props) {
  let compl = [styles.todo];
  if (props.todo.isCompleted) {
    compl.push(styles["is-completed"]);
  }

  return (
    <tr className={compl.join(" ")}>
      <td>{props.todo.text}</td>
      <td>{props.todo.isCompleted ? "Complete" : "Incomplete"}</td>
      <td className="todo-action">
        <button
          onClick={() => props.onToggle(props.todo._id)}
          className="btn todo-btn"
        >
          Change status
        </button>
      </td>
    </tr>
  );
}
