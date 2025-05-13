import { TodoContext } from "../context/TodoProvider";
import { useContext } from "react";
import { navTodo } from "../util/data";
function NavTodo() {
  const { status, setStatus } = useContext(TodoContext);
  return (
    <div className="flex items-center justify-center gap-20 relative">
      {navTodo.map((item) => (
        <div
          key={item.id}
          className="text-lg font-bold p-2 relative cursor-pointer"
          onClick={() => setStatus(item.name)}
        >
          {item.name}
          {status === item.name && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 z-10"></div>
          )}
        </div>
      ))}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></div>
    </div>
  );
}

export default NavTodo;
