import { useState } from "react";
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      // console.log(counter);
    }

  }


  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      // console.log(counter);
    }
  }

  return (
    <>
      <h1>Chai React aur Monu</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
