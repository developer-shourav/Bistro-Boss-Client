import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    const loginPath = location.pathname ;
    return (
        <div>
            {
                loginPath === '/login' ? <Outlet></Outlet> : loginPath === '/register' ? <Outlet></Outlet>  : <> <NavBar> </NavBar>
                <Outlet> </Outlet>
                <Footer> </Footer></>
            }
        </div>
    );
};

export default Main;

