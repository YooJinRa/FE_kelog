import React from 'react';
import styled from 'styled-components';

const MainPostCard = () => {
  return (
    <Stwrapper>
      <a className='card-image' href='/'>
        <div className='image-box'>
          <img
            src='https://velog.velcdn.com/images/geeneve/post/1a9ef368-6c82-48c9-9045-c155532a54b6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-03%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.44.32.png'
            alt='main-img'
          />
        </div>
      </a>
      <div className='content'>
        <a className='content-title' href='/@geeneve/2021-백엔드-개발자-로드맵'>
          <h4>2021 백엔드 개발자 로드맵</h4>
          <div className='content-content'>
            <p>백엔드 개발자 로드맵</p>
          </div>
        </a>
        <div className='sub-info'>
          <span>2021년 10월 16일</span>
          <span className='separator'>·</span>
          <span>23개의 댓글</span>
        </div>
      </div>
      <div className='user-info'>
        <a className='user' href='/@geeneve'>
          <img
            src='https://velog.velcdn.com/images/geeneve/profile/33a27057-ccd5-4fa9-9631-57a5376f73ba/IMG_3328.JPG'
            alt='user thumbnail of geeneve'
          />
          <span>
            by <b>geeneve</b>
          </span>
        </a>
        <div className='likes'>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path
              fill='currentColor'
              d='M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z'
            ></path>
          </svg>
          568
        </div>
      </div>
    </Stwrapper>
  );
};

export default MainPostCard;

const Stwrapper = styled.div`
  border: 1px solid gray;
  width: 23.5rem;
  background: var(--bg-element1);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    .iamge-box {
      width: 100%;
      position: relative;
      img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    }
  }
  .content {
    padding: 1rem;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    a {
      display: block;
      color: inherit;
      text-decoration: none;
      h4 {
        font-size: 1rem;
        margin: 0px 0px 0.25rem;
        line-height: 1.5;
        word-break: break-word;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: var(--text1);
      }
      .content-content {
        flex: 1 1 0%;
      }
    }
  }
  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: var(--text3);
    .separator {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
  .user-info {
    padding: 0.625rem 1rem;
    border-top: 1px solid var(--border4);
    display: flex;
    font-size: 0.75rem;
    line-height: 1.5;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .user {
      text-decoration: none;
      color: inherit;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      img {
        object-fit: cover;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        display: block;
        margin-right: 0.5rem;
      }
      span {
        color: var(--text3);
      }
    }
    .likes {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      svg {
        width: 0.75rem;
        height: 0.75rem;
        margin-right: 0.5rem;
      }
    }
  }
`;
