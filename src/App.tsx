import './App.css';
import { useState, useRef } from "react"
// import { Modal } from './components/Modal';
import { ModalCadastro } from './components/ModalCadastro';
import { Loja } from './components/Loja';

function App() {
  const [open, setOpen] = useState<boolean>(false)

  const fileInputRef = useRef(null); // Usando useRef para referenciar o input

  // Função que dispara o clique no input file
  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Dispara o clique no input referenciado
  };

  // Função que lida com a seleção do arquivo
  const handleFileChange = (event : any) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Salvando ... ${file.name}`);
    }
  };

  return (
    <div className="container">

      <ModalCadastro isOpen={open}  setOpen={setOpen} />
      <button className='button22' onClick={ () => setOpen(!open) } > Cadastrar </button>

      <Loja isOpen={open}  setOpen={setOpen} />
      <button className='button22' onClick={ () => setOpen(!open) } > Loja </button>

      <div className='box-upload'>
        <button onClick={handleButtonClick} className='btn99'> + </button>
        <input type="file" ref={fileInputRef} className='input99' onChange={handleFileChange} />
      </div>


    </div>
  )
}

export default App
