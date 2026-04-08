import "./style/style.css";

// 1. Importando os ícones (ajuste o caminho se a pasta assets estiver em outro nível)
import htmlImg from "../../assets/html5.svg";
import cssImg from "../../assets/css3.svg";
import jsImg from "../../assets/javascript.svg";
import tsImg from '../../assets/typescript.svg';
import mysqlImg from "../../assets/mysql.svg";
import reactImg from "../../assets/react.svg";
import gitImg from "../../assets/git.svg";
import linuxImg from "../../assets/linux.svg";
import Csharp from "../../assets/csharp.svg";
import dotnet from "../../assets/dotnet.svg";

const listaHardSkills = [
  {
    img: `${htmlImg}`,
    text: "HTML",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    img: `${cssImg}`,
    text: "CSS",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    img: `${jsImg}`,
    text: "JavaScript",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    img: `${tsImg}`,
    text: "TypeScript",
    link: "https://www.typescriptlang.org/docs/"  
  },
  {
    img: `${reactImg}`,
    text: "React",
    link: "https://pt-br.react.dev/",
  },
  {
    img: `${Csharp}`,
    text: "C#",
    link: "https://learn.microsoft.com/pt-br/dotnet/csharp/",
  },
  {
    img: `${dotnet}`,
    text: ".NET",
    link: "https://learn.microsoft.com/pt-br/dotnet/",
  },
  {
    img: `${mysqlImg}`,
    text: "MySQL",
    link: "https://dev.mysql.com/doc/",
  },
  {
    img: `${gitImg}`,
    text: "Git",
    link: "https://git-scm.com/docs/git/pt_BR",
  },
  {
    img: `${linuxImg}`,
    text: "Linux",
    link: "https://www.linux.org/",
  },
];

const listaSoftSkills = [
  { text: "Inglês" },
  { text: "Cooperação" },
  { text: "Aprendizado Contínuo" },
  { text: "Curiosidade" },
  { text: "Resiliência" },
  { text: "Responsabilidade" },
];

export default function ArticleSkills() {
  return (
    <article id="skills">
      <h2 className="title">
        <i className="fa-solid fa-brain"></i> Minhas Skills
      </h2>
      <div id="skill-container">
        <h2>Hardskills</h2>
        <div className="container-hardskills">
          {listaHardSkills.map(({ img, text, link }, index) => (
            // key está no elemento pai
            <div className="item" key={index}>
              <a
                className="img-hardskill"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img} alt={text} width={40} height={40} />
              </a>
              <div className="skill">{text}</div>
            </div>
          ))}
        </div>

        {/* --- SOFT SKILLS --- */}
        <h2>Softskills</h2>
        <div className="container-softskills">
          {
            // CORRIGIDO: Adicionado a key na div de nível superior
            listaSoftSkills.map(({ text }, index) => {
              return (
                <div className="item" key={index}>
                  <div className="skill">{text}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </article>
  );
}
