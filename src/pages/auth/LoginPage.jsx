import React from "react";
import { useForm } from "react-hook-form";
import "./RegisterPage.css";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signin, errors: signinErros} = useAuth();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  return (
    <>
      <div className="login__container">
        <h2>Login</h2>
        {signinErros.map((error, i) => (
        <div className="error" key={i}>
          {error}
        </div>
      ))}
        <form onSubmit={onSubmit}>
          <div className="input__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
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
          <button className="btn__auth" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
