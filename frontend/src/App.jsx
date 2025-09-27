import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import toast, { Toaster } from 'react-hot-toast';
import MovieDialog from './components/MovieDialog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' ' >
      <Body />
      <Toaster/>
      <MovieDialog/>
    </div>
  )
}

export default App
