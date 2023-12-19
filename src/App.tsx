import { useState } from 'react'

function App() {
  /* This count can be number or null
    useState<number | null>
  */
  const [sampleState, setSampleState] = useState<string | null>("0")
  const handleSampleState = () => {
    setSampleState(null);
  }

  const [count, setCount] = useState<number>(0)

  const handleCount = () => {
    setCount(count + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <p onClick={handleSampleState}>{sampleState}</p>
    </div>
  )
}

export default App
