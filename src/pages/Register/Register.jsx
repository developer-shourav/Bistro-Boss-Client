import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const {createEmailPasswordUser} = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createEmailPasswordUser(data.email, data.password)
    .then( result => {
      const loggedUser = result.user;
    })
    .catch( error => {
      console.log(error.message);
    })
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    <small>Name is required*</small>
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    <small>Email is required*</small>
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />

                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 text-sm">
                    <small>
                      Password should be at least one uppercase(A-Z) one
                      lowercase(a-z) a number(0-9) and a special
                      character(@#$%&){" "}
                    </small>
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    <small>Password is required</small>
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 text-sm">
                    <small>Password should be at least 6 characters</small>
                  </span>
                )}

                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 text-sm">
                    <small>Password maximum length is 20</small>
                  </span>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
