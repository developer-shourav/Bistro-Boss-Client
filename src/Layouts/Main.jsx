import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    const loginRegisterPath = location.pathname === '/login' || location.pathname ===   '/register' ;
    return (
        <div>
            { loginRegisterPath || <NavBar> </NavBar> }
                         <Outlet> </Outlet>
            { loginRegisterPath || <Footer> </Footer> }
        </div>
    );
};

export default Main;