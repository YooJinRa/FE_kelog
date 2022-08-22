import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/modules/userActions';
import axios from 'axios';

const LoginForm = (props) => {
  // 로그인 성공시 props.onClose
  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, errors },
  } = useForm({ mode: 'onChange' });

  // wathc 입력 비활성화

  const dispatch = useDispatch();

  const sendData = (event) => {
    event.stopPropagation();
    event.preventDefault();
    props.changeState();
  };

  const onSubmit = (data) => {
    console.log(data);

    const body = {
      userId: data.userId,
      password: data.password,
    };

    dispatch(userLogin(body));
  };

  console.log(watch());

  const onError = (error) => {
    console.log(error);
  };

  return (
    <>
      <STh2>로그인</STh2>
      <STsection>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h1>아이디</h1>
          <input
            type='text'
            tabIndex='2'
            placeholder='아이디를 입력하세요.'
            {...register('userId', {
              required: '아이디는 필수값입니다.',
              pattern: {
                value: /^[a-z]+[a-z0-9]{5,19}$/g,
                message: '영문자로 시작하는 영문자 또는 숫자 6~20자 ',
              },
            })}
            aria-invalid={
              !isDirty ? undefined : errors.userId ? 'true' : 'false'
            }
            name='userId'
          />
          {/* {errors.userId && <p>{errors?.userId?.message}</p>} */}
          <h1>비밀번호</h1>
          <input
            tabIndex='2'
            placeholder='비밀번호를 입력하세요.'
            {...register('password', {
              required: '비밀번호는 필수값입니다.',
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: '비밀번호는 영어만 가능합니다.',
              },
            })}
            type='password'
            aria-invalid={
              !isDirty ? undefined : errors.password ? 'true' : 'false'
            }
            name='password'
          />
          {/* {errors.password && (
            <small role='alert'>{errors.password.message}</small>
          )} */}
          <div className='submit-box'>
            <button type='button' className='submit-btn' onClick={onSubmit}>
              로그인
            </button>
            <button type='button' className='submit-btn' onClick={sendData}>
              아직 회원이 아니신가요?
            </button>
            <button
              type='button'
              className='submit-btn'
              onClick={props.onClose}
            >
              홈 화면으로
            </button>
          </div>
        </form>
      </STsection>
    </>
  );
};

export default LoginForm;

const STh2 = styled.h2`
  font-size: 1.125rem;
  color: var(--text1);
  margin: 0px;
`;

const STsection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  transform: translateY(-20%);
  form {
    margin-top: 1.5rem;
    width: 100%;
    display: block;
    h1 {
      text-align: left;
      font-weight: bold;
    }
    input {
      margin-top: 0.5rem;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      font-size: 1rem;
      color: var(--text1);
      flex: 1 1 0%;
      padding: 0.5rem;
      width: 100%;
      background: var(--bg-element1);
      outline: none;
      display: block;
    }
    .submit-box {
      display: block;
      margin-top: 2rem;
      .submit-btn {
        margin-top: 10px;
        width: 75%;
        margin: 0 auto;
        margin-top: 2rem;
      }
    }
  }
`;
