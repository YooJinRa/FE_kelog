import React from 'react';
import styled from 'styled-components';

const DateItem = (props) => {
  const sendListValue = (text) => {
    console.log(props);
    props.onChangeValue(text);
  };

  //   let ul = document.querySelector('ul');
  //   ul.addEventListener('click', (e) => {
  //     alert(e.target.innerText + 'is Clicked');
  //   });

  return (
    <Wrapper>
      <div>
        <div className='list-wrapper'>
          <ul>
            {/* 매개변수를 전달할때 화살표함수 */}
            <li
              onClick={() => {
                sendListValue('오늘');
              }}
            >
              오늘
            </li>
            <li
              onClick={() => {
                sendListValue('이번 주');
              }}
            >
              이번 주
            </li>
            <li
              onClick={() => {
                sendListValue('이번 달');
              }}
            >
              이번 달
            </li>
            <li
              onClick={() => {
                sendListValue('올해');
              }}
            >
              올해
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default DateItem;

const Wrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: 5;
  .list-wrapper {
    margin-top: 0.5rem;
    width: 12rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0px;
    background: white;
    color: black;
    transform-origin: right top;
    opacity: 1;
    transform: scale(1);
    ul {
      list-style: none;
      padding-left: 0px;
      margin: 0px;
      li {
        cursor: pointer;
        font-weight: 600;
        font-size: 0.875rem;
        padding: 0.75rem 1rem;
      }
      /* li:active {
        color: green;
      } */
      li:hover {
        color: green;
      }
      li + li {
        border-top: 1px solid gray;
      }
    }
  }
`;
