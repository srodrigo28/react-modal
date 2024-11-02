import './App.css';
import { useState } from "react"
import { Loja } from './components/Loja';

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="container">

      <Loja isOpen={open}  setOpen={setOpen} />
      <button className='button22' onClick={ () => setOpen(!open) } > Loja </button>

    </div>
  )
}

export default App
