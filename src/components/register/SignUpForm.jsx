import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostImage from './PostRegisterImage';
import { useDispatch, useSelector } from 'react-redux';
import { existMemberId } from '../../redux/modules/userActions';

const SignUpForm = (props) => {
  // 이미지 업로드 상태 관리
  const [compressedImageFile, setCompressedImageFile] = useState(null);

  const dispatch = useDispatch();

  // 회원가입 성공하면 로그인 화면으로 전환시키기
  const sendData = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.changeState();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, errors },
  } = useForm({ mode: 'onChange' });

  // wathc 입력 비활성화

  const onSubmit = async (data) => {
    console.log(data);
    if (data.password !== data.rePassword) {
      alert('비밀번호와 일치하는지 확인하세요');
    }

    if (compressedImageFile === null) {
      alert('이미지를 입력해주세요');
    }

    // :: 서버 주소
    const URL = {
      BASE: process.env.REACT_APP_BASE_URL,
    };

    // :: image file formData 형식 변환
    const form = new FormData();
    form.append('file', compressedImageFile);

    // :: info contents blob 형식 변환

    const body = {
      username: data.username,
      account: data.userId,
      password: data.password,
      passwordConfirm: data.password,
      usercomment: data.introduction,
    };

    const json = JSON.stringify(body);
    const blob = new Blob([json], { type: 'application/json' });
    form.append('info', blob);

    try {
      const postRegisterResponse = await axios.post(
        `http://3.213.218.180:8080/api/register`,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(postRegisterResponse);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(watch());

  const onError = (error) => {
    console.log(error);
  };

  const [id, setId] = useState('');

  const onChange = (event) => {
    setId(event.target.value);
  };

  const onDuplicate = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('dataId', event.target.value);
    dispatch(existMemberId({ account: id }));
  };

  return (
    <>
      <STh2>회원가입</STh2>
      <STsection>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h1>이미지 등록하기</h1>
          <PostImage setCompressedImageFile={setCompressedImageFile} />
          <h1>이름</h1>
          <input
            type='text'
            tabIndex='2'
            placeholder='이름을 입력하세요.'
            {...register('username', {
              required: '이름은 필수값입니다.',
              min: 1,
            })}
            aria-invalid={
              !isDirty ? undefined : errors.username ? 'true' : 'false'
            }
            name='username'
          />
          {errors.username && <p>{errors?.username?.message}</p>}
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
            value={id}
            onChange={onChange}
            // 중복이면 true 중복이 아니면 false
          />
          <button onClick={onDuplicate}>아이디 중복 체크</button>
          {errors.userId && <p>{errors?.userId?.message}</p>}
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
          {errors.password && (
            <small role='alert'>{errors.password.message}</small>
          )}
          <h1>비밀번호 확인</h1>
          <input
            tabIndex='2'
            placeholder='비밀번호를 다시 입력하세요.'
            {...register('rePassword', {
              required: '비밀번호확인은 필수값입니다.',
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: '비밀번호확인은 영어만 가능합니다.',
              },
            })}
            type='password'
            aria-invalid={
              !isDirty ? undefined : errors.repassword ? 'true' : 'false'
            }
            name='rePassword'
          />
          {errors.rePassword && (
            <small role='alert'>{errors.rePassword.message}</small>
          )}
          <h1>한줄 소개</h1>
          <input
            type='text'
            tabIndex='2'
            placeholder='한줄소개를 입력하세요.'
            {...register('introduction', {
              required: '한줄소개는 필수값입니다.',
            })}
            aria-invalid={
              !isDirty ? undefined : errors.introduction ? 'true' : 'false'
            }
            name='introduction'
          />
          {errors.introduction && (
            <small role='alert'>{errors.introduction.message}</small>
          )}
          <button type='submit' className='submit-btn' onClick={onSubmit}>
            회원가입
          </button>
          <button type='submit' className='submit-btn' onClick={sendData}>
            이미 회원이시라면?
          </button>
        </form>
      </STsection>
    </>
  );
};

export default SignUpForm;

const STh2 = styled.h2`
  font-size: 1.125rem;
  color: var(--text1);
  margin: 0px;
`;

const STsection = styled.section`
  form {
    margin-top: 1.5rem;
    width: 100%;
    display: block;
    height: 3rem;
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
    button {
      margin-top: 1rem;
      width: 75%;
    }
  }
`;
