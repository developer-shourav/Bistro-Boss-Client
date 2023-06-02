import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider "><small>Or Continue With</small></div>
      <div className="text-center">
        <button className="btn btn-circle btn-outline mx-3">
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
