import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const initialTodos = [
    { id: 1, text: 'text one', completed: false },
    { id: 2, text: 'text one', completed: false },
    { id: 3, text: 'text one', completed: true },
    { id: 4, text: 'text one', completed: false }
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
                const labelId = `checkbox-list-label-${todo.id}`;

                return (
                    <ListItem
                        key={todo.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <CommentIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.completed}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={todo.text} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List >
    )
}