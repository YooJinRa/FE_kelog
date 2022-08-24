import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DateItem from './DateItem';
import { NavLink } from 'react-router-dom';

const MainFilter = (props) => {
  const [state, setState] = useState(false);
  console.log(props);

  const onChangeState = () => {
    setState(!state);
  };

  const [value, setValue] = useState('오늘');
  console.log(value); // 오늘 , 이번 주 , 이번 달 , 올해  , value값 기준으로 메인페이지 조건부 렌더링
  // props.onChangeData(value);

  useEffect(() => {
    props.onChangeData(value);
  }, [props, props.onChangeData, value]);

  const onChangeValue = (text) => {
    setValue(text);
  };

  // const day = useSelector((state) => state.post.clickData);
  // console.log(day);

  // const onClickedData = (text) => {
  //   dispatch(clickData(text));
  // };

  return (
    <Stwrapper className='filter-box'>
      <div className='filter-items'>
        <div className='filter-left'>
          <NavLink aria-current='page' to='/' className='trending active'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'></path>
            </svg>
            트렌딩
          </NavLink>
          <NavLink to='/recent' className='recent'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z'></path>
            </svg>
            최신
          </NavLink>
          <div className='underline'></div>
        </div>
        <div className='today'>
          {value}
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
            onClick={onChangeState}
          >
            <path d='M7 10l5 5 5-5z'></path>
          </svg>
          {/* onChangeValue={onChangeValue} */}
          {state === true ? <DateItem onChangeValue={onChangeValue} /> : null}
        </div>
      </div>
    </Stwrapper>
  );
};

export default MainFilter;

const Stwrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  .filter-items {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    .filter-left {
      display: flex;
      position: relative;
      width: 14rem;
      .trending {
        width: 7rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        font-size: 1.125rem;
        text-decoration: none;
        color: var(--text3);
        height: 3rem;
        svg {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
      }
      .trending:hover {
        color: var(--text1);
        font-weight: bold;
      }
      .recent {
        width: 7rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        font-size: 1.125rem;
        text-decoration: none;
        color: var(--text3);
        height: 3rem;
        svg {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
      }
      .underline {
        width: 50%;
        height: 2px;
        position: absolute;
        bottom: 0px;
        background: var(--border1);
      }
    }
    .today {
      background: var(--bg-element1);
      height: 2rem;
      width: 6rem;
      border-radius: 4px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-weight: 600;
      color: var(--text2);
      font-size: 0.875rem;
      box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
      cursor: pointer;
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;
