import { useState } from 'react'

import {Skills , Project , Hero, About_Me ,ResumeButton} from './Component/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
      <About_Me/>
       <Skills/>
       <Project/>
       <ResumeButton/>
      
     
    </>
  )
}

export default App
