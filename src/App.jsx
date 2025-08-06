import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import About from './About'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexDirection: 'row' }}>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
