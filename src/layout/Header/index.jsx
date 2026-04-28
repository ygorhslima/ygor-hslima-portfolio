import MenuHamburguer from "./MenuHamburguer";
import "./style.css";
export default function Header({ onToggleMenu, temaEscuro, setTemaEscuro }) {
  return (
    <header>
      <div className="menu-hambuguer">
        <MenuHamburguer onClick={onToggleMenu} />
      </div>
      <h1>Portfolio</h1>
      <button id="botao-tema" onClick={() => setTemaEscuro(!temaEscuro)}>
        {temaEscuro ? (
          <>
            <i className="fa-solid fa-sun"></i>
            <p>Modo Claro</p>
          </>
        ) : (
          <>
            <i className="fa-solid fa-moon"></i>
            <p>Modo Escuro</p>
          </>
        )}
      </button>
    </header>
  );
}
