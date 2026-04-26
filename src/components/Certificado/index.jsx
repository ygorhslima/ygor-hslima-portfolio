import { useState } from "react";
import { createPortal } from "react-dom";
import "./style.css";

/**
 * O createPortal é como um teletransporte. Ele permite que um componente seja declarado em um lugar do código, mas seja renderizado (apareça) em um lugar completamente diferente do HTML final.
 */

export default function Certificado(props) {
  const [mostrarPDF, setMostrarPDF] = useState(false);

  const modalJSX = (
    <div className="modal">
      <div className="overlay" onClick={() => setMostrarPDF(false)}></div>
      <div className="conteudo">
        <h3>{props.curso}</h3>
        <embed
          src={props.link}
          width="100%"
          height="100%"
          type="application/pdf"
        />
        <button className="fechar-modal" onClick={() => setMostrarPDF(false)}>
          Fechar
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button onClick={() => setMostrarPDF(true)}>Ver certificado</button>
      {mostrarPDF && createPortal(modalJSX, document.body)}
    </div>
  );
}
