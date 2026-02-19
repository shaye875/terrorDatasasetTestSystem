import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Data from './pages/data'
import { useContext } from 'react'
import { createContext } from 'react'
import Qwestion from './pages/qwestion'

export const UseContext = createContext()

function App() {
  const [listTerrorists, setList] = useState([])
  async function fetchTerrorists() {
    const res = await fetch("http://localhost:3000/api/terrorists")
    const data = await res.json()
    setList(data)
  }
  if (listTerrorists.length === 0) {
    fetchTerrorists()
  }
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <UseContext value={{ listTerrorists, setList }}>
        <Routes>

          <Route path='/' element={<Data />} />
           <Route path='qwestion' element={<Qwestion />} />
        </Routes>
      </UseContext>
    </BrowserRouter>
  )
}

export default App
