import { useState } from "react";

function CreateForm({ addTodo, submittingTodos }) {
  submittingTodos.current = true;
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content, date, time);
    setContent("");
    setDate("");
    setTime("");
  };

  return (
    <>
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
        <button type="submit">加入</button>
      </form>
    </>
  );
}

export default CreateForm;
