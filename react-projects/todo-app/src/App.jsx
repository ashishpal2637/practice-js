import React from 'react'
import { useState } from 'react'

const App = () => {

  const [val, setval] = useState("")
  const [arr, setarr] = useState([])

  const addtask = () => {
    setarr((prev) => [...prev, val])
    setval("")
  }


  return (
    <>
    <div className="container">
      <div className="taskbar">
      <input type="text" value={val} onChange={(e)=>setval(e.target.value)} placeholder='Enter your task' />
      <button onClick={addtask}>submit</button>
    </div>
      <div className="box">
         <ul>
          {arr.map(function(elem, idx) {
            return (
                <li key={idx}>{elem}</li>
            )
         })}
         </ul>
      </div>
    </div>
    </>
  )
}

export default App
