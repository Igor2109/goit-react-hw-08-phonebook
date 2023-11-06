import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authReducer';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        {/* <span>Email:</span> */}
        <input
          className={css.input}
          {...register('email', { required: true })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        {/* <span>Name:</span> */}
        <input
          className={css.input}
          {...register('name', { required: true })}
          type="name"
          placeholder="Name"
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        {/* <span>Password:</span> */}
        <input
          className={css.input}
          {...register('password', { required: true, minLength: 7 })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button className={css.btnDelete} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterPage;
