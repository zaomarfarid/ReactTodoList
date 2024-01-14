import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import './App.css'
import NavBar from './NavBar'

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <TodoList />
    </>
  )
}

export default App
