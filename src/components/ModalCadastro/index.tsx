
import "./ModalCadastro.css"

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export function ModalCadastro({ isOpen, setOpen }: IModal) {
    if (isOpen) {
        return (
            <div className="container">
                <div className="modal">

                    <form>
                    <button id="fechar" onClick={() => setOpen(!isOpen)} > X </button>

                        <h3>Nova transferência</h3>

                        <input type="text" placeholder="Descricao " id="descricao" />
                        <input type="text" placeholder="Preco " id="preco" />
                        <input type="text" placeholder="Categoria " id="categoria" />

                        <div className="btn-group">
                            <button id="entrada">
                                <i className="fa-regular fa-circle-up"></i>
                                Entrada
                            </button>

                            <button id="saida">
                                <i className="fa-regular fa-circle-down"></i>
                                Saida
                            </button>
                        </div>
                        <button id="cadastrar">Cadastrar</button>
                    </form>
                </div>
            </div>
        )
    }
}