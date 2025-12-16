import { useState } from "react"
import './style/style.css'

export default function Certificado(props){
    const [mostrarPDF, setMostrarPDF] = useState(false);

    return(
        <div>
            <button onClick={()=>setMostrarPDF(true)}>Ver certificado</button>
            {mostrarPDF && (
                <div className="modal">
                    <div className="overlay" onClick={()=>setMostrarPDF(false)}></div>
                    <div className="conteudo">
                        <h3>{props.curso}</h3>
                        {/* MODIFICAÇÃO: Altura ajustada para 100% para ser controlada pelo CSS */}
                        <embed src={props.link} width="100%" height="100%" type="application/pdf" />
                        
                        {/* NOVO: Botão Fechar dentro do .conteudo para melhor posicionamento */}
                        <button className="fechar-modal" onClick={()=>setMostrarPDF(false)}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    )
}