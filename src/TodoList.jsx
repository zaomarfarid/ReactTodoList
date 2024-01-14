import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data)
        return []
    else
        return data
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const removeTodo = id => {
        setTodos(prevTodos => (prevTodos.filter(todo => todo.id !== id)))
    }

    const toggleTodo = id => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id)
                    return { ...todo, completed: !todo.completed }
                else
                    return todo
            })
        })
    }

    const addTodo = text => {
        setTodos(prevTodos => ([...prevTodos, { id: 5, text: text, completed: false }]))
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    removeTodo={() => removeTodo(todo.id)}
                    toggleTodo={() => toggleTodo(todo.id)}
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </List >
    )
}