import "./style.css";
import { listaHardSkills } from "./listaHardSkillsAndSoftskills";
import { listaSoftSkills } from "./listaHardSkillsAndSoftskills";

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
