import {
  ButtonLogin,
  FormEl,
  Input,
  LabelEl,
  SpanEl,
} from 'components/Form/FormElements.styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterMutation } from 'redux/authReducer';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [signUp] = useRegisterMutation();

  const onSubmit = data => {
    console.log(data);
    signUp(data);
    reset();
  };

  return (
    <FormEl onSubmit={handleSubmit(onSubmit)}>
      <LabelEl>
        <SpanEl>Email:</SpanEl>
        <Input {...register('email', { required: true })} type="email" />
        {errors.email && <span>This field is required</span>}
      </LabelEl>

      <LabelEl>
        <SpanEl>Name:</SpanEl>
        <Input {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </LabelEl>

      <LabelEl>
        <SpanEl>Password:</SpanEl>
        <Input
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </LabelEl>

      <ButtonLogin type="submit">Sign Up</ButtonLogin>
    </FormEl>
  );
};
export default RegisterForm;
