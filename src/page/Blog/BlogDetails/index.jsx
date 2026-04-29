import { useParams, Navigate } from "react-router-dom";
import { listaBlog } from "../../../core/utils/listaBlog";
import { PAGES } from "../../../core/constants/pages";

export default function BlogDetail() {
  const { id } = useParams();
  const post = listaBlog.find((item) => item.id === parseInt(id));

  if (!post) {
    return <Navigate to={PAGES.BLOG} />;
  }

  return (
    <section id="sobre">
      <article>
        <p className="periodo">{post.data}</p>
        <h1 style={{ color: "var(--destaque)", marginBottom: "20px" }}>
          {post.titulo}
        </h1>
        <div className="sobre-content">
          <p className="sobre-paragrafo" style={{ whiteSpace: "pre-wrap" }}>
            {post.conteudo}
          </p>
        </div>
      </article>
    </section>
  );
}