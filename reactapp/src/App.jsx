import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Menu from './components/menu'
import Article from './components/Article'
import Homepage from './components/Homepage'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage/>
    <Menu count={count} setCount={setCount} />
    <Article/>
    <Contact />      
    </> 
  )
}

export default App
