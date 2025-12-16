import './style/style.css'

// Importando as imagens dos projetos
import bookmarkLandingPageImg from '../../assets/img-bookmark-landing-page.png';
import spaceTourismImg from '../../assets/img-Space-tourism-website.png';
import dropdownNavigationImg from '../../assets/img-SectionDropdownNavigation.png';
import sunnysideAgencyImg from '../../assets/img-Sunnyside-agency.png';
import ageCalculatorImg from '../../assets/img-age-calculator-app-main.png';
import blogrLandingPageImg from '../../assets/img-blogr-landing-page-main.png';
import browserExtensionImg from '../../assets/img-browser-extension-main.png';

export default function ArticleProjetos(){
    const listaProjetos = [
        {
            "imagemProjeto": `${bookmarkLandingPageImg}`, 
            "periodo":"2025",
            "titulo":"bookmark landing page",
            "descricao":"site fictício de uma loja de gerenciador de extensões de navegador",
            "descricaoDetalhada":"é um projeto de gerenciador de extensões de navegador fictício, é um site responsívo, com Menu interativo para versão de celular, com animações suaves, interface separados em componentes e otimizado usando o framework React",
            "link":"https://ygorhslima.github.io/bookmark-landing-page/"
        },
        {
            "imagemProjeto": `${spaceTourismImg}`,
            "periodo":"2025",
            "titulo":"Space Tourism Website",
            "descricao":"é um site interativo de uma agência espacial",
            "descricaoDetalhada":"um site completo, interativo, imersivo e responsivo de um tour de uma agência espacial, utilizando técnicas de animações de elementos dentro do site e criação de sliders, os chamados carrossel",
            "link":"https://ygorhslima.github.io/frontend-mentor-exercises/space-tourism-website-figma/src/index.html"
        },
        {
            "imagemProjeto": `${dropdownNavigationImg}`,
            "periodo":"2025",
            "titulo":"Section With Dropdown Navigation",
            "descricao":"Um site responsivo utilizando bootstrap para criação de dropdowns no menu do site.",
            "descricaoDetalhada":"Um site responsivo utilizando bootstrap, ferramenta utilizada para criar estilos prontos e que funcionam em qualquer aparelho",
            "link":"https://ygorhslima.github.io/frontend-mentor-exercises/intro-section-with-dropdown-navigation-main/intro-section-with-dropdown-navigation-main/index.html"
        },
        {
            "imagemProjeto": `${sunnysideAgencyImg}`,
            "periodo":"2025",
            "titulo":"Sunnyside Agency Landing Page",
            "descricao":"Uma landing page para a agência Sunnyside, focada em layout responsivo com HTML e CSS.",
            "descricaoDetalhada":"Sunnyside é uma agência fictícia responsável ajudar marcas a crescerem rapidamente. Focado em design e em marketing",
            "link":"https://ygorhslima.github.io/frontend-mentor-exercises/sunnyside-agency-landing-page-main/"
        },
        {
            "imagemProjeto": `${ageCalculatorImg}`,
            "periodo":"2025",
            "titulo":"Age Calculador App Main",
            "descricao":"Um applicativo que calcula a idade do usuário",
            "descricaoDetalhada":"Para calcular a idade, o usuário digita a sua idade, e após clicar no botão de enviar a resposta, aparece os anos, meses e dias de vida",
            "link":"https://ygorhslima.github.io/frontend-mentor-exercises/age-calculator-app-main/"
        },
        {
            "imagemProjeto": `${blogrLandingPageImg}`,
            "periodo":"2025",
            "titulo":"Blogr Landing Page",
            "descricao":"Um site de publicidade de plataforma ",
            "descricaoDetalhada":"este site usei técnicas de flexBox e PositionLayout para deixar as imagens nas posições idênticas, baseado no design",
            "link":"https://ygorhslima.github.io/frontend-mentor-exercises/blogr-landing-page-main/"
        },
        {
            "imagemProjeto": `${browserExtensionImg}`,
            "periodo":"2025",
            "titulo":"Browser Extension Main",
            "descricao":"Um site de extensões de navegador",
            "descricaoDetalhada":"Mostra uma lista de extensões de navegador, onde o usuário pode ativar, desativar ou remover uma extensão, o usuário também pode filtrar as extensões que  está usando e o que não está usando e deixar de sua preferência modo escuro ou modo claro ",
            "link":"https://ygorhslima.github.io/browser-extension-manager-ui-site/"
        },
    ];
    
    return (
        <article id="projetos">
            <h2> <i className="fa-solid fa-trowel-bricks"></i> Projetos Criados</h2>

            <div id="projeto-container">
                {
                    listaProjetos.map(({imagemProjeto,periodo,titulo,descricao,descricaoDetalhada,link},index)=>{
                        return(
                            <div className="projeto" key={index}>
                                <a href={link} target='_blank' rel="noopener noreferrer">
                                    <img 
                                        src={imagemProjeto} 
                                        alt={titulo} 
                                        className="foto"
                                    />
                                </a>
                                <div className="projeto-info">
                                    <p className="periodo">{periodo}</p>
                                    <h3 className="titulo">{titulo}</h3>
                                    <p>{descricao}</p>
                                    <details className="descricao">
                                        <summary>Saiba mais...</summary>
                                        <p>{descricaoDetalhada}</p>
                                    </details>
                                </div>
                            </div>
                        )
                    })
                }
            </div>          
        </article>
    )
}