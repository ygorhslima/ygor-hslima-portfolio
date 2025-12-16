import { useState, useEffect } from "react"
import './style/style.css'
export default function Header(){
    
    const [temaEscuro, setTemaEscuro] = useState(false)

    useEffect(()=>{
        if(temaEscuro){
            document.body.classList.add("escuro")
        }else{
            document.body.classList.remove("escuro")
        }
    },[temaEscuro])

    
    return(
        <header>
            <h1>Portfólio</h1>
            <nav id="menu">
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#skills">
                            <i className="fa-solid fa-brain"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#formacao">
                            <i className="fa-solid fa-graduation-cap"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#projetos">
                            <i className="fa-solid fa-trowel-bricks"></i>
                        </a>
                    </li>
                    <li>
                        <button id="botao-tema"
                            onClick={()=>{
                                setTemaEscuro(!temaEscuro)
                            }}
                        >{
                            temaEscuro ? (
                                <i className="fa-solid fa-sun"></i>
                            ):(
                                <i className="fa-solid fa-moon"></i>
                            )
                        }
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}