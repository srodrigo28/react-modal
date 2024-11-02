
import "./ModalCadastro.css"

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export function Loja({ isOpen, setOpen }: IModal) {
    if (isOpen) {
        return (
            <div className="container">
                <div className="modal">

                    <main className="main-container">
                        <section className="product-image">
                            <img className="img-first" src="./image/Casaco.png" alt="não carregou first image" />
                            <div className="img-group">
                                <img src="./image/Casaco.png" alt="não carregou" />
                                <img src="./image/Casaco.png" alt="não carregou" />
                                <img src="./image/Casaco.png" alt="não carregou" />
                            </div>
                        </section>

                        <form className="product-form">
                            <button id="fechar" onClick={() => setOpen(!isOpen)} > X </button>

                            <h3>Inserir produto ?</h3>

                            <div className="btn-group"> 
                                <input type="text" placeholder="Nome do produto " />
                                <select name="" id="">
                                    <option value="">Calvin Klein</option>
                                </select>
                            </div>

                            <input type="text" placeholder="Descrção do produto "  />
                            
                            <div className="btn-group"> 
                                <select name="" id="">
                                    <option value="">Feminino</option>
                                    <option value="">Masculino</option>
                                </select>

                                <input type="text" placeholder=" Qtd: 01" />
                            </div>

                            <div className="btn-group"> 
                                <select name="" id="">
                                    <option value="">Sobretudo</option>
                                    <option value="">Vestido</option>
                                    <option value="">Camisa</option>
                                    <option value="">Calça</option>
                                </select>

                                <select name="" id="">
                                    <option value="">Importado</option>
                                    <option value="">Nascional</option>
                                </select>
                            </div>

                            <div className="btn-group"> 
                                <input type="text" placeholder="R$ 700,00" />

                                <input type="text" />
                            </div>
                            
                            <button id="cadastrar">Cadastrar</button>
                        </form>
                    </main>

                </div>
            </div>
        )
    }
}