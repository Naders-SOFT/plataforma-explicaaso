import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PaginaSobreNos from './pages/PaginaSobreNos';
import PaginaNoticias from './pages/PaginaNoticias';
import PaginaEditarPostNoticia from './pages/PaginaEditarPostNoticia';
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
import PaginaNoticiaPost from "./pages/PaginaNoticiaPostagem";
import PaginaEditarPost from './pages/PaginaEditarPost'
import Frentes from "./components/Disciplina/Frentes";
import ProtectedRouteAdmin from "./ProtectedRoutes/ProtectedRouteAdmin";
import ProtectedRouteProfessor from "./ProtectedRoutes/ProtectedRouteProfessor";
import PaginaCadastroFrente from "./pages/PaginaCadastroFrente";
import PaginaCadastroMaterias from './pages/PaginaCadastroMateria'


function Roteador(props){

    return(
        <Routes>
            <Route path='/' element={<PaginaInicial isMobile={props.isMobile}/>} />
            <Route path='/pagina-sobre-nos' element={<PaginaSobreNos isMobile={props.isMobile}/>} />
            <Route path='/pagina-contato' element={<PaginaContato isMobile={props.isMobile}/>} />
            
            <Route path='/pagina-noticias' element={<PaginaNoticias isMobile={props.isMobile}/>} />
            <Route element={<ProtectedRouteProfessor/>}>
                <Route path='/pagina-noticias/criar-post' element={<PaginaEditarPostNoticia isMobile={props.isMobile} navigate={useNavigate}/>} />
                <Route path='/pagina-noticias/editar-post/:idPost' element={<PaginaEditarPostNoticia isMobile={props.isMobile} navigate={useNavigate}/>} />
            </Route>

            <Route path='/pagina-blog' element={<PaginaBlog isMobile={props.isMobile}/>} />
            <Route element={<ProtectedRouteProfessor/>}>
                <Route path='/pagina-blog/criar-post' element={<PaginaEditarPost isMobile={props.isMobile} navigate={useNavigate}/>} />
                <Route path='/pagina-blog/editar-post/:idPost' element={<PaginaEditarPost isMobile={props.isMobile} navigate={useNavigate}/>} />
            </Route>

            <Route path='/login' element={<PaginaLogin isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route path='/pagina-aluno' element={<PaginaAluno isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route path='/pagina-aluno/:materias' element={<Frentes isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route path='/pagina-provas' element={<PaginaDisciplina isMobile={props.isMobile} navigate={useNavigate} prova={true}/>} />
            <Route path='/pagina-aluno/:materias/:frente' element={<PaginaDisciplina isMobile={props.isMobile} navigate={useNavigate}/>} />
            <Route exact path='/pagina-blog/post/:idPost' element={<PaginaBlogPost isMobile={props.isMobile}/>} />
            <Route exact path='/pagina-noticias/post/:idPost' element={<PaginaNoticiaPost isMobile={props.isMobile}/>} />
            <Route element={<ProtectedRouteAdmin/>}>
                <Route path='/pagina-administrador' element={<PaginaAdministrador isMobile={props.isMobile}/>} />
                <Route path='/pagina-cadastro-frentes/:materia/:adicionar' element={<PaginaCadastroFrente isMobile={props.isMobile} navigate={useNavigate}/>} />
                <Route path='/pagina-cadastro-materia' element={<PaginaCadastroMaterias isMobile={props.isMobile} navigate={useNavigate}/>} />
            </Route>
            <Route element={<ProtectedRouteAdmin/>}>
                <Route path='/pagina-administrador/cadastro' element={<PaginaCadastro isMobile={props.isMobile} navigate={useNavigate}/>} />
            </Route>

        </Routes>
    );
}

export default Roteador;