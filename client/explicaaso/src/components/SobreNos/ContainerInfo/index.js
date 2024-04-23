import styled from "styled-components";
import BoxInfo from "../BoxInfo";
import placeholder from "../../../images/sobre_nos/placeholder.png"

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
            imgSrc={placeholder} 
            imgAlt="placeholder"
            titulo="Quem Somos?"
            texto="Somos  mais do que apenas um cursinho preparatório. Somos uma comunidade  apaixonada de estudantes da Universidade de São Paulo (USP), unidos por  um propósito comum: ajudá-lo a alcançar seus objetivos acadêmicos. Nossa  equipe é composta por alunos dedicados, que entendem os desafios  enfrentados por quem busca ingressar no ensino superior.
            No Cursinho Popular ExplicaAso, acreditamos que todos merecem  acesso a uma educação de qualidade, independentemente de suas origens ou  condições financeiras. Nossa missão é clara: capacitar estudantes como  você a conquistarem suas vagas nas melhores universidades, abrindo  portas para um futuro repleto de oportunidades."/>

            <BoxInfo 
            isMobile={props.isMobile}
            imgSrc={placeholder} 
            imgAlt="placeholder"
            titulo="Informações Sobre as Aulas"
            texto="Somos  mais do que apenas um cursinho preparatório. Somos uma comunidade  apaixonada de estudantes da Universidade de São Paulo (USP), unidos por  um propósito comum: ajudá-lo a alcançar seus objetivos acadêmicos. Nossa  equipe é composta por alunos dedicados, que entendem os desafios  enfrentados por quem busca ingressar no ensino superior.
            No Cursinho Popular ExplicaAso, acreditamos que todos merecem  acesso a uma educação de qualidade, independentemente de suas origens ou  condições financeiras. Nossa missão é clara: capacitar estudantes como  você a conquistarem suas vagas nas melhores universidades, abrindo  portas para um futuro repleto de oportunidades."/>
        
            <BoxInfo 
            isMobile={props.isMobile}
            imgSrc={placeholder} 
            imgAlt="placeholder"
            titulo="Corpo Docente"
            texto="Somos  mais do que apenas um cursinho preparatório. Somos uma comunidade  apaixonada de estudantes da Universidade de São Paulo (USP), unidos por  um propósito comum: ajudá-lo a alcançar seus objetivos acadêmicos. Nossa  equipe é composta por alunos dedicados, que entendem os desafios  enfrentados por quem busca ingressar no ensino superior.
            No Cursinho Popular ExplicaAso, acreditamos que todos merecem  acesso a uma educação de qualidade, independentemente de suas origens ou  condições financeiras. Nossa missão é clara: capacitar estudantes como  você a conquistarem suas vagas nas melhores universidades, abrindo  portas para um futuro repleto de oportunidades."/>
        </ContainerPag>
    );
}

export default ContainerInfo;