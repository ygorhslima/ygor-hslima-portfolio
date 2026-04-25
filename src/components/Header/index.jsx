import MenuHamburguer from "./MenuHamburguer";
import "./style.css";
export default function Header({ temaEscuro, setTemaEscuro, onToggleMenu }) {
  return (
    <header>
      <h1>Portfolio</h1>
      <div className="menu-hambuguer">
        <MenuHamburguer onClick={onToggleMenu}/>
      </div>

      <div id="menu">
        <a href="#">
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </a>

        <a href="#skills">
          <i className="fa-solid fa-brain"></i>
          <p>Skills</p>
        </a>

        <a href="#formacao">
          <i className="fa-solid fa-graduation-cap"></i>
          <p>Formação</p>
        </a>

        <a href="#projetos">
          <i className="fa-solid fa-trowel-bricks"></i>
          <p>Projetos</p>
        </a>

        <button id="botao-tema" onClick={() => setTemaEscuro(!temaEscuro)}>
          {temaEscuro ? (
              <i className="fa-solid fa-sun"></i>
          ) : (
              <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>
    </header>
  );
}
