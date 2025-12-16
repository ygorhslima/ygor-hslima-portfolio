import Certificado from '../Certificado'
import './style/style.css'

// Importando os PDFs (isso garante que o build encontre os arquivos)
import AlgoritmoPDF from '../../assets/algoritmo.pdf';
import MysqlPDF from '../../assets/mysql.pdf';
import HtmlCss1PDF from '../../assets/html-css-modulo1.pdf';
import HtmlCss2PDF from '../../assets/html-css-modulo2.pdf';
import HtmlCss3PDF from '../../assets/html-css-modulo3.pdf';
import HtmlCss4PDF from '../../assets/html-css-modulo4.pdf';
import JavascriptPDF from '../../assets/javascript.pdf';
import LinuxPDF from '../../assets/linux.pdf';
import SeoPDF from '../../assets/seo.pdf';
import Ingles1PDF from '../../assets/ingles1.pdf';

export default function ArticleFormacao(){

    const listaFormacao = [
        {
            "periodo":"2022 - 2024",
            "instituicao":"Escola Técnica Estadual Luiz Alves Lacerda",
            "titulacao":"Técnico em Desenvolvimento de sistemas"
        },
        {
            "periodo":"2025 - 2027",
            "instituicao":"Ensino Superior Faculdade Unicesumar EAD",
            "titulacao":"Tecnólogo em Análise e Desenvolvimento de Sistemas"
        }
    ]

    const listaCertificado = [
        {
            "curso": "Algoritmo [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "21 de junho de 2024",
            "link": `${AlgoritmoPDF}` // Template string com a variável importada
        },
        {
            "curso": "MySQL [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "13 de julho de 2024",
            "link": `${MysqlPDF}`
        },
        {
            "curso": "HTML5 e CSS3: MÓDULO 1 DE 5 [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "7 de dezembro de 2024",
            "link": `${HtmlCss1PDF}`
        },
        {
            "curso": "HTML5 e CSS3: MÓDULO 2 DE 5 [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "11 de dezembro de 2024",
            "link": `${HtmlCss2PDF}`
        },
        {
            "curso": "HTML5 e CSS3: MÓDULO 3 DE 5 [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "14 de dezembro de 2024",
            "link": `${HtmlCss3PDF}`
        },
        {
            "curso": "HTML5 e CSS3: MÓDULO 4 DE 5 [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "17 de dezembro de 2024",
            "link": `${HtmlCss4PDF}`
        },
        {
            "curso": "JavaScript [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "22 de dezembro de 2024",
            "link": `${JavascriptPDF}`
        },
        {
            "curso": "Linux [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "23 de Fevereiro de 2025",
            "link": `${LinuxPDF}`
        },
        {
            "curso": "SEO Módulo 01 [40 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "19 de março de 2025",
            "link": `${SeoPDF}`
        },
        {
            "curso": "inglês Módulo 01: BEGINNERS [20 horas]",
            "instituicao": "Curso em vídeo",
            "data_emissao": "11 de Abril de 2025",
            "link": `${Ingles1PDF}`
        },
    ];

    return (
         <article id="formacao">
            <h2><i className="fa-solid fa-graduation-cap"></i> Minha Formação</h2>
            <div className="formacao-container">
                {
                    listaFormacao.map(({ periodo,instituicao,titulacao }, key)=>{
                        return(
                            <div className="curso" key={key}>
                                <div className="periodo">{periodo}</div>
                                <h3 className="instituicao">{instituicao}</h3>
                                <p className="titulacao">{titulacao}</p>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <h2><i className="fa-solid fa-graduation-cap"></i>Certificado</h2>
            <div className="formacao-container">
                {
                    listaCertificado.map(({ curso,instituicao,data_emissao,link },index)=>{
                        return(
                            <div className="curso" key={index}>
                                <div className="curso_nome">{curso}</div>
                                <h3 className="instituicao">{instituicao}</h3>
                                <p className="data_emissao">{data_emissao}</p>
                                <Certificado curso={curso} link={link}/>
                            </div>
                        )
                    })
                }
            </div>
        </article>
    )
}