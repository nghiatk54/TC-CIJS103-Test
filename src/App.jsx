import { TodoProvider } from "./context/TodoProvider";
import "./index.css";
import NavTodo from "./components/NavTodo";
import ContainerTask from "./components/ContainerTask";
function App() {
  return (
    <TodoProvider>
      <div className="px-2 py-4 h-screen overflow-y-auto">
        <h1 className="text-xl font-bold text-center mb-4">#todo</h1>
        <NavTodo />
        <ContainerTask />
      </div>
    </TodoProvider>
  );
}

export default App;
