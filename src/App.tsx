import { useState } from 'react'
import './App.css'

function App() {
  /* This count can be number or null
    useState<number | null>
  */
  const [count, setCount] = useState<number | null>(0)

  const handleCount = () => {
    setCount(count + 1);
  }

  const handleReset = () => {
    setCount(null);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
