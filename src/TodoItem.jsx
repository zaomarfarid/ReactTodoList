import {
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Checkbox,
    IconButton
} from '@mui/material';
import { RemoveCircleTwoTone } from '@mui/icons-material';

export default function TodoItem({ todo, removeTodo, toggleTodo }) {
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
            key={todo.id}
            secondaryAction={
                <IconButton onClick={removeTodo} edge="end" aria-label="comments">
                    <RemoveCircleTwoTone />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        onClick={toggleTodo}
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
}