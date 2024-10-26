import './App.css';
import { useState } from "react"
// import { Modal } from './components/Modal';
import { ModalCadastro } from './components/ModalCadastro';

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="container">

      <button className='button22' onClick={ () => setOpen(!open) } > Cadastrar </button>

      <ModalCadastro isOpen={open}  setOpen={setOpen} />

    </div>
  )
}

export default App
