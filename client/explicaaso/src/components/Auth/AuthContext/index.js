import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState(null);

  // Verificação de autenticação ao atualizar a aplicação:
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedTipoUsuario = localStorage.getItem('tipoUsuario');
    setIsAuthenticated(!!token);
    setTipoUsuario(storedTipoUsuario);
  }, []);

  // Seta a autenticação ao realizar-se login:
  const login = (token, tipoUsuario) => {
    localStorage.setItem('token', token);
    localStorage.setItem('tipoUsuario', tipoUsuario);
    setIsAuthenticated(true);
    setTipoUsuario(tipoUsuario);
  };

  // Reseta autenticação em logout:
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tipoUsuario');
    setIsAuthenticated(false);
    setTipoUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, tipoUsuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;