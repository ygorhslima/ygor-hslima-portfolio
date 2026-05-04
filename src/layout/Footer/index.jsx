import { Link } from "react-router-dom";
import { PAGES } from "../../core/constants/pages";
import "./style.css";

export default function Footer() {
  return (
    <>
      <aside>
        <div className="name">
          <h4>Ygor Henrique</h4>
          <p>
            Estudante apaixonado por tecnologia e por criar soluções que ajudem
            as pessoas
          </p>
        </div>
        <div className="links">
          <h4>Links</h4>
          <div className="link">
            <Link to={`${PAGES.HOME}`} className="link">
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
            </Link>

            <Link to={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.SKILLS}`} className="link">
              <i className="fa-solid fa-brain"></i>
              <p>Skills</p>
            </Link>

            <Link to={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.FORMACAO}`} className="link">
              <i className="fa-solid fa-graduation-cap"></i>
              <p>Formação</p>
            </Link>

            <Link to={`${PAGES.HOME}${PAGES.TITLE_LINKS_HOME.PROJETOS}`} className="link">
              <i className="fa-solid fa-trowel-bricks"></i>
              <p>Projetos</p>
            </Link>
          </div>
        </div>
        <div className="connect">
          <h4>Connect</h4>
          <div className="social social_footer">
            <a
              href="https://www.linkedin.com/in/ygor-henrique-888543300"
              target="_blank"
              rel="nofollow"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/ygorhslima"
              target="_blank"
              rel="nofollow"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="mailto:ygorlima.dev06@gmail.com">
              <i className="fa-solid fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </aside>
      <footer>
        <p>© 2025 Ygor Henrique. Feito com React.</p>
      </footer>
    </>
  );
}
