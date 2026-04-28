import "./style.css";

// Importando as imagens dos projetos
import { listaProjetos } from "../../../../../utils/listaProjetos";

export default function ArticleProjetos() {
  return (
    <article id="projetos">
      <h2>
        <i className="fa-solid fa-trowel-bricks"></i> Projetos Criados
      </h2>

      <div id="projeto-container">
        {listaProjetos.map(
          (
            {
              imagemProjeto,
              periodo,
              titulo,
              descricao,
              descricaoDetalhada,
              link,
            },
            index,
          ) => {
            return (
              <div className="projeto" key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <div className="wrap-img-titulo">
                    <img src={imagemProjeto} alt={titulo} className="foto" />
                    <p className="titulo-link">{titulo}</p>
                  </div>
                </a>
                <div className="projeto-info">
                  <p className="periodo">{periodo}</p>
                  <h3 className="titulo">{titulo}</h3>
                  <p>{descricao}</p>
                  <details className="descricao">
                    <summary>Saiba mais...</summary>
                    <p>{descricaoDetalhada}</p>
                  </details>
                </div>
              </div>
            );
          },
        )}
      </div>
    </article>
  );
}
