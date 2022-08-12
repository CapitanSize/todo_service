import './App.css';
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoEditItem from "./components/TodoEditItem";
import React, {useState} from "react";

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name: 'Go to work', description: 'Wake up at 2 pm, it is really hard', state: 'Completed' },
    {id: 2, name: 'Visit a doctor', description: 'Wake up at 2 pm, it is really hard', state: 'Completed' },
    {id: 3, name: 'Drive a car', description: 'Wake up at 2 pm, it is really hard', state: 'In process' },
    {id: 4, name: 'Go to gym ', description: 'Wake up at 2 pm, it is really hard', state: 'In process' },
    {id: 5, name: 'Have a birthday party', description: 'Wake up at 2 pm, it is really hard', state: 'Expected' },
  ])
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [open, setOpen] = useState(false)

  const createTodo = (name, description) => {
    const todo = {
      id: todos.length + 1,
      name: name,
      description: description,
      state: 'Expected'
    }
    setTodos([...todos,todo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const editTodo = (id, name, description, state) => {
    const todo = todos.find((item) => item.id === id)
    todo.name = name
    todo.description = description
    todo.state = state
    setTodos(todos.map((item) => item.id !== id ? item : todo))
  }

  const openMenu = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <div>
      <Navbar/>
        <TodoList
            setOpen={setOpen}
            createTodo={createTodo}
            todos={todos}
            deleteTodo={deleteTodo}
            setSelectedTodo={setSelectedTodo}
        />
        <TodoEditItem
            editTodos={editTodo}
            openMenu={openMenu}
            open={open}
            todo={todos.find((item) => item.id === selectedTodo) || {}}
        />
    </div>
  );
}

export default App;
