import {useState} from 'react'

import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'

function App() {
  const [todoList, setTodoList] = useState([])
  
  const addTodo = (todo) => {
    setTodoList((prev) => {
      return [...prev, todo]
    })
  }

  const handleComplete = (id) => {
    setTodoList((prev) => {
      return prev.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    })
  }

  const handleDelete = (id) => {
    setTodoList((prev) => {
      return prev.filter(todo => {
        if (todo.id !== id)
          return todo
      })
    })
  }

  return (
    <>
      <TodoList todos={todoList} handleComplete={handleComplete} handleDelete={handleDelete} />
      <TodoForm addTodo={addTodo} />
    </>
  )
}

export default App
