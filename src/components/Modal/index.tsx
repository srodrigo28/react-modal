
import style from './styles.module.css'

interface IModal{
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export function Modal( { isOpen, setOpen }: IModal ){
    if(isOpen){return(
            <div className={style.container}>
                <div className={style.modal}>
                    
                    <button 
                        className={style.button}
                        onClick={ ()=> setOpen(!isOpen) }
                    >Fechar</button>
                </div>
            </div>
        )
    }
    //else{ return <> </> }
}