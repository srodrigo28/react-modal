import './styles.css';
import { useState } from "react"
import { Modal } from './components/Modal';

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="container">

      <button onClick={ () => setOpen(!open) } > Clique aqui </button>

      <Modal 
        isOpen={open}
        setOpen={setOpen}
        title="Games 2023"
        body="Sua Loja de Games 2023, Goiânia Goiás"
      />
    </div>
  )
}

export default App
