import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/reducer/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div >
      <div className='App'>

      <span>{count}</span>

        <button onClick={() => dispatch(increment())}> Increment</button>

        <button onClick={() => dispatch(decrement())}> Decrement</button>

      </div>
    </div>
  )
}

export default App;