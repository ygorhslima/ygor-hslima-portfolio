import ArticleFormacao from "../ArticleFormacao"
import ArticleProjetos from "../ArticleProjetos"
import ArticleSkills from "../ArticleSkills"
import ArticleSobre from "../ArticleSobre"
import './styles/style.css'
export default function SectionDetalhes(){
    return(
         <section id="detalhes">
            <ArticleSobre/>
            <ArticleSkills/>            
            <ArticleFormacao/>
            <ArticleProjetos/>
        </section>
    )
}