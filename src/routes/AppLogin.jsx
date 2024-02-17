import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/pages/Login/Login'

    
    const NotFound = () => <h1>404: Not Found</h1>;
    
    function AppRouter() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="404" element={<NotFound />} />
    
                    <Route path="login" element={<Login />} />
                </Routes>
            </>
        );
    }
    
export default AppRouter;