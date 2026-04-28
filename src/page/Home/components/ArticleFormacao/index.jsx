import Certificado from "../Certificado";
import "./style.css";
import { listaFormacao } from "../../../../core/utils/listaFormacaoAndCertificados";
import { listaCertificado } from "../../../../core/utils/listaFormacaoAndCertificados";

export default function ArticleFormacao() {
  return (
    <article id="formacao">
      <h2>
        <i className="fa-solid fa-graduation-cap"></i> Minha Formação
      </h2>
      <div className="formacao-container">
        {listaFormacao.map(({ periodo, instituicao, titulacao }, key) => {
          return (
            <div className="curso" key={key}>
              <div className="periodo">{periodo}</div>
              <h3 className="instituicao">{instituicao}</h3>
              <p className="titulacao">{titulacao}</p>
            </div>
          );
        })}
      </div>
      <br />
      <h2>
        <i className="fa-solid fa-graduation-cap"></i>Certificado
      </h2>
      <div className="grid-formacao-certificados">
        {listaCertificado.map(
          ({ curso, instituicao, data_emissao, link }, index) => {
            return (
              <div className="certificados" key={index}>
                <div>{curso}</div>
                <h3>{instituicao}</h3>
                <p>{data_emissao}</p>
                <Certificado curso={curso} link={link} />
              </div>
            );
          },
        )}
      </div>
    </article>
  );
}
