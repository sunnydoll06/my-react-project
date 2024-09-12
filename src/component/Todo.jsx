import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo, submittingTodos}) {
  submittingTodos.current = true;
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} submittingTodos={submittingTodos}/>
  ) 
  : (
    <div className="todo">
      <p
        onClick={() => { toggleCompleted(todo.id); }} 
        className={ `content ${todo.isCompleted ? "completed" : " "}` }
      >
        {todo.content}
      </p>
      <p>
        {todo.date}
        <br />
        {todo.time}
      </p>
      <div>
        <MdEdit
          onClick={() => {
            toggleIsEditing(todo.id);
          }}
          style={{ cursor: "pointer" }}
        />
        <MdDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default Todo;
