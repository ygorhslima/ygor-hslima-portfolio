import "./style.css";

// Ajuste os nomes dos arquivos conforme o que você tem na pasta imgs e pdfs
import imgPerfil from "../../../../core/assets/imgs/img-perfil.jpg"; 
import curriculo from "./Curriculo_Ygor_Lima_Desenvolvedor_Web.pdf";
import WallpaperDia from "../../../../core/assets/imgs/wallpaper-dia.jpg";
import WallpaperNoite from "../../../../core/assets/imgs/wallpaper-night.jpg";

export default function SectionFicha({ temaEscuro }) {
  return (
    <section
      id="ficha"
      style={{
        backgroundImage: `url('${temaEscuro ? WallpaperNoite : WallpaperDia}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="content">
        <img src={imgPerfil} className="foto" />
        <div className="text">
          <h1>Ygor Henrique</h1>
          <p>
            Desenvolvedor Front-End focado em criar experiências digitais
            modernas e responsivas
          </p>
        </div>
      </div>

      <br />

      <div className="social">
        <a
          href="https://www.linkedin.com/in/ygor-henrique-888543300"
          target="_blank"
          rel="nofollow"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/ygorhslima" target="_blank" rel="nofollow">
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href={curriculo}
          target="_blank"
          rel="external"
          type="application/pdf"
        >
          <i className="fa-solid fa-file"></i>
        </a>

        <a href="mailto:ygorlima.dev06@gmail.com">
          <i className="fa-solid fa-paper-plane"></i>
        </a>
        <br />
      </div>
    </section>
  );
}
