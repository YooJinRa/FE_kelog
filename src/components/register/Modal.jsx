import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ onClose }) => {
  const dispatch = useDispatch();
  // true일때 로그인 , false이면 회원가입
  const [state, setState] = useState(true);

  const changeState = () => {
    setState(!state);
  };
  return (
    <Background>
      <Content>
        <div className='gray-block'>
          <div>
            <img
              src='https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg'
              alt='welcome'
            />
            <div className='welcome'>환영합니다!</div>
          </div>
        </div>
        <div className='white-block'>
          <div className='exit-wrapper'>
            {state === true ? null : (
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                tabIndex='1'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
                onClick={onClose}
              >
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
              </svg>
            )}
          </div>
          <div className='block-content'>
            <div className='form'>
              <div className='upper-wrapper'>
                {state ? (
                  <LoginForm changeState={changeState} onClose={onClose} />
                ) : (
                  <SignUpForm changeState={changeState} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Background>
  );
};

export default Modal;

//아래는 styled-components를 통한 스타일링

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  .gray-block {
    width: 216px;
    /* var(--bg-element2); */
    background: gray;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
    .welcome {
      font-size: 1.75rem;
      margin-top: 1.5rem;
      color: var(--text2);
      text-align: center;
      font-weight: 600;
    }
  }

  .white-block {
    flex: 1 1 0%;
    background: burlywood;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    .exit-wrapper {
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      font-size: 1.5rem;
      color: var(--text3);
      margin-bottom: 2.25rem;
      svg {
        cursor: pointer;
      }
    }
    .block-content {
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      .form {
        display: flex;
        flex: 1 1 0%;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        line-height: 1.5;
      }
    }
  }
`;

const Content = styled.div`
  width: 750px;
  height: 850px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running cptskd;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  display: flex;
`;
