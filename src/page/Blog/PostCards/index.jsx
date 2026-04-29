import { Link } from "react-router-dom";
import { listaBlog } from "../../../core/utils/listaBlog";
import { PAGES } from "../../../core/constants/pages";
import "./style.css";
import { Target } from "lucide-react";

export default function PostCards() {
  return (
    <div className="post-grid">
      {listaBlog.map((item) => (
        <div key={item.id} className="post-card">
          <Link
            to={`${PAGES.BLOG}/${item.id}`}
            target="_blank"
            className="link-blog"
          >
            <div className="post-container">
              <img src={item.img} alt={item.img} />
            </div>

            <div className="post-info">
              <span className="data">{item.data}</span>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
