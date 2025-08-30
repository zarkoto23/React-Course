import styles from './Item.module.css'

export default function Item(props){


    return(
              <tr className={styles.todo}>
              <td>{props.todo.text}</td>
              <td>{props.todo.isCompleted ? 'Complete':'Incomplete'}</td>
              <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
              </td>
            </tr>

    )
}