import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <header className="flex gap-8 justify-center my-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 hover:drop-shadow-xl transition-all" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 animate-spin-slow hover:drop-shadow-xl transition-all" alt="React logo" />
        </a>
      </header>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Vite + React</h1>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
