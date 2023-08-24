import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, user, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (isAuthenticated) navigate("/add-service");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    //console.log(values);
    signup(values);
  });

  return (
    <div className="login__container">
      <h2>Login</h2>
      {RegisterErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <div className="input__group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", { required: true })}
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
        </div>
        <div className="input__group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && ( <p className="text-red-500">Email is required</p>)}
        </div>
        <div className="input__group">
          <label htmlFor="password">Password</label>
          <input
          
            type="password"
            id="password"
            name="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <button className= 'btn__auth' type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
