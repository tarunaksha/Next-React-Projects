import { useState } from 'react'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="Annita" about="B.Tech student,MIT University"/>
    <Card />
    </>
  )
}

export default App
