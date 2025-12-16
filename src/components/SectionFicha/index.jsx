import './style/style.css'
import imgPerfil from '../../assets/img-perfil.jpg'
import curriculo from './curriculo2.pdf'
export default function SectionFicha(){
    return(
         <section id="ficha">
            <div id='content'>
                <img src={imgPerfil} className="foto"/>
                <div className='text'>
                    <h1>Ygor Henrique</h1>
                    <p>Desenvolvedor Front-End focado em criar experiências digitais modernas e responsivas</p>
                </div>
            </div>
            <br/>
            <div className="social">
                <a href="https://www.linkedin.com/in/ygor-henrique-888543300" target="_blank" rel="nofollow">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                
                <a href="https://github.com/ygorhslima" target="_blank" rel="nofollow">
                    <i className="fa-brands fa-github"></i>
                </a>
                
                <a href={curriculo} target="_blank" rel="external" type="application/pdf">
                    <i className="fa-solid fa-file"></i>
                </a>

                <a href="mailto:ygorlima.dev06@gmail.com"><i className='fa-solid fa-paper-plane'></i></a>
                <br />
            </div>
        </section>
    )
}
