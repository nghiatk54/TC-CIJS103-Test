import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
function ContainerTask() {
  const { status } = useContext(TodoContext);
  const isSearch = status == "All" || status == "Active";
  return (
    <div className="my-4">
      {isSearch && <AddTodo />}
      <TodoList />
    </div>
  );
}

export default ContainerTask;
