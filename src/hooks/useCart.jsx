
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useCart = () => {
  const {user} = useContext(AuthContext);
  
}

export default useCart;