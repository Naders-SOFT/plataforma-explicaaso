import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PaginaSobreNos from './pages/PaginaSobreNos';
import PaginaNoticias from './pages/PaginaNoticias';
import PaginaLogin from './pages/PaginaLogin';
import PaginaContato from './pages/PaginaContato';
import PaginaBlog from './pages/PaginaBlog';
import PaginaAluno from './pages/PaginaAluno';
import PaginaInicial from './pages/PaginaInicial';
import PaginaAdministrador from './pages/PaginaAdministrador';
import PaginaDisciplina from './pages/PaginaDisciplina';
import PaginaCadastro from './pages/PaginaCadastro';
import PaginaAdmin from './pages/PaginaAdministrador';
import PaginaBlogPost from "./pages/PaginaBlogPostagem";
import PaginaEditarPost from './pages/PaginaEditarPost'
import Frentes from "./components/Disciplina/Frentes";
import ProtectedRouteAdmin from "./ProtectedRoutes/ProtectedRouteAdmin";
import ProtectedRouteProfessor from "./ProtectedRoutes/ProtectedRouteProfessor";


function Roteador(props){

    return(
        <Routes>
            <Route path='/' element={<PaginaInicial isMobile={props.isMobile}/>} />
            <Route path='/pagina-sobre-nos' element={<PaginaSobreNos isMobile={props.isMobile}/>} />
            <Route path='/pagina-contato' element={<PaginaContato isMobile={props.isMobile}/>} />
            <Route path='/pagina-noticias' element={<PaginaNoticias isMobile={props.isMobile}/>} />
            <Route path='/pagina-blog' element={<PaginaBlog isMobile={props.isMobile}/>} />
            <Route path='/pagina-blog/post' element={<PaginaBlogPost isMobile={props.isMobile}/>} />
            <Route path='/pagina-blog/criar-post' element={<PaginaEditarPost isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route path='/pagina-blog/editar-post' element={<PaginaEditarPost isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route path='/login' element={<PaginaLogin isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route element={<ProtectedRouteProfessor/>}>
                <Route path='/pagina-professor' element={<PaginaDisciplina isMobile={props.isMobile}/>} />
            </Route>
            <Route path='/pagina-aluno' element={<PaginaAluno isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route path='/pagina-aluno/:materias' element={<Frentes isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route path='/pagina-aluno/:materias/:frente' element={<PaginaDisciplina isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route element={<ProtectedRouteAdmin/>}>
                <Route path='/pagina-administrador' element={<PaginaAdministrador isMobile={props.isMobile}/>} />
            </Route>
            <Route element={<ProtectedRouteAdmin/>}>
                <Route path='/pagina-administrador/cadastro' element={<PaginaCadastro isMobile={props.isMobile} navigate={useNavigate}/>} />
            </Route>
        </Routes>
    );
}

export default Roteador;