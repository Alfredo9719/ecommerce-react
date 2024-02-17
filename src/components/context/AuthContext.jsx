import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({
        full_name: '',
        email: ''
    });

    const fnLogin = (token) => {
        const tokenDecoded = jwtDecode(token);
        if(tokenDecoded){
            setIsLogged(true);
            setUser(tokenDecoded);

            window.localStorage.setItem(import.meta.env.VITE_TKN_NAME, token)
        }
        console.log(tokenDecoded);
    }

    const fnLogout = () => {
        console.log("entro a logout");
        setIsLogged(false);
        setUser({
            full_name: '',
            email: ''
        });
        window.localStorage.removeItem(import.meta.env.VITE_TKN_NAME);
    }

    useEffect(()=> {
        console.log("Necesito hacer algo para determinar si ya hay sesion activa...");
        const tkFromStorage = window.localStorage.getItem(import.meta.env.VITE_TKN_NAME);
        if (tkFromStorage) {
            console.log("hay una sesion");
            fnLogin(tkFromStorage);
        }else {
            console.log("no hay sesion");
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isLogged, fnLogin, fnLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };