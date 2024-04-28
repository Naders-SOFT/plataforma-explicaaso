import styled from 'styled-components';

const CONTAINERMAPA = styled.div`
    height: 100%;
    width: 100%;
`;

const DSKMAP = styled.div`
    iframe {
        height: 65vh;
        margin-top: 10vh;
        width: 40vw;
    }
`;

const MOBMAP = styled.div`
    iframe {
        height: 50vh;
        margin: 10vh;
        width: 60vw;
    }
`;

function Mapa(props) {
    return (
        <CONTAINERMAPA>

            {/* Disposição mobile da página */}
            {props.isMobile &&
                <MOBMAP>
                    <iframe
                        allowFullScreen=""
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.145487819412!2d-47.898563884933596!3d-22.004122185495456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e77a04e4e2b%3A0x7a86de892e4fbb9c!2sUniversidade%20de%20S%C3%A3o%20Paulo%20-%20USP%2C%20Instituto%20de%20F%C3%ADsica%20de%20S%C3%A3o%20Carlos!5e0!3m2!1sen!2sbr!4v1649842459911!5m2!1sen!2sbr"
                        title="Localização da USP São Carlos"
                    ></iframe>
                </MOBMAP>
            }
            
            {/* Disposição desktop da página */}
            {!props.isMobile &&
                <DSKMAP>
                    <iframe
                        allowFullScreen=""
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.145487819412!2d-47.898563884933596!3d-22.004122185495456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e77a04e4e2b%3A0x7a86de892e4fbb9c!2sUniversidade%20de%20S%C3%A3o%20Paulo%20-%20USP%2C%20Instituto%20de%20F%C3%ADsica%20de%20S%C3%A3o%20Carlos!5e0!3m2!1sen!2sbr!4v1649842459911!5m2!1sen!2sbr"
                        style={{ border: 0 }}
                        title="Localização da USP São Carlos"
                    ></iframe>
                </DSKMAP>
            }
            
        </CONTAINERMAPA>
    );
}

export default Mapa;
