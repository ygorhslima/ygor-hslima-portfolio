import './styles/style.css'


export default function ArticleSobre(){
    return(
        <article id='sobre'>
            <h1>Sobre mim</h1>

            <div className='sobre-content'>
                <h4 className='sobre-title'>Minha trajetória</h4>          
                <p className='sobre-paragrafo'>
                    a minha trajetória começou quando comecei a estudar no ensino médio, na escola técnica em que eu frequentei, eu já gostava de tecnologia desde criança, mas depois que entendi que poderia trabalhar e me profissionalizar com isso, foi aí que me interessei pela área e atualmente continuo os meus estudos cursando Análise e desenvolvimento de sistemas.
                </p>
            </div>

            <div className='sobre-content'>
                <h4 className='sobre-title'>Valores</h4>
                <p className='sobre-paragrafo'> 
                    Valorizo o <stong>respeito mútuo</stong> e <strong>humildade</strong>, acredito que um ambiente saudável e <strong>cooperativo</strong> potencializa resultados. Tenho <strong>pontualidade</strong>, encaro os desafios com <strong>resiliência</strong> e mantenho a <strong>curiosidade e aprendizado contínuo</strong> como algo que norteia minha identidade.
                </p>
            </div>

            <div className='sobre-content'>
                <h4 className='sobre-title'>O que faço quando não estou programando...</h4>
                <p className='sobre-paragrafo'>
                    Eu sou uma pessoa bem caseira, gosto de passar o tempo com a minha família, tenho hobbys como jogar xadrez e jogos relacionados a raciocínio, leio livros, jogo videogame e faço desenhos, esses hobbys me ajudam a ter mais criatividade e raciocínio lógico, e, claro, desenvolver sites e códigos, hobby esse que se tornou algo que quero me profissionalizar.
                </p>
            </div>

        </article>
    )
}