import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import Example from './components/example/Example'

const words = ["aa","bb","cc"]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Link to="/second">Go to next page</Link>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>hello2</h1>

      {/* example */}
      {words.map((word, i) => (
        <div key={`id-${i}`}>
          <Example text={word} />        
        </div>
      ))}
      <div>
      <Example text="this" />
      </div>
    </>
  )
}

export default App
