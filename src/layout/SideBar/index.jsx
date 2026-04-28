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

      <Link to={PAGES.BLOG} className="link">
        <i className="fa-solid fa-blog"></i>
        <p>Blog</p>
      </Link>
    </div>
  );
}
