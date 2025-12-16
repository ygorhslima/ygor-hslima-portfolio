import './style/style.css'
import imgPerfil from '../../assets/img-perfil.jpg'
import curriculo from './curriculo.pdf'
export default function SectionFicha(){
    return(
         <section id="ficha">
            <div id='content'>
                <img src={imgPerfil} className="foto"/>
                <div className='text'>
                    <h1>Ygor Henrique</h1>
                    <p>Atualmente curso <strong>Análise e desenvolvimento de sistemas</strong>, meu foco de estudo atualmente está no desenvolvimento web, na parte de <strong>criação, otimização e manutenção de sites</strong>, valorizando <strong>interfaces funcionais</strong> e uma <strong>experiência do usuário</strong> de qualidade.</p>
                </div>
            </div>
            <br/>
            <div id="social">
                <a href="https://www.linkedin.com/in/ygor-henrique-888543300" target="_blank" rel="nofollow">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                
                <a href="https://github.com/ygorhslima" target="_blank" rel="nofollow">
                    <i className="fa-brands fa-github"></i>
                </a>
                
                <a href={curriculo} target="_blank" rel="external" type="application/pdf">
                    <i className="fa-solid fa-file"></i>
                </a>
                <br />
            </div>
        </section>
    )
}
