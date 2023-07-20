import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
import "./App.css";

function App() {
  return (
    <>
      <div class="px-6 py-5">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
