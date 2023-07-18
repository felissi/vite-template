import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import T1 from './components/T1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <T1 />
    </>
  )
}

export default App
