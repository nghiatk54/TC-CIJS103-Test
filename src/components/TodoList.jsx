import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import { FaTrash } from "react-icons/fa";

function TodoList() {
  const { status, todos, setTodos } = useContext(TodoContext);
  const isDeleteAll =
    status == "Completed" && todos.filter((todo) => todo.completed).length > 0;
  const currentTodos = () => {
    switch (status) {
      case "All":
        return todos;
      case "Active":
        return todos.filter((todo) => !todo.completed);
      case "Completed":
        return todos.filter((todo) => todo.completed);
    }
  };
  const handleChangeStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const handleDeleteAllTaskCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };
  return (
    <div>
      <div className="space-y-2 mb-4">
        {currentTodos().map((todo) => (
          <div key={todo.id} className="flex gap-3">
            <div className="flex flex-1 items-center gap-3">
              <input
                className="w-4 h-4 cursor-pointer"
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChangeStatus(todo.id)}
              />
              <span
                className={`text-sm ${todo.completed ? "line-through" : ""}`}
              >
                {todo.text}
              </span>
            </div>
            {status == "Completed" && (
              <button onClick={() => handleDeleteTodo(todo.id)}>
                <FaTrash className="text-red-500 text-lg cursor-pointer" />
              </button>
            )}
          </div>
        ))}
      </div>
      {isDeleteAll && (
        <div className="flex justify-end items-center">
          <button
            className="text-white text-sm bg-red-500 px-5 py-2 rounded cursor-pointer flex items-center gap-2"
            onClick={handleDeleteAllTaskCompleted}
          >
            <FaTrash className="text-white text-sm cursor-pointer" />
            Delete All
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
