import { useForm } from "react-hook-form";



const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log(data)
    };




  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
                {...register('name', {required:true})}
              />
               {errors.name && <span className="text-red-500 text-sm"><small>Name  is required*</small></span>}
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
                {...register('email', {required:true})}
              />
              {errors.email && <span className="text-red-500 text-sm"><small>Email  is required*</small></span>}
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
                {...register('password', {required:true, minLength:6,  maxLength: 20 })}
              />
               {errors.password?.type === 'required' && <span className="text-red-500 text-sm"><small>Password is required</small></span>}

               {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm"><small>Password should be at least 6 characters</small></span>}
               
               {errors.password?.type === 'maxLength' && <span className="text-red-500 text-sm"><small>Password maximum length is 20</small></span>}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
