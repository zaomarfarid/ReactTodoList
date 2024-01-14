import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Todos
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
