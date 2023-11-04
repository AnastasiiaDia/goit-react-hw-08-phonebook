import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from 'redux/authReducer';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [logIn] = useLoginMutation();

  const onSubmit = data => {
    console.log(data);
    logIn(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email:</span>
        <input {...register('email', { required: true })} type="email" />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        <span>Password:</span>
        <input
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button type="submit">Login</button>
    </form>
  );
};
export default LoginPage;
