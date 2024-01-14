import { useState } from 'react'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <TodoList />
    </>
  )
}

export default App
