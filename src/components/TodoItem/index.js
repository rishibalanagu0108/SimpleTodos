// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodoItem} = props
  const {title, id} = todoItem

  const onDelete = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todo">
      <p className="todo-content">{title}</p>
      <button className="todo-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
