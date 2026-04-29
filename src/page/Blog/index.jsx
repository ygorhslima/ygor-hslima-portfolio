import "./style.css";

import SectionFicha from "../Home/components/SectionFicha";
import PostCards from "./PostCards";
import BlogFooter from "./BlogFooter";

export default function Blog() {
  return (
    <>
      <section className="blog-page">
        <SectionFicha />
        <div className="blog-container">
          <article id="blog-content">
            <h2>
              <i className="fa-solid fa-newspaper"></i> Artigos
            </h2>
            <PostCards />
          </article>
        </div>
      </section>
      <BlogFooter />
    </>
  );
}
