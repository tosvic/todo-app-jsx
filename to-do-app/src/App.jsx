
import React, { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState(['1', '2', '3'])

  const [task, setTask] = useState('')

  function createTodo () {  
        // console.log(`can you see me: ${task}`)
        setTodos(oldTodos => {
          return [...oldTodos, task]
        })

  }


  return (
    <>
      <div className='bg-slate-700 h-screen pl-8 text-white'>
      <h1 className='text-white pt-5 pl-4 font-semibold text-2xl'>To  Do App</h1>
      <input className='mt-4 border-2 px-8 py-2 rounded text-black' type="text" value={task} onChange={e => {
        setTask(e.target.value)
      }} />
      <button onClick={createTodo}>Add Task</button>

      <ul className='mt-4 pl-2'>
       {todos.map(todo => {
        return <li>{todo}</li>
       })}
      </ul>

     
      </div>
    </>
  )
}

export default App
