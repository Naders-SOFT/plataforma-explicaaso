import styled from "styled-components";
import BoxInfo from "../BoxInfo";
import placeholder from "../../../images/sobre_nos/placeholder.png"
import corpoDocente from "../../../images/sobre_nos/corpo-docente.jpg"
import nossasAulas from "../../../images/sobre_nos/nossas-aulas.jpg"
import quemSomos from "../../../images/sobre_nos/quem-somos.jpg"

const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

function ContainerInfo(props) {
    /**
     * Usando o template da caixa de informações,
     * passamos o texto, o título e a imagem por parâmetro,
     * facilitando a manutenção futura, caso precise alterar
     * algum campo ou adicionar um novo.
     */
    return (
        <ContainerPag>
            <BoxInfo 
            isMobile={props.isMobile}
            imgSrc={quemSomos} 
            imgAlt="placeholder"
            titulo="Quem Somos"
            texto="O ExpliCAASO é um cursinho popular com atividade no Campus USP de São Carlos, totalmente dedicado à democratização do ensino superior. Constituído por um grupo de estudantes universitários engajados, nosso cursinho busca proporcionar educação de qualidade e acessível, especialmente para aqueles que enfrentam barreiras econômicas ou sociais que dificultam o acesso ao ensino superior. Nossa missão é oferecer um ambiente acolhedor e inclusivo, onde todos os alunos possam se preparar para os exames de entrada com confiança e suporte."/>

            <BoxInfo 
            isMobile={props.isMobile}
            imgSrc={nossasAulas} 
            imgAlt="placeholder"
            titulo="Nossas Aulas"
            texto="No ExpliCAASO, oferecemos aulas preparatórias para as principais provas de seleção à Universidade, como o ENEM. FUVEST, UNESP e UNICAMP, sendo lecionadas de segunda a sexta-feira, das 18h às 22h. 
            Nossos módulos são embasados no consolidado material didático HEXAG, e incluem as disciplinas cobradas nos principais vestibulares, sendo elas: Matemática, Gramática, Literatura, Redação, História, Geografia, Biologia, Física e Química. Além das aulas em sala, como meio de preparação e apoio à teoria, são oferecidos exercícios durante a semana e simulados ao longo do ano letivo."/>
        
            <BoxInfo 
            isMobile={props.isMobile}
            imgSrc={corpoDocente} 
            imgAlt="placeholder"
            titulo="Corpo Docente"
            texto="Nosso corpo docente é composto por estudantes universitários que compartilham o compromisso com a educação acessível. Possuindo conhecimento prático em diversas áreas, adquirido principalmente através de suas próprias experiências em vestibulares, nossos professores são preparados para oferecer um ensino dinâmico e adaptativo, atendendo às necessidades de nossos alunos.
            Além de todo suporte que nosso time de  professores se dedica a sempre oferecer, nossa equipe docente também possui monitores, os quais  apoiam com esclarecimentos de dúvidas."/>
        </ContainerPag>
    );
}

export default ContainerInfo;