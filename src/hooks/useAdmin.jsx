import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    
};

export default useAdmin;