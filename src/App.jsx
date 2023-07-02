import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Hello",
      completed: false,
    }
  ])

  const [inpVal, setInpVal] = useState('')

  const inpChange = (event) => {
    setInpVal(event.target.value)
  }

  const AddTodo = () => {
      if(inpVal.trim() !== ''){
        const newTodo = {
          id: Date.now(),
          text: inpVal,
          completed: false,
        }
        setTodos([...todos, newTodo])
        setInpVal('')
      }
  }

  const ToggleTodo = (id) => {
    const toglesTodo = todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
    setTodos(toglesTodo)
  }
  
  const DeleteTodo = (id) => {
    const deleteTodo = todos.filter((index) => index.id !== id)
    setTodos(deleteTodo)
  }
  
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='add_todo'>
          <input type='text' placeholder='Todo List' value={inpVal} onChange={inpChange} />
          <button onClick={AddTodo}>Add</button>
      </div>
      <ul className='todo_list'>
          {
            todos.map((todo) => (
              <li key={todo.id}
              className='completed'
              className={todo.completed ? 'completed' : ''}>
              {todo.text}
              <div className='tog_del'>
                <button onClick={() => ToggleTodo(todo.id)}>Toggle</button>
                <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
              </div>
              </li>
            ))
          }
      </ul>
    </div>
  );
}

export default App;
