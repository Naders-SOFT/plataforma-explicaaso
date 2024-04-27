import styled from 'styled-components';

const ContainerMapa = styled.div`
    iframe {
        width: 500px;
        height: 400px;

        @media only screen and (max-width: 768px) {
            width: 300px; /* Reduzido para se ajustar melhor em dispositivos móveis */
            height: 250px; /* Reduzido para se ajustar melhor em dispositivos móveis */
        }
    }
`;

function Mapa() {
    return (
        <ContainerMapa>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387286.768600269!2d-122.46566303754634!3d37.78010164370148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e35fd35f883%3A0x8092a8c46df5cb13!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1623348443643!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localização do Cursinho"
            ></iframe>
        </ContainerMapa>
    );
}

export default Mapa;