import styled from 'styled-components';
import BlocoBlog from "../BlocoBlog";
import placeholder from "../../../images/sobre_nos/placeholder.png"

const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

`
const TitulosPosts = ["A educação no Brasil", "Como estudar para os Vestibulares"]
const TextosPosts = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id pharetra odio, et dictum lectus. Curabitur mollis ex sit amet erat condimentum commodo. Nunc ac tellus lectus. Duis a nisl.",
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id pharetra odio, et dictum lectus. Curabitur mollis ex sit amet erat condimentum commodo. Nunc ac tellus lectus. Duis a nisl."]

function ContainerInfo(props) {
    return (
        <ContainerPag>
            <BlocoBlog
            isMobile={props.isMobile}
            imgSrc={placeholder}
            imgAlt="placeholder"
            titulo="Blog"
            titulosposts = {TitulosPosts}
            textosposts = {TextosPosts}
             />

            

        </ContainerPag>
    )
}

export default ContainerInfo;