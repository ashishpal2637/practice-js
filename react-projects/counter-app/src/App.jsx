import React, { useState } from 'react'

const App = () => {

  const [counter, setcounter] = useState(0)
  const [inputval, setinputval] = useState(0)


  const addcounter = () => {
    setcounter((prevcount) => prevcount + 1)
  }
  
  const subtractcounter = () => {
    if(counter <= 0) {
      setcounter(0);
    } else {
      setcounter((prevcount) => prevcount - 1)
    }
  }

  const addcustomval = () => {
    var numm = Number(inputval)
    if(numm < 0) {
      alert("please enter a posiitve num")
    } else {
      setcounter((prev) => prev + numm)
      setinputval(0)
    }
  }
  
  return (
    <>
    <div className="container">
      <h1>Simple Counter App</h1>
      <div className="btn">
        <button onClick={addcounter}>+</button>
        <button onClick={subtractcounter}>-</button>
      </div>
      <input type="number" min={0} placeholder='Enter the number' value={inputval} onChange={(e) => setinputval(e.target.value)}/>
      <div className="result">Result - {counter}</div>
      <div className="btn2">
        <button onClick={addcustomval}>submit</button>
        <button onClick={() => setcounter(0)}>reset</button>
      </div>
    </div>
    </>
  )
}

export default App