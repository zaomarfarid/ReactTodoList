import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
    { id: 1, text: 'text one', completed: false },
    { id: 2, text: 'text one', completed: false },
    { id: 3, text: 'text one', completed: true },
    { id: 4, text: 'text one', completed: false }
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

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