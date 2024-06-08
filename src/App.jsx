import {useDispatch, useSelector} from 'react-redux'
import './App.css'
import { fetchTodo } from './redux/slice/TodoSlice'

function App() {
  const dispatch = useDispatch()
  const state = useSelector( state => state)
  console.log(state)

  if(state.todo.isLoading){
    return <h1 className='list'>Loading...</h1>
  } 

  return (
    <div className="app-container">
      <button className="fetch-button" onClick={e => dispatch(fetchTodo())}>Generate Todo</button>
      <ul className="todo-list">
        {state.todo.data && state.todo.data.map((data) => (
          <li key={data.id} className="todo-item">{data.title}</li>
        ))}
      </ul> 
    </div>
  )
}

export default App
