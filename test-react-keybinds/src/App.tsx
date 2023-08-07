import { useState } from 'react'
import './App.css'
import { KeyBindProvider, ShortcutType } from 'react-keybinds'
import P1 from './p1'
function App() {
  const [count, setCount] = useState(0)
  const [mount, setMount] = useState(false)
  const GLOBAL_COMMANDS: ShortcutType[] = [
    {
      keys: {
        Mac: ['Control'],
        Windows: ['Control']
      },
      label: 'Test global command',
      callback: () => {
        console.log("🚀 ~ file: App.tsx:15 ~ sad:", 'sad')
        setCount(count => count + 1)
      }
    }
  ]

  return (
    <KeyBindProvider shortcuts={GLOBAL_COMMANDS} debounce={10000}>
      {count}
      {mount && <P1 />}
      <button onClick={() => setMount(mount => !mount)}></button>
    </KeyBindProvider>
  )
}

export default App
