import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import { v4 as uuidv4 } from "uuid";
function AddTodo() {
  const [text, setText] = useState("");
  const { setTodos } = useContext(TodoContext);
  const handleAddTodo = () => {
    if (text.trim()) {
      setTodos((prev) => [...prev, { id: uuidv4(), text, completed: false }]);
      setText("");
    }
  };
  return (
    <div className="flex gap-4 mb-4">
      <input
        className="flex-1 py-3 px-2 border border-gray-300 rounded-md text-sm outline-none"
        type="text"
        placeholder="Add details"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button
        className="text-white text-sm bg-blue-600 px-5 py-2 rounded-md cursor-pointer"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
