import {
  ButtonLogin,
  FormEl,
  Input,
  LabelEl,
  SpanEl,
} from 'components/Form/FormElements.styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useLoginMutation, useRefreshQuery } from 'redux/authReducer';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isSuccess } = useRefreshQuery();
  const [logIn] = useLoginMutation();

  const onSubmit = data => {
    logIn(data);
    reset();
  };

  return (
    <>
      <FormEl onSubmit={handleSubmit(onSubmit)}>
        <LabelEl>
          <SpanEl>Email:</SpanEl>
          <Input {...register('email', { required: true })} type="email" />
          {errors.email && <span>This field is required</span>}
        </LabelEl>
        <LabelEl>
          <SpanEl>Password:</SpanEl>
          <Input
            {...register('password', { required: true, minLength: 7 })}
            type="password"
          />
          {errors.password && <span>This field is required</span>}
        </LabelEl>

        <ButtonLogin type="submit">Login</ButtonLogin>
      </FormEl>
      {isSuccess && <Navigate to="/bookpage" />}
    </>
  );
};
export default LoginPage;
