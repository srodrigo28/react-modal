import './App.css';
import { useState } from "react"
// import { Modal } from './components/Modal';
import { ModalCadastro } from './components/ModalCadastro';
import { Loja } from './components/Loja';

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="container">

      <ModalCadastro isOpen={open}  setOpen={setOpen} />
      <button className='button22' onClick={ () => setOpen(!open) } > Cadastrar </button>

      <Loja isOpen={open}  setOpen={setOpen} />
      <button className='button22' onClick={ () => setOpen(!open) } > Loja </button>


    </div>
  )
}

export default App
