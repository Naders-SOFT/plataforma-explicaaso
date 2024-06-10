import { Routes, Route, useNavigate } from "react-router-dom";
import Frentes from "./components/Disciplina/Frentes";

function RoteadorFrentes(props) {
    return (
        <Routes>
            {/* <Route path='/pagina-aluno/:materias/frentes' element={<Frentes isMobile={props.isMobile} navigate={useNavigate}/>} /> */}
        </Routes>
    )
}

export default RoteadorFrentes