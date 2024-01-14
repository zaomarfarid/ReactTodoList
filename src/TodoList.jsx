import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
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
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} />
            ))}
        </List >
    )
}