import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  const redirectLocation = location?.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then( result => {
       const loggedInUser = result.user;
      const savedUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        image: loggedInUser.photoURL,
      };
      fetch("http://localhost:7000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(redirectLocation , {replace: true}) 
        });
     
    })
    .catch( error => {
      console.log(error.message);
    })
  }
  return (
    <div>
      <div className="divider "><small>Or Continue With</small></div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline mx-3">
            <FaGoogle></FaGoogle>
        </button>

        <button className="btn btn-circle btn-outline">
            <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
