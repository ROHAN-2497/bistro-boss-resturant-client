import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
        })
    }
    console.log(watch("example"));
  return (
   <>
   <Helmet>
    <title> bistro boss | SignUp</title>
   </Helmet>
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
                {...register("name", { required: true })} 
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="text"
                {...register("PhotoURL", { required: true })} 
                placeholder="PhotoURL"
                className="input input-bordered"
              />
              {errors.name && <span>You can be use photo required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="Email"
                {...register("email", { required: true })} 
                placeholder="email"
                className="input input-bordered"
              />
               {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true, minLength:6 ,maxLength: 20, 
                pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])$/
                })} 
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <span className="text-red-400">password is required </span>}
              {errors.password?.type === 'minLength' && <span className="text-red-400">password must be 6 charecter </span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-400">password must be less then 20 charecter </span>}
              {errors.password?.type === 'pattern' && <span className="text-red-400">password must have one an uppercase one lowercase one number and one special charecter </span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <input  className="btn btn-primary" type="submit" value="sign Up"/>
            </div>
          </form>
          <p><small>already have an account <Link to='/login'></Link></small></p>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;
