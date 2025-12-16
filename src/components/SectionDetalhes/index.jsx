import ArticleFormacao from "../ArticleFormacao"
import ArticleProjetos from "../ArticleProjetos"
import ArticleSkills from "../ArticleSkills"

export default function SectionDetalhes(){
    return(
         <section id="detalhes">
            <ArticleSkills/>
            <ArticleFormacao/>
            <ArticleProjetos/>
        </section>
    )
}