import { useState } from 'react'
import { Router  } from 'express'



import Home from "./views/Home/Home"

function App() {
  const [count, setCount] = useState(0)


  return (
  
    <div>
<Home/>
      <h1>COUNTRIES</h1>
    </div>
  )
}

export default App
