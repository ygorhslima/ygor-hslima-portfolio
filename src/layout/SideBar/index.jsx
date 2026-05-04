import { Link } from "react-router-dom";
import "./style.css";
import { PAGES } from "../../core/constants/pages";

export default function SideBar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <Link to={PAGES.HOME} className="link">
        <i className="fa-solid fa-house"></i>
        <p>Home</p>
      </Link>

      <Link to={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.SOBRE}`}>
        <p>Sobre mim</p>
      </Link>

      <Link
        to={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.SKILLS}`}
        className="link"
      >
        <i className="fa-solid fa-brain"></i>
        <p>Skills</p>
      </Link>

      <Link
        to={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.FORMACAO}`}
        className="link"
      >
        <i className="fa-solid fa-graduation-cap"></i>
        <p>Formação</p>
      </Link>

      <Link
        to={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.PROJETOS}`}
        className="link"
      >
        <i className="fa-solid fa-trowel-bricks"></i>
        <p>Projetos</p>
      </Link>

      <Link to={PAGES.BLOG} className="link">
        <i className="fa-solid fa-blog"></i>
        <p>Blog</p>
      </Link>
    </div>
  );
}
