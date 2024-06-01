
import React, { useState } from 'react'
import './App.css'

let globalID = 0

function App() {

  const [todos, setTodos] = useState([])

  const [task, setTask] = useState('')

  function createTodo() {
    // console.log(`can you see me: ${task}`)
    setTodos(oldTodos => {
      setTask('')
      return [...oldTodos, {todo: task, id: globalID++ }]
    })
  }



  // for form
  // function createTodo(event) {
  //  event.preventDefault()
  //   setTodos(oldTodos => {
  //     setTask('')
  //     return [...oldTodos, task]
  //   })
  // }


  // delete function
  function deleteItem(itemID) {
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }


  function tryKey(e) {
    // console.log('Event', e);
    if (e.keyCode === 13) {
      createTodo()

    }
  }


  return (
    <>
      <div className='bg-slate-700 h-screen pl-8 text-white'>
        <h1 className='text-white pt-5 pl-4 font-semibold text-2xl'>To  Do App</h1>
        <input className='mt-4 border-2 px-8 py-2 rounded text-black' type="text"
          onKeyDown={tryKey}
          value={task}
          onChange={e => {
            setTask(e.target.value)
          }} />
        <button onClick={createTodo}>Add Task</button>

{/* Form Handling well optimized */}
        {/* 
        <form onSubmit={createTodo}>
        <input className='mt-4 border-2 px-8 py-2 rounded text-black' 
          type="text"
          value={task}
          onChange={e => {
            setTask(e.target.value)
          }} />
        <button type='submit'>Add Task</button> 
        </form>
        
        */}

        <ul className='mt-4 pl-2'>
          {todos.map((item, index) => {
            return <div key={item.id}> 
              <li>{item.todo}</li>
              <button className='bg-black px-6 py-2' onClick={() => deleteItem (item.id)}>del</button>
            </div>
          })}
        </ul>


      </div>
    </>
  )
}

export default App
