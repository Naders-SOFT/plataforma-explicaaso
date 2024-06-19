import { useEffect } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';


function ProtectedRouteAdmin(props) {
  // Recebe o token:
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    // Se não consiste em um admin, manda o usuário de volta para
    // a página de onde ele veio:
    if(token && jwtDecode(token).tipoUsuario !== 'administrador') {
      navigate('/');
    }
  }, [token && jwtDecode(token).tipoUsuario !== 'administrador', navigate, token]);

  // Verifica se há um token existente:
  if(!token) {
    // Se não, retorna o usuário para a página principal:
    return <Navigate to='/' />;
  }

  const decodedData = jwtDecode(token);

  if(decodedData.tipoUsuario === 'administrador') {
    return <Outlet {...props} />;
  } else if(decodedData.tipoUsuario !== 'administrador') {
    return <Navigate to='/' />;
  }
}

export default ProtectedRouteAdmin;