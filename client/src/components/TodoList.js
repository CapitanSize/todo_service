import React, {useEffect, useState} from 'react';
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = ({setOpen, todos, createTodo, deleteTodo, setSelectedTodo}) => {

    const [search, setSearch] = useState('')
    const [fetchingTodos, setFetchingTodos] = useState([])

    const fetchTodos = () => {
        if (search === '') {
            return setFetchingTodos([...todos])
        } else {
            return setFetchingTodos(todos.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())))
        }

    }

    useEffect(() => {
        fetchTodos()
    }, [search, todos])

    return (
        <div>
            <input
                className={'searchInput'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={'Search...'}
            />
        <AddTodo
            createTodo={createTodo}
        />
        <div className={'TodoList'}>
            {todos.length ? fetchingTodos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    description={todo.description}
                    state={todo.state}
                    deleteTodo={deleteTodo}
                    setOpen={setOpen}
                    setSelectedTodo={setSelectedTodo}
                />
            ) : <p className={'noTodos'}>You don`t have todos yet(</p>}
        </div>
        </div>
    );
};

export default TodoList;