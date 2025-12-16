import './style/style.css'

export default function Footer(){
    return(
        <>
            <aside>
                <div className='name'>
                    <h4>Ygor Henrique</h4>
                    <p>Estudante apaixonado por tecnologia e por criar soluções que ajudem as pessoas</p>
                </div>
                <div className='links'>
                    <h4>Links</h4>
                    <div className='link'>
                        <a href="#">Home</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#skills">Skills</a>
                        <a href="#formacao">Formação</a>
                        <a href="#projetos">Projetos</a>
                    </div>
                </div>
                <div className="connect">
                    <h4>Connect</h4>
                    <div className='social social_footer'>
                        <a href="https://www.linkedin.com/in/ygor-henrique-888543300" target='_blank' rel='nofollow'>
                            <i className='fa-brands fa-linkedin'></i>
                        </a>
                        <a href="https://github.com/ygorhslima" target='_blank' rel='nofollow'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        
                        <a href="mailto:ygorlima.dev06@gmail.com"><i className='fa-solid fa-paper-plane'></i></a>
                    </div>
                </div>
            </aside>
            <footer>
                <p>
                    © 2025 Ygor Henrique. Feito com React.
                </p>
            </footer>
        </>
    )
}