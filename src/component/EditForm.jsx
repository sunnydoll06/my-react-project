import { useState } from "react";

function EditForm({todo, editTodo, submittingTodos}) {
  submittingTodos.current = true;
  const [content, setContent] = useState(todo.content);
  const [date, setDate] = useState(todo.date);
  const [time, setTime] = useState(todo.time);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, content, date, time);
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入待辦事項"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => {
        setDate(e.target.value);
        }}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <button type="submit">完成</button>
    </form>
  );
}

export default EditForm;
