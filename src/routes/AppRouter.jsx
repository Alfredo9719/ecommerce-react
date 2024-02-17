import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';
import Checkout from '../components/pages/Checkout'
import RegistroUsuario from '../components/pages/RegistroUsuario'
import Login from '../components/pages/Login/Login'
import Perfil from '../components/pages/Perfil'
import Productos from '../components/pages/ListaProductos'
import Producto from '../components/pages/Productos'
    
    const NotFound = () => <h1>404: Not Found</h1>;
    
    function AppRouter() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="404" element={<NotFound />} />
    
                    <Route path="home" element={<Home />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="sigup" element={<RegistroUsuario />} />
                    <Route path="login" element={<Login />} />
                    <Route path="Perfil" element={<Perfil />} />
                    <Route path="productos" element={<Productos />} />
                    <Route path="producto/:id" element={<Producto />} />
                </Routes>
            </>
        );
    }
    
export default AppRouter;